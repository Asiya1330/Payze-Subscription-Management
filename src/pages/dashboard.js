import React, { useEffect } from "react";
import DashboardContent from "@/components/DashboardContent/DashboardContent";
import Sidebar from "@/components/general/Sidebar/Sidebar";
import { useUserContext } from "@/context/auth";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { user } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/admin-signin");
    }
  }, [user]);

  if (!user) {
    return <p>Loading...</p>;
  }
  return (
    <div className="relative sm:flex h-full bg-slate-800">
      <Sidebar />
      <div className="flex-1 sm:w-70p bg-gray-100">
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
