// src/pages/Accounts.tsx
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { supabase } from "../lib/supabase";

interface Account {
  id: string;
  name: string;
  balance: number;
  user_id: string;
}

const Accounts: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [newName, setNewName] = useState("");
  const [newBalance, setNewBalance] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  // 1) load the current user ID
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) setUserId(data.user.id);
    });
  }, []);

  // 2) fetch this user’s accounts whenever userId changes
  const fetchAccounts = async () => {
    if (!userId) return;
    setLoading(true);
    const { data, error } = await supabase
      .from("accounts")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) console.error(error);
    else setAccounts(data ?? []);

    setLoading(false);
  };

  useEffect(() => {
    fetchAccounts();
  }, [userId]);

  // 3) insert a new account tagged with user_id, then re‐fetch
  const handleAdd = async () => {
    if (!userId || !newName) return;
    setLoading(true);

    const { error } = await supabase
      .from("accounts")
      .insert({ name: newName, balance: newBalance, user_id: userId });

    if (error) console.error(error);
    setNewName("");
    setNewBalance(0);

    await fetchAccounts();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Accounts</h1>

      <div className="flex items-center space-x-2 mb-6">
        <input
          type="text"
          placeholder="Account Name"
          className="input"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Balance"
          className="input w-32"
          value={newBalance}
          onChange={(e) => setNewBalance(parseFloat(e.target.value) || 0)}
        />
        <Button onClick={handleAdd}>+ Add Account</Button>
      </div>

      {loading ? (
        <p>Loading…</p>
      ) : accounts.length === 0 ? (
        <p>No accounts yet</p>
      ) : (
        <div className="space-y-4">
          {accounts.map((acc) => (
            <Card
              key={acc.id}
              className="flex justify-between items-center p-4"
            >
              <span className="font-medium">{acc.name}</span>
              <span className="text-xl font-semibold">
                {acc.balance < 0 ? "-" : ""}${Math.abs(acc.balance)}
              </span>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accounts;
