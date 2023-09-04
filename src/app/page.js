import Image from "next/image";
import Navbar from "@/components/Navbar";
import banner from "../../public/images/banner.gif";
import Logo from "../../public/images/logo-white.png";
import community from "../../public/images/community.png";
import speed from "../../public/images/high-speed.png";
import social from "../../public/images/social-care.png";

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
        <section className="h-[30rem] ">
          <div className="h-[20rem]">
            <div className="h-3 w-3/4 bg-white rounded-full -z-10 mx-auto relative top-[10rem]" />
            <div className="flex mt-8">
              <div className="h-[16rem] w-[16rem] bg-primary rounded-full mx-auto grid place-items-center hover:scale-110 hover:transition hover:duration-500 ease-in-out">
                <Image src={community} alt="community" height={160} />
              </div>
              <div className="h-[16rem] w-[16rem] bg-primary rounded-full mx-auto grid place-items-center hover:scale-110 hover:transition hover:duration-700 hover:ease-out">
                <Image src={speed} alt="speed" height={160} />
              </div>
              <div className="h-[16rem] w-[16rem] bg-primary rounded-full mx-auto grid place-items-center hover:scale-110 hover:transition hover:duration-500 ease-out">
                <Image src={social} alt="social" height={160} />
              </div>
            </div>
            <div className="flex h-full text-black relative -top-[18rem] z-10 group">
              <div className="w-1/3 bg-primary grid place-items-center text-center opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out">
                is this thing workin
              </div>
              <div className=" w-1/3 bg-primary grid place-items-center text-center opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out">
                yes or no
              </div>
              <div className="w-1/3 bg-primary grid place-items-center text-center opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out">
                please tell me
              </div>
            </div>
          </div>
          <div className="h-[10rem] pt-10 flex">
            <p className="w-1/3 h-full text-center font-bold text-2xl">تامین سرمایه و منابع جمعی</p>
            <p className="w-1/3 h-full text-center font-bold text-2xl">از ایده به محصول در یک چشم به هم زدن</p>
            <p className="w-1/3 h-full text-center font-bold text-2xl">اثرگذاری محسوس در اجتماع و فرهنگ</p>
          </div>
        </section>
      </main>
    </>
  );
}
