import React, { useEffect, useState } from "react";
import TopDashboard from "./TopDashboardContent";
import SearchBar from "./SearchBar";
import { CSVLink } from "react-csv";
import { useSubscriptionContext } from "@/context/subscription";
import moment from "moment";

const DashboardContent = () => {
  const { subscriptions } = useSubscriptionContext();

  const [filteredRiders, setFilteredRiders] = useState([]);
  const [filterOption, setFilterOption] = useState(null);
  const [riders, setRiders] = useState([]);
  const [hitCustomFilter, setHitCustomfilter] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const header = [
    "Name",
    "Email",
    "Driver ID",
    "Start Date",
    "Status",
    "End Date",
    "Country",
    "City",
    "Amount",
    "Currency",
  ];
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    setRiders(subscriptions);
  }, [subscriptions]);

  useEffect(() => {
    setCsvData(
      (!searchResult ? riders : searchResult).map((user) => [
        `${user.fname} ${user.lname}`,
        user.email,
        user.driverId,
        user.sDate,
        user.status,
        user.eDate,
        user.country,
        user.city,
        user.amount,
        user.currency,
      ])
    );
  }, [searchResult, riders]);

  useEffect(() => {
    if (filterOption) {
      if (filterOption.value !== "custom") {
        setRiders(filteredRiders);
      }
    }
  }, [filterOption, filteredRiders, hitCustomFilter]);

  useEffect(() => {
    if (filterOption?.value === "custom") {
      if (hitCustomFilter && filteredRiders.length) {
        setRiders(filteredRiders);
        setHitCustomfilter(false);
        setFilteredRiders([]);
      }
    }
  }, [filterOption, hitCustomFilter, filteredRiders, riders]);

  return (
    <div className="dashboard-content w-full">
      <TopDashboard
        setFilteredRiders={setFilteredRiders}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
        setHitCustomfilter={setHitCustomfilter}
      />

      <SearchBar
        searchResult={searchResult}
        users={riders}
        setSearchResult={setSearchResult}
      />

      <div className=" px-8 mt-8 w-full text-right">
        {csvData.length && (
          <CSVLink
            headers={header}
            className=" bg-blue-300 p-2 rounded-md"
            data={csvData}
            filename={`Drivers-Data-Report-${new Date().toISOString()}.csv`}
          >
            Export CSV
          </CSVLink>
        )}
      </div>
      <div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:px-6 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Driver ID
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Start Date
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    End Date
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Country
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    City
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Currency
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {(!searchResult ? riders : searchResult).map((user, index) => (
                  <tr className="hover:bg-gray-100" key={index}>
                    <td className="px-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm leading-5 font-medium text-gray-900">
                            {user.fname} {user.lname}
                          </div>
                          <div className="text-sm leading-5 text-gray-500">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        {user.driverId}
                      </div>
                    </td>
                    <td className="px-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        {moment(user.sDate).format(
                          "MMMM DD, YYYY, h:mm:ss A z"
                        )}
                      </div>
                    </td>
                    <td className="px-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200">
                      {user.status === "active" ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {user.status}
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          {user.status}
                        </span>
                      )}
                    </td>
                    <td className="px-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        {moment(user.eDate).format(
                          "MMMM DD, YYYY, h:mm:ss A z"
                        )}
                      </div>
                    </td>
                    <td className="px-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        {user.country}
                      </div>
                    </td>
                    <td className="px-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        {user.city}
                      </div>
                    </td>
                    <td className="px-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        {user.amount}
                      </div>
                    </td>
                    <td className="px-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 font-medium text-gray-900">
                        {user.currency}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
