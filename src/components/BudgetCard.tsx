import './BudgetCard.css';

interface Props {
  category: string;
  spent: number;
  limit: number;
}

const BudgetCard = ({ category, spent, limit }: Props) => {
  const percent = Math.min((spent / limit) * 100, 100);

  return (
    <div className="budget-card">
      <div className="label">{category}</div>
      <div className="progress-wrapper">
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${percent}%` }}></div>
        </div>
      </div>
      <div className="amount">
        <strong>${spent}</strong>
        <span>${limit}</span>
      </div>
    </div>
  );
};

export default BudgetCard;