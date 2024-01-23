import Navbar from "@/components/Navbar";
import StartupCard from "@/app/startups/components/StartupCard";
import React from "react";
import { startupData } from "../data/startup";

function StartupsPage() {
  return (
    <div>
      <Navbar isMain={false} />
      <h1 className="text-3xl text-center font-bold">استارت‌آپ‌های ما</h1>
      <div className="h-4 w-36 rounded-full mx-auto bg-primary md:mt-12" />
      <section className="md:mt-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 w-3/4 mx-auto">
          {startupData.map((startup) => {
            return (
              <StartupCard
                key={startup.id}
                title={startup.nameFa}
                link={startup.id}
                description={startup.description}
                logo={startup.logo}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default StartupsPage;
