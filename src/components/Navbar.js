import React from "react";

import Link from "next/link";
import Logo from "../../public/images/logo-wtext-white.png";
import CTAButton from "./CTAButton";

function Navbar({ isMain }) {
  return (
    <nav className="px-16 py-4 md:py-10 flex items-center justify-center lg:justify-between">
      <Link href="/" className="flex flex-col md:flex-row items-center">
        <img src={Logo} alt="logo" height={80} />
        <h2 className="font-extrabold text-3xl ">استارت‌آپ استودیو</h2>
      </Link>
      <div className="lg:flex items-center hidden">
        {isMain && (
          <div className="flex gap-10 ml-16 text-2xl">
            <a
              className="hover:outline-4 hover:outline outline-offset-8 outline-primary cursor-pointer hover:transition-all hover:duration-500"
              href="#why"
            >
              چرا؟
            </a>
            <a
              className="hover:outline-4 hover:outline outline-offset-8 outline-primary cursor-pointer hover:transition-all hover:duration-500"
              href="#what"
            >
              چی؟
            </a>
            <a
              className="hover:outline-4 hover:outline outline-offset-8 outline-primary cursor-pointer hover:transition-all hover:duration-500"
              href="#how"
            >
              چطور؟
            </a>
          </div>
        )}

        <Link href="/signup">
          <CTAButton />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
