import React, { useState } from 'react';
import DashboardContent from '@/components/DashboardContent/DashboardContent';
import Sidebar from '@/components/general/Sidebar/Sidebar';

const Dashboard = () => {
  return (
    <div className="relative sm:flex h-full">
      <Sidebar />
      <div className="flex-1 sm:w-70p">
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
