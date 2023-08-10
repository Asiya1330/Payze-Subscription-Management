import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomDropdown from "@/components/general/customDropdown";
import { options } from "../dashboardData";

const FilterButton = ({
  setFilterOption,
  filterOption,
  setFilterCustom,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const handleOptionSelect = (option) => {
    setFilterOption(option);
    setStartDate(null);
    setEndDate(null);
  };

  const handleFilter = () => {
    if (endDate && startDate) {
      console.log("ede");
      setFilterCustom(true);
    }
  };

  return (
    <div className=" text-right">
      <CustomDropdown options={options} onSelect={handleOptionSelect} />

      {filterOption && filterOption.value === "custom" && (
        <div className="date-picker-container flex items-end justify-end gap-2 mt-2">
          <DatePicker
            className="border p-2 focus:outline-none rounded-md shadow-md"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Start Date"
          />
          <DatePicker
            className="border p-2 focus:outline-none rounded-md shadow-md"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="End Date"
          />
          <button
            className="rounded-md border py-2 px-4 active shadow-md active:bg-slate-100"
            onClick={handleFilter}
          >
            Filter
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
