import Sidebar from "@/components/general/Sidebar/Sidebar";
import HistoryContent from "@/components/HistoryContent";
import { useUserContext } from "@/context/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const History = () => {
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
      <div className="flex-1 sm:w-70p">
        <HistoryContent />
      </div>
    </div>
  );
};

export default History;
