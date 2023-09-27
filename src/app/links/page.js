import Navbar from "@/components/Navbar";
import React from "react";

function Links() {
  return (
    <>
      <Navbar isMain={false} />
      <div className="w-screen h-screen px-12 md:px-24">
        <div className="bg-white rounded-xl min-h-1/2 min-w-1/2 text-black p-12">
          <h1 className="text-3xl text-center font-extrabold">لینک‌های مفید</h1>
          <ul className="mt-8 list-disc">
            <li className="my-4 p-4 text-blue-500">
              <a href="https://www.psl.com/">Pioneer Square Labs</a>
            </li>
            <li className="my-4 p-4 text-blue-500">
              <a href="https://humanventures.co/">Human Ventures</a>
            </li>
            <li className="my-4 p-4 text-blue-500">
              <a href="https://www.madronavl.com/">Madrona Venture Labs</a>
            </li>
            <li className="my-4 p-4 text-blue-500">
              <a href="https://blenheimchalcot.com/">Blenheim Chalcot</a>
            </li>
            <li className="my-4 p-4 text-blue-500">
              <a href="https://alleycorp.com/">Alley Corp</a>
            </li>
            <li className="my-4 p-4 text-blue-500">
              <a href="https://www.psl.com/">Pioneer Square Labs</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Links;
