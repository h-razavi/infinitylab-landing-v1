import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import StartupContactForm from "../components/StartupContactForm";
import { startupData } from "@/app/data/startup";
import Head from "next/head";

function StartupProfile({ params }) {
  const startup = startupData.find((startup) => startup.id === params.startup);
  return (
    <div>
      <Head>
        <title>{startup.nameFa} | {startup.nameEN}</title>
        <meta name="description" content={startup.description} />
      </Head>
      <Navbar isMain={false} />
      <section className="mt-24 h-72">
        <div className="px-16 flex justify-between items-center">
          <div className="flex flex-col justify-between items-start">
            <h1 className="text-6xl drop-shadow-lg font-bold">
              {startup.nameFa} | {startup.nameEN}
            </h1>
            <p className="mt-8 text-2xl">{startup.description}</p>
          </div>
          <div className="flex flex-col justify-start items-center gap-8">
            <Image
              src={startup.logo}
              alt={startup.id}
              height={200}
              width={200}
              className="rounded-full shadow-lg border-8 border-white"
            />
            <a href={startup.websiteURL} target="_blank">
              <div className="flex gap-4 bg-primary text-black text-lg font-bold bg-opacity-70 p-2 rounded-lg hover:bg-white hover:-translate-y-4 transition-all duration-500">
                {startup.websiteText}
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
            <span className="font-bold text-2xl drop-shadow">{startup.initialInfo.yearFounded}</span>
          </li>
          <li className="bg-gradient-to-r from-teal-200 to-lime-200 my-4 px-8 py-2 rounded-2xl flex items-center justify-between">
            <span>بنیانگذار</span>
            <span className="font-bold text-2xl drop-shadow">{startup.initialInfo.founder}</span>
          </li>
          <li className="bg-gradient-to-r from-teal-200 to-lime-200 my-4 px-8 py-2 rounded-2xl flex items-center justify-between">
            <span>حوزه فعالیت</span>
            <span className="font-bold text-2xl drop-shadow">
              {startup.initialInfo.field}
            </span>
          </li>
          <li className="bg-gradient-to-r from-teal-200 to-lime-200 my-4 px-8 py-2 rounded-2xl flex items-center justify-between">
            <span>وضعیت</span>
            <span className="font-bold text-2xl drop-shadow">
              {startup.initialInfo.status}
            </span>
          </li>
        </ul>
      </section>
      <section className="mx-auto w-3/4 mt-12 p-8 border-8 border-white rounded-xl">
        <h2 className="text-3xl font-bold relative -top-12 bg-black inline px-4">
          در یک نگاه
        </h2>
        <p className="text-xl text-center px-12">
          <b>{startup.nameFa}</b> {startup.initialInfo.shortIntro}
        </p>
        <div className="mx-auto rounded-2xl mt-4 bg-gradient-to-r from-slate-500 to-yellow-100 w-fit p-2">
          <Image
            src={startup.mockup}
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
          جهت تعامل با <b>{startup.nameFa}</b> و مشارکت در فعالیتهای این استارت‌آپ از قسمت
          مربوطه اقدام کنید
        </p>
        <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-12">
          <div className="min-w-1/2 border-4 border-white rounded-xl p-4">
            <h2 className="text-3xl font-bold relative -top-10 bg-black inline px-4">
              شبکه‌های اجتماعی
            </h2>
            <div className="flex gap-4 items-center">
              <a href={startup.links.instagram} target="_blank">
                <Image
                  src={"/images/icons/instagram.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href={startup.links.linkedin} target="_blank">
                <Image
                  src={"/images/icons/linkedin.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href={startup.links.telegram} target="_blank">
                <Image
                  src={"/images/icons/telegram-color.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href={startup.links.discord} target="_blank">
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
              <a href={startup.links.github} target="_blank">
                <Image
                  src={"/images/icons/github.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href={startup.links.gitlab} target="_blank">
                <Image
                  src={"/images/icons/gitlab.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href={startup.links.notion} target="_blank">
                <Image
                  src={"/images/icons/notion.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href={startup.links.trello} target="_blank">
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
              <a href={startup.links.newsletter} target="_blank">
                <Image
                  src={"/images/icons/newsletter.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href={startup.links.blog} target="_blank">
                <Image
                  src={"/images/icons/blog.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href={startup.links.youtube} target="_blank">
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
              <a href={startup.links.discord} target="_blank">
                <Image
                  src={"/images/icons/discord.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href={startup.links.googlemeet} target="_blank">
                <Image
                  src={"/images/icons/google-meet.svg"}
                  height={60}
                  width={60}
                  className="bg-white rounded-lg p-2 hover:-translate-y-2 transition-all duration-500"
                />
              </a>
              <a href={startup.links.zoom} target="_blank">
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
            سوالات بیشتری دارید؟جهت تماس مستقیم با این استارت‌آپ فرم زیر را پر
            کنید.
          </p>
          <StartupContactForm />
        </div>
      </section>
    </div>
  );
}

export default StartupProfile;
