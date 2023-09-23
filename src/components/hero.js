import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import banner from "../../public/images/banner.gif";

function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row text-center md:text-right gap-8">
    <div className="flex flex-col md:w-1/2 w-full gap-4">
      <h2 className="text-4xl leading-loose font-extrabold pb-4">
        جاده‌ای پر سرعت برای تبدیل ایده‌های نو به محصولات عالی
      </h2>
      <p className="text-xl leading-relaxed text-slate-300">
        کار ما ساختن جامعه‌های استارت‌آپی بر اساس ایده‌های باارزش و وصل
        کردن کارآفرینان خوش‌فکر به همدیگر برای تامین نیازهای اولیه آنهاست
        تا زمان رسیدن از یک ایده به عرضه محصول نهائی در بازار به کمترین
        میزان برسد.
      </p>
      <p className="font-bold italic">
        ماموریت بلندپروازانه ما : ساخت 20 شرکت موفق و سودده ظرف 2 سال
      </p>
      <Link href="/signup" className="w-full">
      <button className="bg-primary hover:bg-hover text-black font-bold py-2 px-4 rounded-full duration-500 ease-in-out w-full">
        جای شما در کنار ما خالیست
      </button>
      </Link>
    </div>
    <div className="md:w-1/2 w-full">
      <Image
        src={banner}
        alt="banner"
      />
    </div>
  </section>
  )
}

export default Hero