import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NotFoundPage() {
  return (
    <div>
      <Navbar isMain={false} />
      <div className="flex flex-col items-center text-center">
        <div className="md:flex hidden items-baseline">
          <span className="text-[250px]">4</span>
          <Image src="/images/logo-white.png" height={200} width={200} />
          <span className="text-[250px]">4</span>
        </div>
        <div className="flex md:hidden items-baseline mt-16">
          <span className="text-[150px]">4</span>
          <Image src="/images/logo-white.png" height={100} width={100} />
          <span className="text-[150px]">4</span>
        </div>
        <h1 className="text-4xl">صفحه مورد نظر شما موجود نمی‌باشد</h1>
        <Link href="/" className="text-xl text-black bg-primary hover:bg-hover rounded-xl p-3 mt-4">بازگشت به صفحه اصلی</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
