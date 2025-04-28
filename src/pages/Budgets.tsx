import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import { supabase } from "../lib/supabase";

interface Budget {
  id: string;
  category: string;
  spent: number;
  limit: number;
  user_id: string;
}

const Budgets: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [budgets, setBudgets] = useState<Budget[]>([]);
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
      .from("budgets")
      .select("*")
      .eq("user_id", userId)
      .then(({ data, error }) => {
        setLoading(false);
        if (error) console.error(error);
        else setBudgets(data || []);
      });
  }, [userId]);

  if (loading) return <p>Loading…</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Budgets</h1>
      <div className="space-y-4">
        {budgets.map((b) => {
          const pct = Math.min(100, Math.round((b.spent / b.limit) * 100));
          return (
            <Card key={b.id} className="flex items-center justify-between">
              <div className="w-1/3 font-medium">{b.category}</div>
              <div className="w-1/2">
                <ProgressBar percentage={pct} />
              </div>
              <div className="w-1/6 text-right">
                <span className="font-semibold">${b.spent}</span>
                <span className="text-gray-500">/${b.limit}</span>
              </div>
            </Card>
          );
        })}
        {budgets.length === 0 && <p>No budgets set</p>}
      </div>
    </div>
  );
};

export default Budgets;
