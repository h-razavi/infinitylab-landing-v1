import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logo-wtext-black.png";
import linkedinIcon from '../../public/images/linkedin.png'
import instagramIcon from '../../public/images/instagram.png'
import telegramIcon from '../../public/images/telegram.png'
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-full h-18 px-12 md:px-24 md:py-8 bg-primary text-black flex items-end justify-between">
      <div className="flex flex-col items-center mx-auto lg:mx-0">
        <Image src={Logo} alt="logo" height={100} />
        <p className="hidden md:block">&copy;کلیه حقوق این سایت برای مجموعه اینفینیتی لب محفوظ است</p>
      </div>
      <div className="flex flex-col items-end gap-8">
        <div className="md:flex gap-4 hidden">
            <a href="https://www.linkedin.com/company/infinity-lab-startup-studio/" target="_blank"><Image src={linkedinIcon} alt="linkedin" height={30}  /></a>
            <a href="https://www.instagram.com/infinitylab.studio/" target="_blank"><Image src={instagramIcon} alt="instagram" height={30} /></a>
            <a href="https://t.me/infinitylabstudio" target="_blank"><Image src={telegramIcon} alt="telegram" height={30} /></a>
        </div>
        <div className="lg:flex hidden gap-4">
            <Link href="/about"> درباره ما</Link>
            <Link href="/contact"> تماس با ما</Link>
            <Link href="/faq">سوالات متداول</Link>
            <Link href="/links">لینک‌های مفید</Link>
             
        </div>
      </div>
    </footer>
  );
}

export default Footer;
