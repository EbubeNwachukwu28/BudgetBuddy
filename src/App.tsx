import Navbar from './components/Navbar';
import BudgetCard from './components/BudgetCard';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="dashboard">
        <header className="dashboard-header">
          <h1>Budgets</h1>
          <button className="add-btn">+ Add Budget</button>
        </header>
        <div className="cards">
          <BudgetCard category="Food" spent={350} limit={400} />
          <BudgetCard category="Transportation" spent={150} limit={200} />
          <BudgetCard category="Entertainment" spent={100} limit={150} />
        </div>
      </main>
    </>
  );
}

export default App;