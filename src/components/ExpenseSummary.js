import React from 'react';
import { Pie } from 'react-chartjs-2';
import { calculateTotalExpenses, groupByCategory } from '../utils/calculations';

const ExpenseSummary = ({ subscriptions }) => {
  const totalExpenses = calculateTotalExpenses(subscriptions);
  const categories = groupByCategory(subscriptions);

  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        data: Object.values(categories),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Total Monthly Expenses: ${totalExpenses.toFixed(2)}</h2>
      <Pie data={data} />
    </div>
  );
};

export default ExpenseSummary;