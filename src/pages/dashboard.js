import React from 'react';
import DashboardContent from '@/components/DashboardContent/DashboardContent';
import Sidebar from '@/components/general/Sidebar/Sidebar';


const Dashboard = () => {
  return (
    <div className="container flex h-full">
      <Sidebar />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
