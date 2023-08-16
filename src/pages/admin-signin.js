import { useUserContext } from "@/context/auth";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AdminSignup = () => {
  const router = useRouter();
  const { login } = useUserContext();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    login(formData.username);
    router.push("/dashboard");
  };
  return (
    <div
      className="pb-8"
      style={{
        backgroundImage: `url(https://www.xxride.com/wp-content/uploads/2021/09/hero02-scaled.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className=" flex flex-col items-center">
        <h1 className="text-white text-4xl font-bold mt-20 m-8">
          Welcome To XXRIDE Driver
        </h1>

        <div className="bg-[#28292d75] text-white p-8 rounded-md shadow-lg  w-11/12 lg:w-1/2 box admin-signup h-[300px]">
          <div className="">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Admin Signin Form
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label htmlFor="firstName" className="block font-medium mb-1">
                    Username
                  </label>
                  <input
                    required
                    type="text"
                    id="username"
                    name="username"
                    className="w-full border rounded py-2 px-3 text-black"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <label htmlFor="password" className="block font-medium mb-1">
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    id="password"
                    name="password"
                    className="w-full border rounded py-2 px-3 text-black"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                  Signin
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
