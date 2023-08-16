import { FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchBar = ({ users, setSearchResult, searchResult }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchByDate, setSearchByDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSearch = () => {
    if (!searchByDate) {
      const filteredUsers = users.filter((user) =>
        user.driverId.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResult(filteredUsers);
    } else {
      const filteredUsers = users.filter((user) => {
        const startDBDate = new Date(user.sDate)
        startDBDate.setHours(0, 0, 0, 0);
        selectedDate.setHours(0, 0, 0, 0);
        return startDBDate.getTime() === selectedDate.getTime();
      });
      setSearchResult(filteredUsers);
    }
  };

  const handleReset = () => {
    setSearchResult(null);
  };
  const handleSwitch = () => setSearchByDate(!searchByDate);

  return (
    <div className="flex items-center px-4 justify-between  mt-8 flex-wrap">
      <div className="flex items-center">
        <label>Search By Driver ID</label>
        <FormControlLabel
          sx={{ ml: "0px" }}
          control={
            <Switch
              onChange={handleSwitch}
              checked={searchByDate}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label={`Search By Start Date`}
        />
      </div>

      <div className="flex ">
        <div className="flex flex-col">
          <input
            type={searchByDate ? "hidden" : "text"}
            placeholder={
              searchByDate ? "Select Start Date" : "Search by Driver ID"
            }
            value={
              searchByDate
                ? selectedDate.toISOString().substring(0, 10)
                : searchTerm
            }
            onChange={(e) =>
              searchByDate
                ? setSelectedDate(new Date(e.target.value))
                : setSearchTerm(e.target.value)
            }
            className="mr-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {searchByDate && (
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="mr-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          {searchResult && (
            <button
              onClick={handleReset}
              className="font-bold text-blue-600 shadow-sm cursor-pointer"
            >
              Reset
            </button>
          )}
        </div>

        <button
          onClick={handleSearch}
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
