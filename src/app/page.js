import Image from "next/image";
import Navbar from "@/components/Navbar";

import Logo from "../../public/images/logo-white.png";
import Carousel from "@/components/carousel";
import GetInvolved from "@/components/get-involved";
import Footer from "@/components/footer";
import Hero from "@/components/hero";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col md:p-24 p-8">
        <Hero />
        <section className="flex flex-col items-center p-8 mt-8 md:p-24" id="why">
          <div className="h-4 w-36 rounded-full bg-primary" />
          <h3 className="font-extrabold text-2xl md:text-4xl pt-4 md:mt-24 leading-loose text-center">
            ما بر این باوریم که فرهنگ و اقتصاد ایجاد کسب و کار نیاز به یک
            بازنگری اساسی دارد و ما در حال ساخت بستری برای انجام آن هستیم
          </h3>
          <div className="h-4 w-36 rounded-full bg-primary md:mt-24" />
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
        <section className="md:px-24 flex flex-col items-center" id="what">
          <div className="flex flex-col items-center gap-4">
            <Image src={Logo} alt="logo" height={60} />
            <h2 className="font-extrabold text-3xl text-primary">
              اینفینیتی لب
            </h2>
          </div>
          <p className=" text-xl tracking-widest text-center">
            استارت‌آپ استودیوی آینده
          </p>
        </section>
        <Carousel />
        <GetInvolved />
      </main>
      <Footer />
    </>
  );
}
