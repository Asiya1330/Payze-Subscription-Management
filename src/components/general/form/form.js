import { useRouter } from "next/router";
import React, { useState } from "react";
const FormComponent = () => {
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

  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/payment");
  };

  return (
    <div className=" flex flex-col items-center">
      <h1 className="text-white text-4xl font-bold mt-20 m-8">
        Welcome To XXRIDE Driver
      </h1>

      <div className="bg-[#00000047] text-white p-8 rounded-md shadow-lg  w-11/12 lg:w-1/2 box">
        <div className="form">
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
              <input
                required
                type="text"
                id="country"
                name="country"
                className="w-full border rounded py-2 px-3 text-black"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            <div className="w-full sm:w-1/2 px-2 mb-4">
              <label htmlFor="city" className="block font-medium mb-1">
                City
              </label>
              <input
                required
                type="text"
                id="city"
                name="city"
                className="w-full border rounded py-2 px-3 text-black"
                value={formData.city}
                onChange={handleChange}
              />
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
