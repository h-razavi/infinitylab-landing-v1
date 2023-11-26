import Navbar from "@/components/Navbar";
import React from "react";

function StartupsPage() {
  return (
    <div>
      <Navbar isMain={false} />
      <h1 className="text-3xl text-center font-bold">استارت‌آپ‌های ما</h1>
      <div className="h-4 w-36 rounded-full mx-auto bg-primary md:mt-12" />

    </div>
  );
}

export default StartupsPage;
