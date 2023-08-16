import React, { useState } from "react";
import FilterListIcon from '@mui/icons-material/FilterList';

const CustomDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown w-full flex flex-col justify-end items-end sm:mt-0">
      <div className="dropdown-header  " onClick={() => setIsOpen(!isOpen)}>
        <button className="rounded-sm bg-slate-900 text-white px-4 py-2 w-[200px] shadow-md">
        <FilterListIcon />{selectedOption ? selectedOption.label : "Select Filter"}
        </button>
      </div>
      {isOpen && (
        <ul className="dropdown-options border p-2 w-[200px] shadow-md">
          {options.map((option) => (
            <li className="border-b-2 last-of-type:border-none cursor-pointer hover:bg-gray-100" key={option.value} onClick={() => handleOptionSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
