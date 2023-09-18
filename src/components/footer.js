import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logo-wtext-black.png";
import linkedinIcon from '../../public/images/linkedin.png'
import instagramIcon from '../../public/images/instagram.png'
import telegramIcon from '../../public/images/telegram.png'
import whatsappIcon from '../../public/images/whatsapp.png'

function Footer() {
  return (
    <footer className="w-full h-18 px-24 py-8 bg-primary text-black flex items-end justify-between">
      <div className="flex flex-col items-center">
        <Image src={Logo} alt="logo" height={100} />
        <p className="hidden lg:block">&copy;کلیه حقوق این سایت برای مجموعه اینفینیتی لب محفوظ است</p>
      </div>
      <div className="flex flex-col items-end gap-8">
        <div className="flex gap-4">
            <Image src={linkedinIcon} alt="linkedin" height={30}  />
            <Image src={instagramIcon} alt="instagram" height={30} />
            <Image src={telegramIcon} alt="telegram" height={30} />
            <Image src={whatsappIcon} alt="whatsapp" height={30} />
        </div>
        <div className="lg:flex hidden gap-4">
            <a>درباره ما</a>
            <a>تماس با ما</a>
            <a>سوالات متداول</a>
            <a>لینک‌های مفید</a>
             
        </div>
      </div>
    </footer>
  );
}

export default Footer;
