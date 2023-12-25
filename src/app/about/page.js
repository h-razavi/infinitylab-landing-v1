import React from "react";
import logo from "../../../public/images/logo-wtext-black.png";
import Navbar from "@/components/Navbar";
import Link from "next/link";

function AboutPage() {
  return (
    <>
    <Navbar isMain={false} />
    <div className="w-screen h-screen px-12 md:px-24">
      <div className="bg-white rounded-xl min-h-1/2 min-w-1/2 text-black p-12">
        <div className="flex flex-col items-center">
          <img src={logo} alt="about" height={400} width={400} />
          <div className="bg-primary rounded-xl animate-pulse">
            <h1 className="p-4 text-2xl font-extrabold text-center">
              استارت‌آپ استدیو اینفینیتی لب
            </h1>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <p>
            به <b>استارتاپ استودیو اینفینیتی لب</b> خوش آمدید، جایی که ایده ها
            به ساده ترین شکل ممکن به محصولاتی فوق العاده تبدیل می شوند. ماموریت
            ما ایجاد یک جامعه پویا و کمک به کسانی است که دارای ایده های نوین
            هستند تا کسب و کارهای موفق خود را راه اندازی کنند. ما فقط یک شتاب
            دهنده یا یک سرمایه گزار نیستیم. ما یک جامعه از سازندگان، نوآوران و
            رویا پردازان هستیم.
          </p>
          <p>
            ما به یک فرمول منحصر به فرد برای ساخت استارت‌آپ رسیده‌ایم. کار ما
            فقط سرمایه گزاری بر روی ایده‌ها و استعدادهای شما نیست. بلکه ما با
            شما همراه می‌شویم و منابع، راهنمایی و شبکه اجتماعی لازم برای ساخت و
            عرضه یک محصول به شما ارائه می‌دهیم. همراهی ما با شما از مرحله
            ایده‌پردازی شروع شده و تا به بار نشستن و اعتبارسنجی محصول در بازار و
            حتی بعد از آن با شما خواهیم بود.
          </p>
          <p>
            ما دوست داریم که از طریق استارتاپهای زیر مجموعه خود بر روی جامعه،
            فرهنگ و دنیای اطرافمان تاثیر مثبت بگذاریم. به نظر ما یک استارت‌آپ
            این قدرت را دارد که مهمترین چالشهای زمان و محیط خود را حل کند. ما
            می‌خواهیم با حمایت از استارتاپهایی که چشم اندازی روشن و ماموریتی
            اجتماعی دارند، در این تغییرات مثبت نقش داشته باشیم
          </p>
          <p>
            اگر شما هم ایده‌ای دارید که فکر میکنید می‌تواند دنیا را تغییر دهد،
            یا دوست دارید همراه با سرمایه مالی یا استعدادهای دیگر خود عضو جامعه
        از آینده سازان باشید <Link href="/signup" className="bg-primary rounded-md p-2 hover:bg-hover"> به ما بپیوندید</Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default AboutPage;
