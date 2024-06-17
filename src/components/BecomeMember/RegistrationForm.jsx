import React, { useState } from "react";
import { Button, Input, Option, Select } from "@material-tailwind/react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [currStep, setCurrStep] = useState(1);

  const nextStep = () => {
    setCurrStep(currStep + 1);
  };
  const prevStep = () => {
    setCurrStep(currStep - 1);
  };

  const selectLength = username.length;
  const inputLength = username.length;

  const selectColor = selectLength.value === "Select City" ? "red" : "green";
  const refNoColor =
    inputLength >= 1 ? "red" : inputLength === 11 ? "green" : "";

  const inputColor =
    inputLength >= 1 && inputLength < 10
      ? "red"
      : inputLength === 10
      ? "green"
      : "";
  const inputColor1 =
    inputLength >= 1 ? "red" : inputLength === 10 ? "green" : "";
  const emailColor =
    username.includes("@") && username.includes(".") ? "green" : "red";

  return (
    <div className=" h-screen w-screen flex justify-center items-center flex-col bg-gray-100">
      <h1 className=" text-2xl font-semibold mb-10">INITIAL CHECKS</h1>
      <form
        action=""
        className=" bg-white p-8 rounded-lg shadow-xl flex flex-col gap-4 w-4/5"
      >
        {currStep === 1 && (
          <>
            <div className=" flex gap-4 lg2:flex-col">
              <Select color={selectColor} label="Select City">
                <Option>Kolkata</Option>
              </Select>
              <Select color={selectColor} label="Select Zone">
                <Option>South</Option>
              </Select>
            </div>
            <div className=" flex gap-4 lg2:flex-col">
              <Select color={selectColor} label="Select Toli">
                <Option>Tagore</Option>
                <Option>Bose</Option>
              </Select>
              <Input
                label="Reference No."
                color={refNoColor}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className=" flex gap-4 lg2:flex-col">
              <Input
                label="Email Address"
                color={emailColor}
                onChange={(e) => setUsername(e.target.value)}
                type="email"
              />
              <Input
                label="Full Name"
                color={inputColor}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </>
        )}
        {currStep === 2 && (
          <>
            <div className=" flex gap-4 lg2:flex-col">
            
  <div className="relative w-full min-w-[200px] h-10">
    <input
      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" " /><label
      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Phone No.
    </label>
  
</div>  


  <div className="relative w-full min-w-[200px] h-10">
    <input
      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" " /><label
      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Alternate Phone No.
    </label>
  
</div>  
            </div>
          </>
        )}
        <div className=" w-full flex justify-center gap-4">
          <Button className={`${currStep>1 && currStep <=3 ? " static": "hidden"}`} onClick={prevStep}>Back</Button>
          <Button onClick={nextStep}>{currStep === 3 ? "Submit" : "Next"}</Button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
