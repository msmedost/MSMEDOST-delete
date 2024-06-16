import React, { useState } from 'react'
import { Button, Input, Option, Select } from "@material-tailwind/react";

function RegistrationForm() {
    const [username, setUsername] = useState('');

const selectLength = username.length;
  const inputLength = username.length;

  const selectColor = selectLength.value === "Select City"? "red": "green";
  const refNoColor = inputLength >= 1 ? "red" : inputLength === 11 ? "green": "";


  const inputColor = inputLength >= 1 && inputLength < 10? 'red' : inputLength === 10? 'green' : '';
  const inputColor1 = inputLength >= 1 ? 'red' : inputLength === 10? 'green' : '';
  const emailColor = username.includes('@') && username.includes('.')? 'green' : 'red';


  return (
    <div className=' h-screen w-screen flex justify-center items-center flex-col bg-gray-200'>
        <h1>INITIAL CHECKS</h1>
        <form action="" className=' bg-white p-8 rounded-lg shadow-xl flex flex-col gap-4 w-4/5'>
            <div className=' flex gap-4 lg2:flex-col'>
                <Select color={selectColor} label='Select City'>
                    <Option>Kolkata</Option>
                </Select>
                <Select color={selectColor} label='Select Zone'>
                    <Option>South</Option>
                </Select>
            </div>
            <div className=' flex gap-4 lg2:flex-col'>
            <Select color={selectColor} label='Select Toli'>
                    <Option>Tagore</Option>
                    <Option>Bose</Option>
                </Select>
            <Input label="Reference No." color={refNoColor} onChange={(e) => setUsername(e.target.value)} 
            />
            </div>
            <div className=' flex gap-4 lg2:flex-col'>
            <Input label="Email Address" color={emailColor} onChange={(e) => setUsername(e.target.value)} type='email'/>
            <Input label="Full Name" color={inputColor} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className=' w-full flex justify-center'>
            <Button>Next</Button>
            </div>
        </form>
    </div>
  )
}

export default RegistrationForm