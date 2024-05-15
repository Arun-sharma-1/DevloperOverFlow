import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";
import '../globals.css'
import LeftSideBar from "@/components/shared/LeftSideBar";
import RightSidebar from "@/components/shared/RightSideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative w-full">
      <Navbar />
      <div className="flex ">
       <LeftSideBar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-24 max-md:pb-14 sm:px-14 w-full ">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSidebar />
      </div>
      Toaster
    </main>
  );
};

export default Layout;
