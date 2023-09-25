import Image from "next/image";
import React from "react";
import logo from "../../../public/images/logo-wtext-black.png";

function AboutPage() {
  return (
    <div className="w-screen h-screen p-36">
      <div className="bg-white rounded-xl min-h-1/2 min-w-1/2 text-black p-12">
        <div className="flex flex-col items-center">
          <Image src={logo} alt="about" height={400} width={400} />
          <h1 className="bg-primary p-4 text-2xl rounded-xl font-extrabold animate-pulse">
            استارت‌آپ استدیو اینفینیتی لب
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
