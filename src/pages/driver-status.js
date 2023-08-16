import Sidebar from "@/components/general/Sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, Switch } from "@mui/material";
import { CSVLink } from "react-csv";
import { useSubscriptionContext } from "@/context/subscription";
import moment from "moment";
import { useUserContext } from "@/context/auth";
import { useRouter } from "next/router";

const DriverStatus = () => {
  const { user } = useUserContext();
  const router = useRouter();

  const { subscriptions } = useSubscriptionContext();

  const [active, setActive] = useState(true);
  const [seeAll, setSeeAll] = useState(false);
  const handleSwitch = () => setActive(!active);
  const [csvData, setCsvData] = useState([]);
  const header = ["Driver ID", "Name", "Start Date", "Status", "End Date"];

  useEffect(() => {
    setCsvData(
      (seeAll
        ? subscriptions
        : subscriptions.filter((user) =>
            active ? user.status === "active" : user.status === "inactive"
          )
      ).map((user) => [
        user.driverId,
        `${user.fname} ${user.lname}`,
        user.sDate,
        user.status,
        user.eDate,
      ])
    );
  }, [seeAll, active, subscriptions]);

  useEffect(() => {
    if (!user) {
      router.push("/admin-signin");
    }
  }, [user]);

  if (!user) {
    return <p>Loading...</p>;
  }
  return (
    <div className="relative sm:flex h-full bg-slate-800">
      <Sidebar />
      <div className="flex-1 sm:w-70p">
        <div className="p-2 sm:p-8 bg-gray-100 h-full w-full">
          <div className="p-2 sm:p-8 bg-white">
            {/* status table */}
            <div className="flex flex-row justify-between items-center mt-8 sm:mt-0 ">
              <FormControlLabel
                required
                control={
                  <Checkbox
                    checked={seeAll}
                    onChange={() => setSeeAll(!seeAll)}
                  />
                }
                label="See All Drivers"
              />

              <FormControlLabel
                sx={{ ml: "0px" }}
                control={
                  <Switch
                    onChange={handleSwitch}
                    checked={active}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label={`${active ? "Active Drivers" : "In-Active Drivers"} `}
              />
            </div>

            <div className=" px-8 mt-8 w-full text-right">
              {csvData.length > 0 && (
                <CSVLink
                  headers={header}
                  className=" bg-blue-300 p-2 rounded-md"
                  data={csvData}
                  filename={`Drivers-${
                    seeAll ? "All-Data" : active ? "Active" : "In-Active"
                  }-Report-${new Date().toISOString()}.csv`}
                >
                  Export CSV
                </CSVLink>
              )}
            </div>
            <div className="flex flex-col mt-4">
              <div className="-my-2 py-2 overflow-x-auto sm:px-6 lg:px-8">
                <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Driver ID
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Name
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
                      </tr>
                    </thead>

                    <tbody className="bg-white">
                      {(seeAll
                        ? subscriptions
                        : subscriptions.filter((user) =>
                            active
                              ? user.status === "active"
                              : user.status === "inactive"
                          )
                      ).map((user, index) => (
                        <tr className="hover:bg-gray-100" key={index}>
                          <td className="px-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="text-sm leading-5 font-medium text-gray-900">
                              {user.driverId}
                            </div>
                          </td>
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
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* cc */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverStatus;
