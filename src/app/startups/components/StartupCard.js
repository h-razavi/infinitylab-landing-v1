import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function StartupCard() {
  return (
    <div className='w-[200px] h-[200px] bg-white rounded-2xl text-black mx-auto flex flex-col items-center justify-evenly relative group overflow-hidden'>
        <div className='w-full h-full p-4 rounded-2xl absolute translate-x-[101%] bg-sky-500 bg-opacity-70 flex flex-col items-center justify-center group-hover:flex group-hover:translate-x-0 transition-all delay-100 duration-500 ease-in-out'>
          <p className='text-white'>
            استارت‌آپی در حوزه پادکست جهت یافتن و پیشنهاد پادکستها به سلیقه های مشابه
          </p>
          <Link href="/startups/podjoo" className="bg-primary hover:bg-hover text-black hover:translate-y-4 font-bold py-2 px-4 rounded-full duration-500 ease-in-out mt-4">پروفایل استارت‌آپ</Link>
        </div>
        <Image src="/images/startups/podjoo.jpg" alt="Podjoo" height={120} width={120} className='rounded-lg shadow-lg' />
        <h3 className='font-bold text-2xl border-b-4 border-black'>Podjoo</h3>
    </div>
  )
}

export default StartupCard