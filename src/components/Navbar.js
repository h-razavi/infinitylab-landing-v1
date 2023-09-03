import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo-wtext-white.png";
import CTAButton from "./CTAButton";

function Navbar() {
  return (
    <nav className="px-16 py-10 flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <Image src={Logo} alt="logo" height={80} />
        <h2 className="font-extrabold text-3xl ">استارت‌آپ استودیو</h2>
      </Link>
      <div className="flex items-center">
        <div className="flex gap-10 ml-16 text-2xl">
          <a className="hover:outline-4 hover:outline outline-offset-8 outline-primary cursor-pointer hover:transition-all hover:duration-500">چرا؟</a>
          <a className="hover:outline-4 hover:outline outline-offset-8 outline-primary cursor-pointer hover:transition-all hover:duration-500">چی؟</a>
          <a className="hover:outline-4 hover:outline outline-offset-8 outline-primary cursor-pointer hover:transition-all hover:duration-500">چطور؟</a>
        </div>
        <CTAButton />
      </div>
    </nav>
  );
}

export default Navbar;
