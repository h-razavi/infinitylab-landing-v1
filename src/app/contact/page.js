"use client"
import Navbar from '@/components/Navbar';
import React from 'react'
import {useForm} from 'react-hook-form'

function ContactUs() {
const {register, handleSubmit} = useForm();
function onSubmit(formData){
    window.location.href = `mailto : infinitylab.startup.studio@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name}.${formData.message}`
}
  return (
    <>
    <Navbar isMain={false} />
    <div className="w-screen h-screen px-12 md:px-24">
    <div className="bg-white rounded-xl min-h-1/2 min-w-1/2 text-black p-12">
        <h1 className='text-center font-extrabold text-3xl'>فرم تماس</h1>
        <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto mt-8"
      >
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="نام"
            className="p-2 border-2 border-black rounded-md"
            {...register("name")}
          />
          <input
            type="email"
            placeholder="ایمیل"
            className="p-2 border-2 border-black rounded-md"
            {...register("email")}
          />
        </div>
        <input
          className="p-2 border-2 border-black rounded-md"
          placeholder="موضوع"
          {...register("subject")}
        />
        <textarea
          className="p-2 border-2 border-black rounded-md"
          placeholder="پیام شما"
          {...register("message")}
        />
        <button className="bg-primary hover:bg-hover py-5 rounded-md font-bold text-lg">
          Submit
        </button>
      </form>
    </div>
    </div>
    </>
  )
}

export default ContactUs