"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { SignedOut } from "@clerk/nextjs";
import { sidebarLinks } from "@/constants/filter";
import { Button, Image } from "antd";
import Link from "next/link";
function LeftSideBar() {
  const pathname = usePathname();
  return (
    <section className="background-light900_dark200 custom-scrollbar light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-24 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 p-3 max-sm:p-2`}
            >
              <img
                src={item.imgURL}
                alt={item.label}
                height={20}
                width={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${isActive ? "base-bold" : "base-medium"} max-sm:text-[14px] max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="flex justify-center lg:gap-6 items-center small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <img
                src="/assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                <p className="max-lg:hidden">Log In</p>
              </span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="flex justify-center lg:gap-6 items-center small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
              <img
                src="/assets/icons/sign-up.svg"
                alt="sign up"
                width={20}
                height={20}
                className="lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                <p className="max-lg:hidden">Sign up</p>
              </span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
}

export default LeftSideBar;
