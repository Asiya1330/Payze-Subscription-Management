import { Avatar, Divider } from "@mui/material";
import React from "react";

const NotificationsCenter = ({ open }) => {
  return (
    <div
      className={`dropdown-menu dropdown-menu-right show active w-[370px] border text-gray-500 bg-white shadow-md z-20 ${
        open ? "" : "hidden"
      }`}
      aria-labelledby="dropdownMenuButton"
      x-placement="bottom-end"
      style={{
        position: "absolute",
        willChange: "transform",
        top: "40px",
        right: "10px",
      }}
    >
      <div class="title-wrap flex items-center p-2">
        <h3 class="text-md mb-0 font-medium text-gray-900">Notifications</h3>
        <div class="small ml-auto text-blue-500">Mark all as read</div>
      </div>
      <Divider></Divider>
      <ul class="custom-notifications">
        <li class="unread p-4 hover:bg-gray-200 bg-orange-50 ">
          <div class="flex">
            <Avatar sx={{ bgcolor: "purple" }}>OP</Avatar>
            <div class="ml-2">
              <strong className="text-gray-900">Claudia Gideon</strong> marked
              the task done a day ago
            </div>
          </div>
        </li>
        <Divider />

        <li class="p-4 unread hover:bg-gray-200 bg-orange-50">
          <div class="flex">
            <Avatar sx={{ bgcolor: "purple" }}>OP</Avatar>
            <div class="ml-2">
              <strong className="text-gray-900">Alex Stafford</strong> marked
              the task done a day ago
            </div>
          </div>
        </li>
        <Divider />

        <li className="p-4 hover:bg-gray-200">
          <div class="flex">
            <Avatar sx={{ bgcolor: "purple" }}>OP</Avatar>
            <div class="text ml-2">
              <strong className="text-gray-900">Devin Richards</strong>{" "}
              mentioned you in her comment on Invoices 2 days ago
            </div>
          </div>
        </li>
        <Divider />

        <li className="p-4 hover:bg-gray-200">
          <div class="flex">
            <Avatar sx={{ bgcolor: "purple" }}>OP</Avatar>
            <div class="ml-2">
              <strong className="text-gray-900">Alex Stafford</strong> marked
              the task done a day ago
            </div>
          </div>
        </li>
        <Divider />
        <li className="p-4 hover:bg-gray-200">
          <div class="flex">
            <Avatar sx={{ bgcolor: "purple" }}>OP</Avatar>
            <div class="ml-2">
              <strong className="text-gray-900">Devin Richards</strong>{" "}
              mentioned you in her comment on Invoices 2 days ago
            </div>
          </div>
        </li>
        <Divider />
      </ul>
      <Divider />
      <p class="text-center m-0 text-blue-500 p-2">
        <a href="#" class="small">
          View All
        </a>
      </p>
    </div>
  );
};

export default NotificationsCenter;
