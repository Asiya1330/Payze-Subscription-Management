import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsCenter from "../DashboardContent/NotificationsCenter";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [notifyOpen, setNotifyOpen] = useState(false);
  const hanldeCross = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={`bg-black text-white`}>
        <nav className="flex px-4 border-b md:shadow-lg items-center relative justify-between">
          <div className="flex justify-center">
            <Link href="/">
            <img
              src="https://xxride.com/wp-content/uploads/2021/12/font.png"
              alt="XXRide Logo"
            />
            </Link>
          </div>

          <div className="relative">
            <NotificationsIcon
              className="cursor-pointer"
              onClick={() => setNotifyOpen(!notifyOpen)}
            />
            <NotificationsCenter open={notifyOpen} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
