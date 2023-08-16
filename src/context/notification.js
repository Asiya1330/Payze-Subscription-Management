import { APIS, APP_ENV, CRUD, TABLES } from "@/utills/server";
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSubscriptionContext } from "./subscription";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const { subscriptions } = useSubscriptionContext();

  useEffect(() => {
    fetchNotifications();
  }, [subscriptions]);

  const fetchNotifications = async () => {
    try {
      const { data } = await axios(
        `${APP_ENV.domain}/${TABLES.notifications}/${CRUD.getAll}`
      );
      const combinedData = data.reduce((result, notification) => {
        const matchingSubscriptions = subscriptions.filter((subscription) => {
          return subscription.id === notification.subcriptionId;
        });

        matchingSubscriptions.forEach((matchingSubscription) => {
          const combinedObject = {
            fname: matchingSubscription.fname,
            lname: matchingSubscription.lname,
            eDate: matchingSubscription.eDate,
            id: notification.id,
            isRead: notification.isRead,
            subcriptionId: matchingSubscription.id,
            createdAt: notification.createdAt,
          };
          result.push(combinedObject);
        });

        return result;
      }, []);

      setNotifications(combinedData);
    } catch (error) {
      toast(`Error: ${error}`);
      console.error("Error fetching Notifications:", error);
    }
  };

  const markRead = async (id) => {
    await axios.put(`${APP_ENV.domain}/${APIS.markRead}/${id}`);
    await fetchNotifications();
  };

  const addNotification = (item) => {
    setNotifications([...notifications, item]);
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, markRead, fetchNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  return useContext(NotificationContext);
};
