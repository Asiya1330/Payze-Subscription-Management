// contexts/SubscriptionContext.js

import { APP_ENV, CRUD, TABLES } from "@/utills/server";
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
  const [subscriptions, setSubscriptions] = useState([]);

  // Fetch subscriptions from an API
  const fetchSubscriptions = async () => {
    try {
      const { data } = await axios(
        `${APP_ENV.domain}/${TABLES.subscriptions}/${CRUD.getAll}`
      );
      setSubscriptions(data);
    } catch (error) {
      toast(`Error:${error}`);
      console.error("Error fetching subscriptions:", error);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  return (
    <SubscriptionContext.Provider value={{ subscriptions }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscriptionContext = () => {
  return useContext(SubscriptionContext);
};
