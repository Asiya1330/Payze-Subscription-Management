import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsCenter from "../DashboardContent/NotificationsCenter";
import Link from "next/link";
import { useUserContext } from "@/context/auth";
import { useRouter } from "next/router";

const Navbar = () => {
  const [notifyOpen, setNotifyOpen] = useState(false);
  const router = useRouter();
  const { user } = useUserContext();
  return (
    <>
      <div className={`bg-black text-white`}>
        <nav className="flex px-4 border-b md:shadow-lg items-center relative justify-between">
          <div className="flex justify-center">
            <Link href="/">
              <img
                src={`${
                  router.asPath === "/dashboard" || router.asPath === "/history"
                    ? "https://xxride.com/wp-content/uploads/2022/02/Untitled-design.png"
                    : "https://xxride.com/wp-content/uploads/2021/12/font.png"
                }`}
                alt="XXRide Logo"
                style={{
                  width: `${
                    router.asPath !== "/dashboard" &&
                    router.asPath !== "/history"
                      ? "auto"
                      : "129px"
                  }`,
                  height: `${
                    router.asPath !== "/dashboard" &&
                    router.asPath !== "/history"
                      ? "auto"
                      : "43px"
                  }`,
                }}
              />
            </Link>
          </div>
          {router.asPath !== "/" && router.asPath !== "/payment" && (
            <div className="relative">
              <NotificationsIcon
                className="cursor-pointer"
                onClick={() => setNotifyOpen(!notifyOpen)}
              />
              <NotificationsCenter open={notifyOpen} />
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
