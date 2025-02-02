import React from 'react';
import { deleteSubscription } from '../utils/storage';

const SubscriptionList = ({ subscriptions, onDelete }) => {
  return (
    <div className="space-y-4">
      {subscriptions.map((sub) => (
        <div key={sub.id} className="p-4 border rounded">
          <h3 className="font-bold">{sub.name}</h3>
          <p>${sub.price} ({sub.billingCycle})</p>
          <p>Next Billing: {sub.nextBillingDate}</p>
          <button
            onClick={() => {
              deleteSubscription(sub.id);
              onDelete();
            }}
            className="mt-2 p-2 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionList;