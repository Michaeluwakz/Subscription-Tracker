export const getSubscriptions = () => {
    const subscriptions = localStorage.getItem('subscriptions');
    return subscriptions ? JSON.parse(subscriptions) : [];
  };
  
  export const saveSubscription = (subscription) => {
    const subscriptions = getSubscriptions();
    subscriptions.push(subscription);
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
  };
  
  export const updateSubscription = (id, updatedSubscription) => {
    const subscriptions = getSubscriptions();
    const updatedSubscriptions = subscriptions.map(sub =>
      sub.id === id ? { ...sub, ...updatedSubscription } : sub
    );
    localStorage.setItem('subscriptions', JSON.stringify(updatedSubscriptions));
  };
  
  export const deleteSubscription = (id) => {
    const subscriptions = getSubscriptions();
    const updatedSubscriptions = subscriptions.filter(sub => sub.id !== id);
    localStorage.setItem('subscriptions', JSON.stringify(updatedSubscriptions));
  };