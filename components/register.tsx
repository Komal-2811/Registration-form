"use client"
import { Button } from '@heroui/button'
import { database } from "../firebase";
import { ref, set } from "firebase/database";
import { useRef } from "react";
import React, { useState } from 'react'
import { Input } from '@heroui/input'
import { ToastContainer } from 'react-toastify'
import { sync } from 'motion'
const register = () => {
    const [name, setName] = useState("komal");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");     
    const [regNo, setRegNo] = useState("");
    const [department, setDepartment] = useState("");
    const [year, setYear] = useState("");
    const [reason, setReason] = useState("");
    const formSubmit=async()=>{
        if (name=="" || email==""|| phone=="" || regNo==""|| department==""||year=="" || reason=="") {
            console.log("Please fill all the feilds");
            return;
        }
        await set(ref(database, `registration/${email.split("@")[0]}`), {
            Name: name,
            Email: email,
            Phone: phone,
            RegNo: regNo,
            Department: department,
            Year: year,
            Reason: reason,
          })
        console.log("Form Submitted");
        setName("");
        setEmail("");
        setPhone("");
        setRegNo("");
        setDepartment("");
        setYear("");
        setReason("");

    };
    
    return (
        <div className='border-2 border-gray-300' >
            <Input label="Name" placeholder="Enter your name" type='text'  value={name} onChange={(newValue)=>setName(newValue.target.value)} />
            <Input label="Email" placeholder="Enter your email" type='text' value={email} onChange={(newValue)=>setEmail(newValue.target.value)}/>
            <Input label="Phone-Number" placeholder="Enter your Phone Number" type='number' value={phone} onChange={(newValue)=>setPhone(newValue.target.value)} />
            <Input label="Registration Number" placeholder="Enter your Registration Number" type='number' value={regNo} onChange={(newValue)=>setRegNo(newValue.target.value)}   />
            <Input label="Department" placeholder="Enter your Department" type='text' value={department} onChange={(newValue)=>setDepartment(newValue.target.value)} />
            <Input label="Year" placeholder="Enter your College Year" type='number' value={year} onChange={(newValue)=>setYear(newValue.target.value)}/>
            <Input label="Reason to join" placeholder="State the raeson to attend this workshop" type='text' value={reason}onChange={(newValue)=>setReason(newValue.target.value)}/>
            <Button className='w-fit px-3' variant='ghost' color='success' onPress={formSubmit}>Submit</Button>
        </div>
    )
}

export default register
