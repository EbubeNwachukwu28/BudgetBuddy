import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { supabase } from "../lib/supabase";

interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: string;
  category: string;
  user_id: string;
}

const Transactions: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [txns, setTxns] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) setUserId(data.user.id);
    });
  }, []);

  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    supabase
      .from("transactions")
      .select("*")
      .eq("user_id", userId)
      .order("date", { ascending: false })
      .then(({ data, error }) => {
        setLoading(false);
        if (error) console.error(error);
        else setTxns(data || []);
      });
  }, [userId]);

  if (loading) return <p>Loading…</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Transactions</h1>
      <div className="space-y-4">
        {txns.map((t) => (
          <Card key={t.id} className="flex justify-between items-center">
            <div>
              <div className="font-medium">{t.title}</div>
              <div className="text-sm text-gray-500">
                {t.category} • {t.date}
              </div>
            </div>
            <div
              className={
                t.amount < 0 ? "text-red-600 font-semibold" : "font-semibold"
              }
            >
              {t.amount < 0 ? "-" : "$"}
              {Math.abs(t.amount).toFixed(2)}
            </div>
          </Card>
        ))}
        {txns.length === 0 && <p>No transactions yet</p>}
      </div>
    </div>
  );
};

export default Transactions;
