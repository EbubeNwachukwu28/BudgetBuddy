import React from "react";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => (
  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
    <div className="h-full bg-blue-600" style={{ width: `${percentage}%` }} />
  </div>
);

export default ProgressBar;
