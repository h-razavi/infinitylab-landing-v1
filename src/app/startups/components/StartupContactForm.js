"use client";
import React , {useRef}  from "react";

function StartupContactForm() { 


const emailInputRef = useRef();
const nameInputRef = useRef();
const messageInputRef = useRef();

function handleSubmit(e){
    e.preventDefault();
    const email = emailInputRef.current.value;
    const name = nameInputRef.current.value;
    const message = messageInputRef.current.value;
    if(!email || !name || !message){
        alert("لطفا همه فیلدها را پر کنید")
        return;
    }
    console.log(`the user named ${name} sent an email from ${email} with the message: ${message}`);
    emailInputRef.current.value = "";
    nameInputRef.current.value = "";
    messageInputRef.current.value = "";
    alert("پیام شما دریافت شد")
}
  return (
    <form className="mt-8 flex flex-col gap-4 w-full mb-8" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-4 w-full justify-between">
        <input
          type="text"
          placeholder="نام"
          className="bg-white bg-opacity-30 p-2 rounded-lg md:w-[50%]"
          ref={nameInputRef}
        />
        <input
          type="email"
          placeholder="ایمیل"
          className="bg-white bg-opacity-30 p-2 rounded-lg md:w-[50%]"
          ref={emailInputRef}
        />
      </div>
      <textarea
        placeholder="ایده خود را به طور خلاصه اینجا بنویسید. ما پس از بررسی با شما تماس خواهیم گرفت"
        className="bg-white bg-opacity-30 p-2 rounded-lg"
        rows={5}
        ref={messageInputRef}
      ></textarea>
      <button className="bg-primary hover:bg-hover text-black text-xl p-2 rounded-lg">
        ارسال
      </button>
    </form>
  );
}

export default StartupContactForm;
