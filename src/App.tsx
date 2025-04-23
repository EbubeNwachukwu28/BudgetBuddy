import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";
import Budgets from "./pages/Budgets";
import Reports from "./pages/Reports";

const App: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <Navbar />
    <main className="container mx-auto p-6">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </main>
  </div>
);

export default App;
