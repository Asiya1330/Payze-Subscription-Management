import React, { useEffect, useState } from "react";
import FilterUsers from "../FilterUsers";
import { useSubscriptionContext } from "@/context/subscription";
import {
  DriversSVG,
  SubscriptionSVG,
  TotalRevenueSVG,
} from "@/assets/dashboard";

const TopDashboard = ({
  setFilteredRiders,
  setFilterOption,
  filterOption,
  setHitCustomfilter,
}) => {
  const [filteredUsers, setfilteredUsers] = useState({});
  const [filterCustom, setFilterCustom] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const { subscriptions } = useSubscriptionContext();

  useEffect(() => {
    if (filterOption && filterOption.value !== "custom") {
      const filteredData = subscriptions.reduce(
        (acc, user) => {
          if (filterOption.value === "monthly") {
            const currentDate = new Date();
            const thirtyDaysAgo = new Date();
            thirtyDaysAgo.setDate(currentDate.getDate() - 30);

            const compareDate = thirtyDaysAgo.toISOString();

            if (user.sDate > compareDate) {
              acc.users = acc.users + 1;
              acc.subs = acc.users + 1;
              acc.revenue = acc.revenue + parseInt(user.amount);
              acc.riders = [...acc.riders, user];
            }
          }
          if (filterOption.value === "yearly") {
            const currentDate = new Date();
            const yearAgo = new Date(currentDate);
            yearAgo.setDate(currentDate.getDate() - 365);

            const compareDate = yearAgo.toISOString();
            if (user.sDate > compareDate) {
              acc.users = acc.users + 1;
              acc.subs = acc.users + 1;
              acc.revenue = acc.revenue + parseInt(user.amount);
              acc.riders = [...acc.riders, user];
            }
          }
          if (filterOption.value === "day") {
            const currentDate = new Date();
            const oneDayAgo = new Date(currentDate);
            oneDayAgo.setDate(currentDate.getDate() - 1);

            const compareDate = oneDayAgo.toISOString();
            if (user.sDate > compareDate) {
              acc.users = acc.users + 1;
              acc.subs = acc.users + 1;
              acc.revenue = acc.revenue + parseInt(user.amount);
              acc.riders = [...acc.riders, user];
            }
          }
          return acc;
        },

        { users: 0, revenue: 0, riders: [], subs: 0 }
      );
      setFilteredRiders(filteredData.riders);
      setfilteredUsers(filteredData);
    }
  }, [filterOption, startDate, endDate]);

  useEffect(() => {
    if (filterCustom) {
      const filteredData = subscriptions.reduce(
        (acc, user) => {
          if (filterOption.value === "custom") {
            if (
              user.sDate > startDate.toISOString() &&
              user.sDate < endDate.toISOString()
            ) {
              acc.users = acc.users + 1;
              acc.subs = acc.users + 1;
              acc.revenue = acc.revenue + parseInt(user.amount);
              acc.riders = [...acc.riders, user];
            }
          }
          return acc;
        },

        { users: 0, revenue: 0, riders: [], subs: 0 }
      );
      setFilteredRiders(filteredData.riders);
      setfilteredUsers(filteredData);
      setStartDate(null);
      setEndDate(null);
      setFilterCustom(false);
    }
  }, [filterCustom, filterOption, startDate, endDate]);

  return (
    <div className="mt-4">
      <FilterUsers
        filterOption={filterOption}
        setFilterOption={setFilterOption}
        setFilterCustom={setFilterCustom}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        setHitCustomfilter={setHitCustomfilter}
      />

      <div className="text-3xl font-bold text-slate-900 pl-4">
        {filterCustom || (filterOption && filterOption?.value !== "custom")
          ? filterOption.label
          : "Overall Statistics"}
      </div>
      <div className="flex flex-wrap ">
        <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
          <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
            <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
              {DriversSVG}
            </div>

            <div className="mx-5">
              <h4 className="text-2xl font-semibold text-gray-700">
                {filteredUsers.users === 0 || filteredUsers.users
                  ? filteredUsers.users
                  : Object.keys(
                      subscriptions.reduce((acc, record) => {
                        acc[record.driverId] = true;
                        return acc;
                      }, {})
                    ).length}
              </h4>
              <div className="text-gray-500">Drivers</div>
            </div>
          </div>
        </div>

        <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
          <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
            <div className="p-3 rounded-full bg-orange-600 bg-opacity-75">
              {SubscriptionSVG}
            </div>

            <div className="mx-5">
              <h4 className="text-2xl font-semibold text-gray-700">
                {filteredUsers.users === 0 || filteredUsers.users
                  ? filteredUsers.users
                  : subscriptions.length}
              </h4>
              <div className="text-gray-500">Total Subcriptions</div>
            </div>
          </div>
        </div>

        <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
          <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
            <div className="p-3 rounded-full bg-pink-600 bg-opacity-75">
              {TotalRevenueSVG}
            </div>

            <div className="mx-5">
              <h4 className="text-2xl font-semibold text-gray-700">
                {filteredUsers.revenue === 0 || filteredUsers.revenue
                  ? filteredUsers.revenue
                  : subscriptions.reduce(
                      (totalR, sub) => totalR + sub.amount,
                      0
                    )}
              </h4>
              <div className="text-gray-500">Total Revenue</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDashboard;
