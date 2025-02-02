import React, { useState } from 'react';
import { saveSubscription } from '../utils/storage';

const AddSubscription = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [nextBillingDate, setNextBillingDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subscription = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      billingCycle,
      nextBillingDate,
    };
    saveSubscription(subscription);
    onAdd();
    setName('');
    setPrice('');
    setBillingCycle('monthly');
    setNextBillingDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Subscription Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <select
        value={billingCycle}
        onChange={(e) => setBillingCycle(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      <input
        type="date"
        value={nextBillingDate}
        onChange={(e) => setNextBillingDate(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Add Subscription
      </button>
    </form>
  );
};

export default AddSubscription;