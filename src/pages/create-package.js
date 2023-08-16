import Sidebar from "@/components/general/Sidebar/Sidebar";
import { useUserContext } from "@/context/auth";
import { usePackageContext } from "@/context/subPackage";
import { APP_ENV, CRUD, TABLES } from "@/utills/server";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
  const { packages, addPackage } = usePackageContext();
  const [formData, setFormData] = useState({
    country: "",
    city: "",
    amount: 0,
    currency: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.amount < 1) throw new Error("Amount cannot be less than 1");
      await axios.post(`${APP_ENV.domain}/${TABLES.packages}`, formData);
      setFormData({
        country: "",
        city: "",
        amount: 0,
        currency: "",
      });
      addPackage(formData);
      toast(`Sucesss: Package Created Successfully`);
    } catch (e) {
      toast(`${e}`);
    }
  };
  const { user } = useUserContext();

  useEffect(() => {
    if (!user) {
      router.push("/admin-signin");
    }
  }, [user]);

  if (!user) {
    return <p>Loading...</p>;
  }
  return (
    <div className="relative sm:flex h-full ">
      <Sidebar />
      <div className="flex-1 sm:w-70p p-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 px-2 mb-4 mt-4">
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
                id="amount"
                name="amount"
                label="Package Amount"
                fullWidth
                variant="outlined"
                value={formData.amount}
                onChange={handleChange}
              />
            </div>
            <FormControl
              sx={{ width: "50%", padding: "0 0.5rem", marginBottom: "10px" }}
            >
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

        <div className="flex flex-col mt-8">
          <div className="-my-2 py-2 overflow-x-auto sm:px-6 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr>
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
                  {packages.map((item, index) => (
                    <tr className="hover:bg-gray-100" key={item.id}>
                      <td className="px-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 font-medium text-gray-900">
                          {item.country}
                        </div>
                      </td>

                      <td className="px-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 font-medium text-gray-900">
                          {item.city}
                        </div>
                      </td>

                      <td className="px-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 font-medium text-gray-900">
                          {item.amount}
                        </div>
                      </td>
                      <td className="px-2 py-2 sm:px-6 sm:py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="text-sm leading-5 font-medium text-gray-900">
                          {item.currency}
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
    </div>
  );
};

export default CreatePackage;
