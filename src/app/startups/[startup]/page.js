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
            <div className="flex gap-4 bg-white bg-opacity-70 p-2 rounded-lg">
              <a href="https://instagram.com/podjoo" target="_blank">
              <Image src="/images/icons/instagram.svg" height={40} width={40} className="hover:scale-110" />
              </a>
              <a href="https://linkedin.com/in/podjoo" target="_blank">
              <Image src="/images/icons/linkedin.svg" height={40} width={40} className="hover:scale-110" />
              </a>
              <a href="https://podjoo.com" target="_blank">
              <Image src="/images/icons/www.svg" height={40} width={40} className="hover:scale-110" />
              </a>
              <a href="https://t.me/podjoo" target="_blank">
              <Image src="/images/icons/telegram.svg" height={40} width={40} className="hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-screen h-4 bg-primary bg-opacity-70 relative -top-36 -z-10" />
      </section>
      <div className="h-4 w-36 rounded-full bg-primary mx-auto mt-12" />
      <section className="mx-auto w-3/4 border-8 border-white rounded-lg">
        <h2>اطلاعات اولیه</h2>
        </section>
    </div>
  );
}

export default StartupProfile;
