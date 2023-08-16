import Sidebar from "@/components/general/Sidebar/Sidebar";
import React, { useEffect } from "react";
import { Avatar, Divider, Typography } from "@mui/material";
import { useNotificationContext } from "@/context/notification";
import moment from "moment";
import useInterval from "@/hooks/useInterval";
import axios from "axios";
import { useUserContext } from "@/context/auth";
import { useRouter } from "next/router";
import { APP_ENV } from "@/utills/server";

const Notifications = () => {
  const { fetchNotifications } = useNotificationContext();
  const callApi = async () => {
    try {
      await axios.post(`${APP_ENV.domain}/subscriptions/check-subs`);
      fetchNotifications();
      console.log("API call successful");
    } catch (error) {
      console.error("API call error:", error);
    }
  };

  // Call callApi every 12 hours (in milliseconds)
  // 10 * 1000
  // 12 * 60 * 60 * 1000
  useInterval(callApi, 12 * 60 * 60 * 1000);

  const { notifications, markRead } = useNotificationContext();

  const sortedNoti = [...notifications].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const handleMarkRead = (id) => markRead(id);
  const { user } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/admin-signin");
    }
  }, [user]);

  if (!user) {
    return <p>Loading....</p>;
  }
  return (
    <div className="relative sm:flex h-full bg-slate-800">
      <Sidebar />
      <div className="flex-1 sm:w-70p">
        <div className="p-5 bg-gray-100 h-full flex flex-col gap-2">
          {sortedNoti.map((notification) => {
            return (
              <div
                key={notification.id}
                className="p-5 bg-white flex flex-col gap-2"
              >
                <div className="title font-bold text-gray-800 text-lg">
                  Driver Subscription is about to expire
                </div>
                <li
                  className={`${
                    notification.isRead ? "" : "bg-orange-50"
                  } unread p-4  list-none text-sm sm:text-md`}
                >
                  <div className="flex">
                    <Avatar sx={{ bgcolor: "purple", width: 30, height: 30 }}>
                      <Typography>OP</Typography>
                    </Avatar>
                    <div className="ml-2">
                      <strong className="text-gray-900">
                        {notification.fname} {notification.lname}
                      </strong>{" "}
                      subscription will expire on
                    </div>{" "}
                    &nbsp;
                    <div className="font-semibold text-red-400 ">
                      {moment(notification.eDate).format(
                        "MMMM DD, YYYY, h:mm:ss A z"
                      )}
                    </div>
                  </div>
                </li>
                <Divider></Divider>
                {!notification.isRead ? (
                  <div
                    className="mark-as-read font-bold text-blue-500 cursor-pointer"
                    onClick={() => handleMarkRead(notification.id)}
                  >
                    Mark as read
                  </div>
                ) : (
                  <div className="mark-as-read font-bold text-gray-300 select-none">
                    Mark as read
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
