import Image from "next/image";
import Navbar from "@/components/Navbar";
import banner from "../../public/images/banner.gif";

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
            کار ما ساختن جامعه‌های استارت‌آپی بر اساس ایده‌های باارزش و وصل کردن
            کارآفرینان خوش‌فکر به همدیگر برای تامین نیازهای اولیه آنهاست تا زمان
            رسیدن از یک ایده به عرضه محصول نهائی در بازار به کمترین میزان برسد.
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
        <section className="flex flex-col items-center">
          <div className="h-4 w-36 rounded-full bg-primary" />
          <p className="font-extrabold text-4xl pt-4 leading-loose text-center">ما بر این باوریم که فرهنگ و اقتصاد ایجاد کسب و کار نیاز به بازنگری اساسی دارد و ما در حال ایجاد مکانیسمی برای انجام آن هستیم.</p>
        </section>
      </main>
    </>
  );
}
