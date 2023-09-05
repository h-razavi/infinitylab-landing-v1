import Image from "next/image";
import Navbar from "@/components/Navbar";
import banner from "../../public/images/banner.gif";
import Logo from "../../public/images/logo-white.png";
import Carousel from "./carousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col p-24">
        <section className="min-h-screen justify-between flex gap-8">
          <div className="flex flex-col w-1/2 gap-4">
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
            <button className="bg-primary hover:bg-hover text-black font-bold py-2 px-4 rounded-full duration-500 ease-in-out">
              جای شما در کنار ما خالیست
            </button>
          </div>
          <div className="w-1/2">
            <Image
              src={banner}
              alt="banner"
              className="border border-gray-800 rounded-xl shadow-md shadow-slate-300"
            />
          </div>
        </section>
        <section className="flex flex-col items-center p-24">
          <div className="h-4 w-36 rounded-full bg-primary" />
          <h3 className="font-extrabold text-4xl pt-4 leading-loose text-center">
            ما بر این باوریم که فرهنگ و اقتصاد ایجاد کسب و کار نیاز به یک
            بازنگری اساسی دارد و ما در حال ساخت بستری برای انجام آن هستیم
          </h3>
          <div className="h-4 w-36 rounded-full bg-primary mt-24" />
          <h3 className="font-extrabold text-3xl pt-4 leading-loose text-center">
            الگویی نو در ساخت اکوسیستم استارت‌آپی
          </h3>
          <p className="text-slate-400 text-xl leading-relaxed text-center">
            ما در <b>اینفینیتی لب</b> رویایی جسورانه داریم. آینده‌ای که در آن
            ایده‌ها امروز بر روی کاغذ نوشته می‌شوند و فردا به مرحله اجرا می‌رسند
            <br />
            کار ما ارائه راه‌حلهای خلاقانه برای مشکلاتی است که استارت‌آپ امروزی
            با آنها روبرو است؛ با قبول ریسک و آزمایشهای پی‌درپی برای حرکت به سمت
            جلو با بیشترین سرعت ممکن
            <br />
            فرهنگ سازمانی ما بر پایه تست و یادگیری مداوم در طی فرآیند ساخت
            استارت‌آپ و برقراری ارتباط بین ذهنهای خلاق جهت افزایش بازدهی در همه
            سطوح سازمان است <br />
          </p>
        </section>
        <section className="px-24 flex flex-col items-center">
          <div className="flex items-center gap-4">
            <Image src={Logo} alt="logo" height={60} />{" "}
            <h2 className="font-extrabold text-3xl text-primary">
              اینفینیتی لب
            </h2>
          </div>
          <p className=" text-xl tracking-widest text-center">
            استارت‌آپ استودیوی آینده
          </p>
        </section>
        <Carousel />
      </main>
    </>
  );
}
