import { APP_ENV, CRUD, TABLES } from "@/utills/server";
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PackageContext = createContext();

export const PackageProvider = ({ children }) => {
  const [packages, setPackages] = useState([]);

  // Fetch Packages from an API
  const fetchPackages = async () => {
    try {
      const { data } = await axios(
        `${APP_ENV.domain}/${TABLES.packages}/${CRUD.getAll}`
      );
      setPackages(data);
    } catch (error) {
      toast(`Error: ${error}`);
      console.error("Error fetching Packages:", error);
    }
  };

  const addPackage = (item) => {
    setPackages([...packages, item]);
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <PackageContext.Provider value={{ packages, addPackage }}>
      {children}
    </PackageContext.Provider>
  );
};

export const usePackageContext = () => {
  return useContext(PackageContext);
};
