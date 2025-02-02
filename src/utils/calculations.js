export const calculateTotalExpenses = (subscriptions) => {
    return subscriptions.reduce((total, sub) => {
      if (sub.billingCycle === 'monthly') return total + sub.price;
      if (sub.billingCycle === 'yearly') return total + sub.price / 12;
      return total;
    }, 0);
  };
  
  export const groupByCategory = (subscriptions) => {
    return subscriptions.reduce((groups, sub) => {
      const category = sub.category || 'Uncategorized';
      groups[category] = (groups[category] || 0) + sub.price;
      return groups;
    }, {});
  };