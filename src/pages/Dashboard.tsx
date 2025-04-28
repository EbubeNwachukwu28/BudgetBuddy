// src/pages/Dashboard.tsx
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import ReportsChart from "../components/ReportsChart";
import { supabase } from "../lib/supabase";

interface Budget {
  id: string;
  category: string;
  spent: number;
  limit: number;
  user_id: string;
}

interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: string;
  category: string;
  user_id: string;
}

interface MonthlyData {
  month: string;
  amount: number;
}

const Dashboard: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [totalBalance, setTotalBalance] = useState<number>(0);
  const [weekSpending, setWeekSpending] = useState<number>(0);
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [recentTxns, setRecentTxns] = useState<Transaction[]>([]);
  const [monthlyData, setMonthlyData] = useState<MonthlyData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // 1) get current user ID
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) setUserId(data.user.id);
    });
  }, []);

  // 2) whenever userId arrives, fetch *all* dashboard data
  useEffect(() => {
    if (!userId) return;
    setLoading(true);

    const monday = new Date();
    monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
    const mondayISO = monday.toISOString().slice(0, 10);

    const fetchAll = async () => {
      // a) total balance
      const { data: accs } = await supabase
        .from("accounts")
        .select("balance")
        .eq("user_id", userId);

      setTotalBalance(accs?.reduce((sum, a) => sum + (a.balance ?? 0), 0) ?? 0);

      // b) this week's spending
      const { data: wk } = await supabase
        .from("transactions")
        .select("amount,date")
        .gte("date", mondayISO)
        .eq("user_id", userId);

      setWeekSpending(
        wk?.reduce((sum, t) => sum + (t.amount < 0 ? -t.amount : 0), 0) ?? 0
      );

      // c) budgets
      const { data: bgs } = await supabase
        .from("budgets")
        .select("*")
        .eq("user_id", userId);

      setBudgets(bgs ?? []);

      // d) recent 5 txns
      const { data: recent } = await supabase
        .from("transactions")
        .select("*")
        .eq("user_id", userId)
        .order("date", { ascending: false })
        .limit(5);

      setRecentTxns(recent ?? []);

      // e) monthly spending (Jan–Dec)
      const { data: allTx } = await supabase
        .from("transactions")
        .select("amount,date")
        .eq("user_id", userId);

      const m: Record<string, number> = {};
      allTx?.forEach((t) => {
        const mo = new Date(t.date).toLocaleString("default", {
          month: "short",
        });
        m[mo] = (m[mo] || 0) + (t.amount < 0 ? -t.amount : 0);
      });
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      setMonthlyData(months.map((mo) => ({ month: mo, amount: m[mo] || 0 })));

      setLoading(false);
    };

    fetchAll();
  }, [userId]);

  if (loading) return <p>Loading dashboard…</p>;

  // greeting by time
  const hour = new Date().getHours();
  let greet = "Good evening";
  if (hour < 12) greet = "Good morning";
  else if (hour < 18) greet = "Good afternoon";

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{greet}!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <div className="text-gray-500">Current Balance</div>
          <div className="text-4xl font-semibold">
            ${totalBalance.toFixed(2)}
          </div>
        </Card>

        <Card>
          <div className="text-gray-500">This Week’s Spending</div>
          <div className="text-4xl font-semibold">
            ${weekSpending.toFixed(2)}
          </div>
        </Card>

        <Card>
          <div className="text-gray-500 mb-1">Budget & Alerts</div>
          {budgets[0] && (
            <>
              <ProgressBar
                percentage={Math.min(
                  100,
                  Math.round((budgets[0].spent / budgets[0].limit) * 100)
                )}
              />
              <div className="text-sm mt-1">
                “{budgets[0].category}” ${budgets[0].spent}/${budgets[0].limit}
              </div>
            </>
          )}
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <div className="text-gray-500 mb-2">Recent Transactions</div>
          <ul className="space-y-2">
            {recentTxns.map((tx) => (
              <li key={tx.id} className="flex justify-between">
                <span>{tx.title}</span>
                <span
                  className={tx.amount < 0 ? "text-red-600" : "text-green-600"}
                >
                  {tx.amount < 0 ? "-" : ""}${Math.abs(tx.amount).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <div className="text-gray-500 mb-2">Monthly Spending</div>
          <ReportsChart data={monthlyData} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
