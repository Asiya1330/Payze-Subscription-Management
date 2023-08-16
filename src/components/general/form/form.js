import { useUserContext } from "@/context/auth";
import { usePackageContext } from "@/context/subPackage";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const FormComponent = () => {
  const { packages } = usePackageContext(); //{country, city} --packages contain this objects
  const { login, user } = useUserContext();
  const router = useRouter();
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    govtId: "",
    rideId: "",
  });

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      country: selectedCountry,
      city: "", // Reset the city when country changes
    }));

    // Filter cities based on the selected country
    const countryCities = packages
      .filter((item) => item.country === selectedCountry)
      .map((item) => item.city);

    setCities(countryCities);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let role = formData.email.endsWith("@admin.com") ? "admin" : "standard";
    login({ ...formData, role });
  };

  useEffect(() => {
    if (!!user?.role) {
      if (user.role === "admin") router.push("/dashboard");
      else router.push("payment");
    }
  }, [user]);

  return (
    <div className=" flex flex-col items-center">
      <h1 className="text-white text-4xl font-bold mt-20 m-8">
        Welcome To XXRIDE Driver
      </h1>

      <div className="bg-[#28292d75] text-white p-8 rounded-md shadow-lg  w-11/12 lg:w-1/2 box">
        <div className="form bg-[#28292d75]">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Payment Registration Form
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <label htmlFor="firstName" className="block font-medium mb-1">
                  First Name
                </label>
                <input
                  required
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full border rounded py-2 px-3 text-black"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <label htmlFor="lastName" className="block font-medium mb-1">
                  Last Name
                </label>
                <input
                  required
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full border rounded py-2 px-3 text-black"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <label htmlFor="country" className="block font-medium mb-1">
                  Country
                </label>
                <select
                  required
                  id="country"
                  name="country"
                  className="w-full border rounded py-2 px-3 text-black"
                  value={formData.country}
                  onChange={handleCountryChange}
                >
                  <option value="">Select a country</option>
                  {Array.from(
                    new Set(packages.map((item) => item.country))
                  ).map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <label htmlFor="city" className="block font-medium mb-1">
                  City
                </label>
                <select
                  required
                  id="city"
                  name="city"
                  className="w-full border rounded py-2 px-3 text-black"
                  value={formData.city}
                  onChange={handleChange}
                >
                  <option value="">Select a city</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <label htmlFor="email" className="block font-medium mb-1">
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border rounded py-2 px-3 text-black"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <label htmlFor="phone" className="block font-medium mb-1">
                  Phone Number
                </label>
                <input
                  required
                  type="phone"
                  id="phone"
                  name="phone"
                  className="w-full border rounded py-2 px-3 text-black"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <label htmlFor="govtId" className="block font-medium mb-1">
                  Government ID Number
                </label>
                <input
                  required
                  type="text"
                  id="govtId"
                  name="govtId"
                  className="w-full border rounded py-2 px-3 text-black"
                  value={formData.govtId}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <label htmlFor="rideId" className="block font-medium mb-1">
                  XXRIDE ID Number
                </label>
                <input
                  required
                  type="text"
                  id="rideId"
                  name="rideId"
                  className="w-full border rounded py-2 px-3 text-black"
                  value={formData.rideId}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
