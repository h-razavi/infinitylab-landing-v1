import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

function StartupProfile() {
  return (
    <div>
      <Navbar isMain={false} />
      <section className="mt-24 h-72">
        <div className="px-16 flex justify-between items-center">
          <div className="flex flex-col justify-between items-start">
            <h1 className="text-6xl drop-shadow-lg font-bold">
              پادجو | Podjoo
            </h1>
            <p className="mt-8 text-2xl">
              استارت‌آپی در حوزه پادکست جهت یافتن و پیشنهاد پادکستها به سلیقه
              های مشابه
            </p>
          </div>
          <div className="flex flex-col justify-start items-center gap-8">
            <Image
              src="/images/startups/podjoo.jpg"
              alt="Podjoo"
              height={200}
              width={200}
              className="rounded-full shadow-lg border-8 border-white"
            />
            <a href="https://www.podjoo.com" target="_blank">
              <div className="flex gap-4 bg-primary text-black text-lg font-bold bg-opacity-70 p-2 rounded-lg hover:bg-white hover:-translate-y-4 transition-all duration-500">
                WWW.PODJOO.COM
              </div>
            </a>
          </div>
        </div>
        <div className="w-screen h-4 bg-primary bg-opacity-70 relative -top-36 -z-10" />
      </section>
      {/* <div className="h-4 w-36 rounded-full bg-primary mx-auto mt-12" /> */}
      <section className="mx-auto w-3/4 mt-12 p-8 border-8 border-white rounded-xl">
        <h2 className="text-3xl font-bold relative -top-12 bg-black inline px-4">
          اطلاعات اولیه
        </h2>
        <ul className="leading-loose text-xl px-12 text-black">
          <li className="bg-gradient-to-r from-teal-200 to-lime-200 my-4 px-8 py-2 rounded-2xl flex items-center justify-between">
            <span>سال تاسیس</span>
            <span className="font-bold text-2xl drop-shadow">2022</span>
          </li>
          <li className="bg-gradient-to-r from-teal-200 to-lime-200 my-4 px-8 py-2 rounded-2xl flex items-center justify-between">
            <span>بنیانگذار</span>
            <span className="font-bold text-2xl drop-shadow">حسین رضوی</span>
          </li>
          <li className="bg-gradient-to-r from-teal-200 to-lime-200 my-4 px-8 py-2 rounded-2xl flex items-center justify-between">
            <span>حوزه فعالیت</span>
            <span className="font-bold text-2xl drop-shadow">
              فناوری و نرم‌افزار
            </span>
          </li>
          <li className="bg-gradient-to-r from-teal-200 to-lime-200 my-4 px-8 py-2 rounded-2xl flex items-center justify-between">
            <span>وضعیت</span>
            <span className="font-bold text-2xl drop-shadow">
              آماده جذب سرمایه
            </span>
          </li>
        </ul>
      </section>
      <section className="mx-auto w-3/4 mt-12 p-8 border-8 border-white rounded-xl">
        <h2 className="text-3xl font-bold relative -top-12 bg-black inline px-4">
          در یک نگاه
        </h2>
        <p className="text-xl text-center px-12">
          <b>پادجو</b> وب اپلیکیشنی است که به شنوندگان پادکست فارسی کمک می‌کند
          به محتوای مورد علاقه خود سریعتر و آسانتر دسترسی داشته باشند و بتوانند
          بر اساس سلایق خود پادکستهای بیشتری پیدا کنند. این اپلیکیشن همینطور به
          تولیدکنندگان محتوای پادکست فارسی این فرصت را می‌دهد تا با شنوندگان خود
          تعامل بیشتر و مستقیم داشته باشند
        </p>
        <div className="mx-auto rounded-2xl mt-4 bg-gradient-to-r from-slate-500 to-yellow-100 w-fit p-2">
          <Image
            src="/images/startups/mockup1.jpg"
            height={300}
            width={300}
            className="rounded-2xl"
          />
        </div>
      </section>
      <section className="mx-auto w-3/4 mt-12 p-8 border-8 border-white rounded-xl">
        <h2 className="text-3xl font-bold relative -top-12 bg-black inline px-4">
          داشبورد
        </h2>
        <p className="text-xl mb-16">
          جهت تعامل با <b>پادجو</b> و مشارکت در فعالیتهای این استارت‌آپ از قسمت
          مربوطه اقدام کنید
        </p>
        <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-12">
          <div className="min-w-1/2 border-4 border-white rounded-xl p-4">
            <h2 className="text-3xl font-bold relative -top-10 bg-black inline px-4">
              شبکه‌های اجتماعی
            </h2>
            <div className="flex gap-4 items-center">
              <a href="https://instagram.com/podjoo" target="_blank">
                <Image
                  src={"/images/icons/instagram.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href="https://linkedin.com/podjoo" target="_blank">
                <Image
                  src={"/images/icons/linkedin.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href="https://telegram.com/podjoo" target="_blank">
                <Image
                  src={"/images/icons/telegram-color.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href="https://discord.com/podjoo" target="_blank">
                <Image
                  src={"/images/icons/discord.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
            </div>
          </div>
          <div className="min-w-1/2 border-4 border-white rounded-xl p-4">
            <h2 className="text-3xl font-bold relative -top-10 bg-black inline px-4">
              فضای کاری
            </h2>
            <div className="flex gap-4">
              <a href="https://github.com/podjoo" target="_blank">
                <Image
                  src={"/images/icons/github.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href="https://gitlab.com/podjoo" target="_blank">
                <Image
                  src={"/images/icons/gitlab.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href="https://notion.com/podjoo" target="_blank">
                <Image
                  src={"/images/icons/notion.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href="https://trello.com/podjoo" target="_blank">
                <Image
                  src={"/images/icons/trello.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
            </div>
          </div>
          <div className="min-w-1/2 border-4 border-white rounded-xl p-4">
            <h2 className="text-3xl font-bold relative -top-10 bg-black inline px-4">
              اطلاع‌رسانی
            </h2>
            <div className="flex gap-4">
              <a href="https://github.com/podjoo" target="_blank">
                <Image
                  src={"/images/icons/newsletter.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href="https://gitlab.com/podjoo" target="_blank">
                <Image
                  src={"/images/icons/blog.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href="https://youtube.com/podjoo" target="_blank">
                <Image
                  src={"/images/icons/youtube.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
            </div>
          </div>
          <div className="min-w-1/2 border-4 border-white rounded-xl p-4">
            <h2 className="text-3xl font-bold relative -top-10 bg-black inline px-4">
              بحث‌وگفتگو
            </h2>
            <div className="flex gap-4">
              <a href="https://discord.com/podjoo" target="_blank">
                <Image
                  src={"/images/icons/discord.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href="https://googlemeet.com/podjoo" target="_blank">
                <Image
                  src={"/images/icons/google-meet.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href="https://zoom.com/podjoo" target="_blank">
                <Image
                  src={"/images/icons/zoom.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full mt-8 border-4 border-white rounded-2xl px-4">
        <h2 className="text-3xl font-bold relative -top-4 bg-black inline px-4">
          فرم تماس
        </h2>
        <p>
          جهت تماس مستقیم با این استارت‌آپ فرم زیر را پر کنید.
        </p>
        <form className="mt-8 flex flex-col gap-4 w-full mb-8">
          <div className="flex gap-4 w-full justify-between">
          <input type="text" placeholder="نام" className="bg-white bg-opacity-30 p-2 rounded-lg w-[50%]" />
          <input type="email" placeholder="ایمیل" className="bg-white bg-opacity-30 p-2 rounded-lg w-[50%]" />
          </div>
          <textarea placeholder="پیام" className="bg-white bg-opacity-30 p-2 rounded-lg"></textarea>
          <button className="bg-primary hover:bg-hover text-black text-xl p-2 rounded-lg">ارسال</button>
        </form>
        </div>
      </section>
    </div>
  );
}

export default StartupProfile;
