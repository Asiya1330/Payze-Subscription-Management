import Sidebar from "@/components/general/Sidebar/Sidebar";
import HistoryContent from '@/components/HistoryContent'
import React from "react";

const History = () => {
  return (
    <div className="relative sm:flex h-full">
      <Sidebar />
      <div className="flex-1 sm:w-70p">
        <HistoryContent />
      </div>
    </div>
  );
};

export default History;
