import { Grid } from "@mui/material";
import React, { useState } from "react";
import BecomeMrSteamerImg from "../../assets/images/BecomeMrSteamer.png";
import { JOB_TYPES, SUADIA_CITIES } from "../../utils/constants";

export const BecomeMrSteamer = () => {
  const [formMode, setFormMode] = useState("individual");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [jobType, setJobType] = useState("");
  return (
    <section id="contact">
      <div className="px-6 md:px-12 pt-12 md:pt-28 pb-8">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <h1 style={{ fontWeight: 600 }} className="mb-[1rem] md:mb-[1rem]">
              Become Mr. Steamer
            </h1>
            {/* button tabs  */}
            <div
              className="bg-[#F1F1F1] flex gap-2 px-8 py-4 rounded-md"
              style={{ width: "340px" }}
            >
              <button
                className={`border-none flex flex-col py-2 px-4 cursor-pointer ${
                  formMode === "individual" ? "text-white" : "text-[#666]"
                }`}
                style={{
                  borderRadius: "10px",
                  background: `${
                    formMode === "individual"
                      ? "linear-gradient(131deg, #000 0%, #2C4694 100%)"
                      : "white"
                  }`,
                }}
                onClick={() => setFormMode("individual")}
              >
                <span>Service for</span>
                <span style={{ fontWeight: 600 }}>Individual Customer</span>
              </button>
              <button
                className={`border-none flex flex-col py-2 px-4 cursor-pointer ${
                  formMode === "company" ? "text-white" : "text-[#666]"
                }`}
                style={{
                  borderRadius: "10px",
                  background: `${
                    formMode === "company"
                      ? "linear-gradient(131deg, #000 0%, #2C4694 100%)"
                      : "white"
                  }`,
                }}
                onClick={() => setFormMode("company")}
              >
                <span>Service for</span>
                <span style={{ fontWeight: 600 }}>Corporate Sector</span>
              </button>
            </div>
            <div className="bg-[#F1F1F1] md:w-[300px] flex flex-col gap-5 px-8 py-4 mt-8 rounded-md">
              <p style={{ fontWeight: 600, fontSize: 18 }}>
                Registration with us
              </p>
              <div className="flex flex-col gap-1">
                <label htmlFor="jobType" className="text-sm">
                  Job Type
                </label>
                <select
                  id="jobType"
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 focus:border-gray-400 focus:outline-none bg-white rounded-md"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                >
                  {JOB_TYPES.map((jobType) => (
                    <option key={jobType.name} value={jobType.value}>
                      {jobType.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Full Name"
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 rounded-md focus:border-gray-400 focus:outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm">
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter Mobile Number"
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 rounded-md focus:border-gray-400 focus:outline-none"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email Address"
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 rounded-md focus:border-gray-400 focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="city" className="text-sm">
                  City
                </label>
                <select
                  id="city"
                  className="p-2 border border-solid border-[#D2D7DE] transition-colors duration-300 focus:border-gray-400 focus:outline-none bg-white rounded-md"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option>Select</option>
                  {SUADIA_CITIES.map((city) => (
                    <option key={city} value={city.toLowerCase()}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="border-none flex justify-center p-4 text-white cursor-pointer rounded-2xl"
                style={{
                  background: "linear-gradient(131deg, #000 0%, #2C4694 100%)",
                }}
                // onClick={() => alert(JSON.stringify({name, email, mobile, city, jobType}))}
              >
                <p>Register</p>
              </button>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="w-full flex justify-center">
              <img
                src={BecomeMrSteamerImg}
                alt="BecomeMrSteamerImage"
                className="w-full md:w-[500px]"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};
