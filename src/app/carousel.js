import React from "react";
import Image from "next/image";
import community from "../../public/images/community.png";
import speed from "../../public/images/high-speed.png";
import social from "../../public/images/social-care.png";

function Carousel() {
  return (
    <section className="h-[30rem] min-w-full px-24">
      <div className="h-[20rem]">
        <div className="h-3 w-3/4 bg-white rounded-full -z-10 mx-auto relative top-[10rem]" />

        <div className="flex justify-between h-full">
          <div className="w-1/3 p-8 group relative">
            <div className="h-[16rem] w-[16rem] bg-primary rounded-full mx-auto grid place-items-center group-hover:scale-110 group-hover:transition group-hover:duration-500 ease-in-out">
              <Image src={community} alt="community" height={160} />
            </div>
            <div className="h-full w-full bg-primary rounded-lg grid place-items-center absolute top-0 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
              <p className="text-black font-bold">این متن نوشته ماست</p>
            </div>
          </div>

          <div className="w-1/3 p-8 group relative">
            <div className="h-[16rem] w-[16rem] bg-primary rounded-full mx-auto grid place-items-center group-hover:scale-110 group-hover:transitiongroup- hover:duration-500 ease-in-out">
              <Image src={speed} alt="speed" height={160} />
            </div>
            <div className="h-full w-full bg-primary rounded-lg grid place-items-center absolute top-0 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
              <p className="text-black font-bold">این متن نوشته ماست</p>
            </div>
          </div>
          <div className="w-1/3 p-8 group relative">
            <div className="h-[16rem] w-[16rem] bg-primary rounded-full mx-auto grid place-items-center group-hover:scale-110 group-hover:transition group-hover:duration-500 ease-in-out">
              <Image src={social} alt="social" height={160} />
            </div>
            <div className="h-full w-full bg-primary rounded-lg grid place-items-center absolute top-0 opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
              <p className="text-black font-bold">این متن نوشته ماست</p>
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
