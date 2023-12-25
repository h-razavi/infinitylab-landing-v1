import React from "react";
import Image from "next/image";
import talentIcon from '../../public/images/talent.svg';
import influenceIcon from '../../public/images/influence.svg';
import capitalIcon from '../../public/images/capital.svg';

function GetInvolved() {
  return (
    <section className="p-8 md:p-24" id="how">
      <div className="h-4 w-36 rounded-full bg-primary mx-auto" />
      <h2 className="text-center text-2xl lg:text-4xl font-extrabold leading-loose pt-4">
        هدف ما فراهم نمودن دسترسی آسان به کارآفرینی و سرمایه‌گذاری در ایده‌های
        خلاقانه برای همه است
      </h2>
      <h3 className="text-center text-lg lg:text-2xl text-primary mt-4">
        شما هم می‌توانید در این راه با ما همراه شوید
      </h3>

      <div className="flex lg:flex-row flex-col justify-center w-full lg:h-[25rem] gap-3 mt-8">
        <div className="lg:w-1/3 w-full border-2 border-slate-500 text-slate-500 rounded-lg flex flex-col items-center gap-8 p-8 group hover:border-white hover:border-4 hover:text-white">
          <Image src={talentIcon} alt="talent" height={120} className="group-hover:scale-150" />
          <h4 className="text-3xl font-bold">استعداد</h4>
          <p className="text-center text-xl">ایده‌ها و علایق خود را به کمک جامعه‌ای از همفکران با استعداد خود تبدیل به کسب‌وکار اثر گذار کنید</p>
        </div>
        <div className="lg:w-1/3 w-full border-2 border-slate-500 text-slate-500 rounded-lg flex flex-col items-center gap-8 p-8 group hover:border-white hover:border-4 hover:text-white">
          <Image src={influenceIcon} alt="talent" height={120} className="group-hover:scale-150" />
          <h4 className="text-3xl font-bold">نفوذ و اعتبار</h4>
          <p className="text-center text-xl">از پایگاه اجتماعی خود استفاده کنید و به بهترین‌ها فرصت دیده شدن بدهید </p>
        </div>
        <div className="lg:w-1/3 w-full border-2 border-slate-500 text-slate-500 rounded-lg flex flex-col items-center gap-8 p-8 group hover:border-white hover:border-4 hover:text-white">
          <Image src={capitalIcon} alt="talent" height={120} className="group-hover:scale-150" />
          <h4 className="text-3xl font-bold">سرمایه</h4>
          <p className="text-center text-xl">سهم خود را در یک اکوسیستم متنوع و سودده استارت‌آپی دریابید</p>
        </div>

      </div>
    </section>
  );
}

export default GetInvolved;
