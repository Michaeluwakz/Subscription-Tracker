import React, { useState, useEffect } from 'react';
import AddSubscription from './components/AddSubscription';
import SubscriptionList from './components/SubscriptionList';
import ExpenseSummary from './components/ExpenseSummary';
import NotificationManager from './components/NotificationManager';
import { getSubscriptions } from './utils/storage';

const App = () => {
  const [subscriptions, setSubscriptions] = useState(getSubscriptions());

  const refreshSubscriptions = () => {
    setSubscriptions(getSubscriptions());
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Subscription Tracker</h1>
      <AddSubscription onAdd={refreshSubscriptions} />
      <ExpenseSummary subscriptions={subscriptions} />
      <SubscriptionList subscriptions={subscriptions} onDelete={refreshSubscriptions} />
      <NotificationManager subscriptions={subscriptions} />
    </div>
  );
};

export default App;