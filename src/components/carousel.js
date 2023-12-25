import React from "react";
import community from "../../public/images/community.png";
import speed from "../../public/images/high-speed.png";
import social from "../../public/images/social-care.png";

function Carousel() {
  return (
    <section className="h-[30rem] min-w-full px-24 hidden lg:block">
      <div className="h-[20rem]">
        <div className="h-3 w-3/4 bg-white rounded-full -z-10 mx-auto relative top-[10rem]" />

        <div className="flex justify-between h-full">
          <div className="w-1/3 p-8 group relative">
            <div className="h-[16rem] w-[16rem] bg-primary rounded-full mx-auto grid place-items-center group-hover:scale-110 group-hover:transition group-hover:duration-500 ease-in-out">
              <img src={community} alt="community" height={160} />
            </div>
            <div className="h-full w-full bg-primary rounded-lg grid place-items-center absolute top-0 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
              <p className="text-black text-sm font-bold p-3 text-justify">
                در <b>اینفینیتی لب</b> ما بر این باوریم که ایده‌ها چه کوچک و چه
                بزرگ شایسته حمایت هستند. به همین دلیل ما جامعه‌ای از کارآفرینان،
                سرمایه گذاران، منتورها و متخصصین در رشته‌های مختلف را در کنار هم
                گرد آورده‌ایم تا به شما کمک کنند آن چه در ذهن دارید را به واقعیت
                تبدیل کنید. <br />
                ما شما را با شرکای بالقوه، مشتریان و سرمایه گذارانی که می توانند
                سرمایه و بازخورد لازم برای رشد کسب و کار شما را فراهم کنند، در
                ارتباط قرار می دهیم. ما همچنین به شما کمک می کنیم تا به بهترین
                ابزار و خدماتی که می توانند محصول و عملیات شما را بهبود بخشند،
                دسترسی پیدا کنید. با استارت آپ استودیو، شما در سفر خود تنها
                نیستید. شما یک تیم از حامیان دارید که به موفقیت شما پایبند
                هستند.
              </p>
            </div>
          </div>

          <div className="w-1/3 p-8 group relative">
            <div className="h-[16rem] w-[16rem] bg-primary rounded-full mx-auto grid place-items-center group-hover:scale-110 group-hover:transitiongroup- hover:duration-500 ease-in-out">
              <img src={speed} alt="speed" height={160} />
            </div>
            <div className="h-full w-full bg-primary rounded-lg grid place-items-center absolute top-0 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
              <p className="text-black text-sm font-bold p-3 text-justify">
                یکی از بزرگترین چالش استارت‌آپها زمان زیاد تبدیل ایده‌ها به
                محصول و عرضه آن به بازار است. در <b>اینفینیتی لب</b> ما برای حل
                این چالش مجموعه‌ای از خدمات و برنامه‌ها را به شما ارائه خواهیم
                نمود. <br />
                ما به شما کمک می‌کنیم در کمترین زمان ممکن ایده‌‌های خود را
                ارزیابی کنید، نمونه اولیه را طراحی کرده و با تکرار و اصلاح
                ویژگی‌های محصول خود در کمترین زمان وارد بازار شوید.تیم متخصصان و
                منتورهای حاضر در جامعه ما آماده‌اند تا در طول این فرآیند به شما
                بازخورد، مشاوره و پشتیبانی ارائه کنند تا با صرفه‌جویی در زمان،
                سرمایه و تلاش محصولی کارآمد و با مقیاس‌پذیری بالا داشته باشید.
              </p>
            </div>
          </div>
          <div className="w-1/3 p-8 group relative">
            <div className="h-[16rem] w-[16rem] bg-primary rounded-full mx-auto grid place-items-center group-hover:scale-110 group-hover:transition group-hover:duration-500 ease-in-out">
              <img src={social} alt="social" height={160} />
            </div>
            <div className="h-full w-full bg-primary rounded-lg grid place-items-center absolute top-0 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
              <p className="text-black text-sm font-bold p-3 text-justify">
                در <b>اینفینیتی لب</b> هدف ما تنها ساختن استارت‌آپهای موفق نیست. ما
                می‌خواهیم بر روی فرهنگ و جامعه استارت‌آپی اثر مثبتی بر جا
                بگذاریم. <br />
                 ما بر این باوریم که در روزگار و جغرافیای حاضر،
                استارت‌آپها قدرت حل بسیاری از مشکلات ضروری را دارند. هدف ما
                حمایت از ایده‌هایی با چشم‌انداز روشن، ماموریتی شفاف و تاثیر
                اجتماعی و محیطی مثبت است. ما می‌خواهیم با قدرت بخشیدن به انسانها
                فارق از پیش‌زمینه، تحصیلات، یا موقعیت اجتماعی یک اکوسیستم پویا و
                متنوع بسازیم. در جامعه اینفینیتی لب شما هم می‌توانید بخشی از
                جنبشی آینده‌ساز و متفاوت باشید.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[10rem] flex mt-8 justify-between">
        <p className="w-1/3 h-full text-center font-bold text-2xl px-4">
          تامین سرمایه و منابع جمعی
        </p>
        <p className="w-1/3 h-full text-center font-bold text-2xl px-4">
          از ایده به محصول در یک چشم به هم زدن
        </p>
        <p className="w-1/3 h-full text-center font-bold text-2xl px-4">
          اثرگذاری محسوس در اجتماع و فرهنگ
        </p>
      </div>
    </section>
  );
}

export default Carousel;
