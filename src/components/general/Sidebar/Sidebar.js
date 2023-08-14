import React, { useState } from "react";
import { HamburgerButton } from "@/components/HamburgerMenuButton";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import BarChartIcon from "@mui/icons-material/BarChart";
import Link from "next/link";
import { useRouter } from "next/router";
import HistoryIcon from "@mui/icons-material/History";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();
  const Menus = [
    { title: "Dashboard", path: "/dashboard", src: <BarChartIcon /> },
    { title: "History", path: "/history", src: <HistoryIcon /> },
  ];
  console.log(Menus[0].path);
  return (
    <>
      <div
        className={`${
          open ? "sm:w-30p" : "w-fit"
        } hidden sm:block relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
      >
        <ArrowCircleLeftIcon
          className={`${
            !open && "rotate-180"
          } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-9 -right-4 `}
          onClick={() => setOpen(!open)}
        />

        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <Link href={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? "mt-9" : "mt-2"} ${
                  router.pathname === menu.path &&
                  "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <span className="text-2xl">{menu.src}</span>
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className="pt-3">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? "flex" : "hidden"
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
        >
          {Menus.map((menu, index) => (
            <Link href={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? "mt-9" : "mt-2"} ${
                  router.pathname === menu.path &&
                  "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                <span className="text-2xl">{menu.src}</span>
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
