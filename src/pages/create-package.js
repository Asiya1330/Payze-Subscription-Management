import Sidebar from "@/components/general/Sidebar/Sidebar";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

const currencies = [
  "USD",
  "EUR",
  "JPY",
  "GBP",
  "AUD",
  "CAD",
  "CHF",
  "CNY",
  "SEK",
  "NZD",
  "MXN",
  "SGD",
  "HKD",
  "NOK",
  "KRW",
  "TRY",
  "RUB",
  "INR",
  "BRL",
  "ZAR",
];

const CreatePackage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    country: "",
    city: "",
    pamount: "",
    currency: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="relative sm:flex h-full">
      <Sidebar />
      <div className="flex-1 sm:w-70p p-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <TextField
                required
                type="text"
                id="country"
                name="country"
                label="Country"
                fullWidth
                variant="outlined"
                value={formData.country}
                onChange={handleChange}
                sx={{
                  boxShadow: "1px 2px 11px 3px #8b00002e !important",
                }}
              />
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <TextField
                sx={{
                  boxShadow: "1px 2px 11px 3px #8b00002e !important",
                }}
                required
                type="text"
                id="city"
                name="city"
                label="City"
                fullWidth
                variant="outlined"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <TextField
                sx={{
                  boxShadow: "1px 2px 11px 3px #8b00002e !important",
                }}
                required
                type="number"
                id="pamount"
                name="pamount"
                label="Package Amount"
                fullWidth
                variant="outlined"
                value={formData.pamount}
                onChange={handleChange}
              />
            </div>
            <FormControl sx={{ width: "50%", padding: "0 0.5rem" }}>
              <InputLabel>Currency*</InputLabel>
              <Select
                required
                sx={{
                  boxShadow: "1px 2px 11px 3px #8b00002e !important",
                }}
                value={formData.currency}
                onChange={handleChange}
                name="currency"
                label="Currency"
              >
                {currencies.map((currency) => (
                  <MenuItem key={currency} value={currency}>
                    {currency}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="mb-4">
            <Button
              variant="outlined"
              type="submit"
              sx={{
                boxShadow: "1px 2px 11px 3px #8b00002e !important",
              }}
            >
              Create Package
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePackage;
