import React, { useEffect } from 'react';

const NotificationManager = ({ subscriptions }) => {
  useEffect(() => {
    const checkNotifications = () => {
      const today = new Date();
      subscriptions.forEach((sub) => {
        const billingDate = new Date(sub.nextBillingDate);
        const diffTime = billingDate - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1 && Notification.permission === 'granted') {
          new Notification(`Reminder: Your ${sub.name} subscription renews tomorrow!`);
        }
      });
    };

    if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(checkNotifications);
    } else {
      checkNotifications();
    }
  }, [subscriptions]);

  return null;
};

export default NotificationManager;