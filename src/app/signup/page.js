"use client";
import Image from "next/image";
import React, { useState } from "react";
import supabase from "../../../supabase-client";
import talentIcon from "../../../public/images/talent.svg";
import influenceIcon from "../../../public/images/influence.svg";
import capitalIcon from "../../../public/images/capital.svg";
import LoadingSpinner from "@/components/LoadingSpinner";
import Link from "next/link";
import Logo from "../../../public/images/logo-black.png";

function SignupPage() {
  const [checkboxes, setCheckboxes] = useState([false, false, false, false]);
  const [otherText, setOtherText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorObject, setErrorObject] = useState({
    nameError: false,
    emailError: false,
    otherTextError: false,
    checkboxesError: false,
  });

  const handleCheckboxChange = (index) => (event) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = event.target.checked;
    setCheckboxes(newCheckboxes);
  };

  const handleTextChange = (event) => {
    setOtherText(event.target.value);
  };

  async function handleSubmitData(e) {
    let formData;
    setLoading(true);
    e.preventDefault();

    if (!checkboxes.includes(true)) {
      setErrorObject({ checkboxesError: true });
      return;
    }

    setErrorObject({
      nameError: !name,
      emailError: !email,
      otherTextError: !otherText,
    });

    setName("");
    setEmail("");
    setOtherText("");
    setCheckboxes([false, false, false, false]);
    formData = {
      name,
      email,
      otherText,
      checkboxes,
    };
    console.log(formData);
    const { error } = await supabase.from("member-data").insert([
      formData
    ])
    if (error) {
      alert(error.message)
    } else {
      alert("اطلاعات شما با موفقیت ارسال شد")
    }
    setLoading(false);
  }

  return (
    <div className=" my-24 flex items-center justify-center overflow-y-scroll">
      <div className="fixed inset-0 bg-gray-900 opacity-50 backdrop-blur-md"></div>
      <div className="bg-white p-5 rounded-lg shadow-2xl text-black z-10 text-center">
          <Link href="/" className="flex items-center gap-2 border-2 border-black rounded-md w-fit p-2">
        <Image src={Logo} alt="logo" height={25} />
        <h4 className="text-right">بازگشت</h4>
          </Link>
        <h2 className="text-2xl font-bold border-b-8 border-primary my-4">
          همراه ما شو
        </h2>
        <p className="mt-4 text-lg">
          حضور گرم شما در جامعه اینفینیتی لب افتخار ماست
        </p>
        <p className="mt-4 text-lg text-slate-500">
          بعد از پر کردن فرم زیر، ما خیلی زود با شما تماس خواهیم گرفت
        </p>
        <form onSubmit={handleSubmitData}>
          <div className="flex flex-col items-start mt-6">
            <label htmlFor="name" className="font-bold pr-3">
              نام و نام خانوادگی<span className="text-red-500">*</span>
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={(e) =>
                !e.target.value
                  ? setErrorObject({ nameError: true })
                  : setErrorObject({ nameError: false })
              }
              name="name"
              type="text"
              placeholder="نام و نام خانوادگی"
              className=" w-full border-2 border-slate-500 px-4 py-2 rounded-lg"
            />
            {errorObject.nameError && (
              <p className="text-red-500 pr-2 font-light">
                نام و نام خانوادگی را به درستی وارد کنید
              </p>
            )}
          </div>
          <div className="flex flex-col items-start mt-6">
            <label htmlFor="email" className="font-bold pr-3">
              آدرس ایمیل<span className="text-red-500">*</span>
            </label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={(e) =>
                !e.target.value
                  ? setErrorObject({ emailError: true })
                  : setErrorObject({ emailError: false })
              }
              name="email"
              type="email"
              placeholder="آدرس ایمیل"
              className=" w-full border-2 border-slate-500 px-4 py-2 rounded-lg"
            />
            {errorObject.emailError && (
              <p className="text-red-500 pr-2 font-light">
                ایمیل را به درستی وارد کنید
              </p>
            )}
          </div>

          <div className="mt-4 text-right">
            <h3 className="pr-3 font-bold">
              با خود چه چیزی را به اینفینیتی لب خواهید آورد؟
              <span className="text-red-500">*</span>
            </h3>
            {errorObject.checkboxesError && (
              <p className="text-red-500 pr-2 font-light">
                لطفاً یکی از گزینه‌های زیر را انتخاب کنید
              </p>
            )}
            <label
              htmlFor="talent"
              className="p-4 border-2 border-slate-400 rounded-md block my-4"
            >
              <div className="flex items-center gap-2 cursor-pointer font-bold text-xl justify-between">
                <input
                  type="checkbox"
                  id="talent"
                  name="talent"
                  checked={checkboxes[0]}
                  onChange={handleCheckboxChange(0)}
                  className="h-8 w-8 "
                />
                استعداد و توانایی ‌فنی
                <Image
                  src={talentIcon}
                  alt="talent"
                  height={30}
                  className="bg-black rounded-full h-16 w-16"
                />
              </div>
            </label>

            <label
              htmlFor="influence"
              className="p-4 border-2 border-slate-400 rounded-md block my-4"
            >
              <div className="flex items-center gap-2 cursor-pointer font-bold text-xl justify-between">
                <input
                  type="checkbox"
                  id="influence"
                  name="influence"
                  checked={checkboxes[1]}
                  onChange={handleCheckboxChange(1)}
                  className="h-8 w-8"
                />
                نفوذ و روابط اجتماعی
                <Image
                  src={influenceIcon}
                  alt="influence"
                  height={30}
                  className="bg-black rounded-full h-16 w-16"
                />
              </div>
            </label>

            <label
              htmlFor="capital"
              className="p-4 border-2 border-slate-400 rounded-md block my-4"
            >
              <div className="flex items-center gap-2 cursor-pointer font-bold text-xl justify-between">
                <input
                  type="checkbox"
                  id="capital"
                  name="capital"
                  checked={checkboxes[2]}
                  onChange={handleCheckboxChange(2)}
                  className="h-8 w-8 "
                />
                سرمایه مالی
                <Image
                  src={capitalIcon}
                  alt="capital"
                  height={30}
                  className="bg-black rounded-full h-16 w-16"
                />
              </div>
            </label>

            <label
              htmlFor="other"
              className="p-4 border-2 border-slate-400 rounded-md block my-4"
            >
              <div className="flex items-center gap-2 cursor-pointer font-bold text-xl">
                <input
                  type="checkbox"
                  id="other"
                  name="other"
                  checked={checkboxes[3]}
                  onChange={handleCheckboxChange(3)}
                  className="h-8 w-8 "
                />
                نوع دیگری از سرمایه
              </div>
            </label>
            {checkboxes[3] && (
              <>
                <input
                  required
                  type="text"
                  value={otherText}
                  onChange={handleTextChange}
                  onBlur={(e) =>
                    !e.target.value
                      ? setErrorObject({ otherTextError: true })
                      : setErrorObject({ otherTextError: false })
                  }
                  placeholder="بیشتر توضیح دهید"
                  className="w-full border-2 border-slate-500 px-4 py-2 rounded-lg"
                />
                {errorObject.otherTextError && (
                  <p className="text-red-500 pr-2 font-light">
                    لطفا توضیحات خود را به طور کامل وارد کنید
                  </p>
                )}
              </>
            )}
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-hover text-black w-full font-bold my-4 px-4 py-2 rounded-lg"
          >
            {loading?<LoadingSpinner />:"ثبت اطلاعات"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
