"use client";
import React, { useState } from "react";
import { sidebarLinks } from "../../../constants/filter";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Button, Drawer, Radio, Space } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { SignedOut } from "@clerk/nextjs";
function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="relative">
      <button className="sm:hidden cursor-pointer" onClick={showDrawer}>
        <img src="/assets/icons/hamburger.svg" />
      </button>

      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        width={250}
      >
        <div className="relative">
          <div className="flex gap-3 my-5">
            <img
              src="/assets/images/site-logo.svg"
              width={36}
              height={36}
              className="ml-2"
            />
            <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
              Dev <span className="text-primary-500">Overflow</span>
            </p>
          </div>
          <div className="absolute -top-8 right-0 z-10">
            <button onClick={onClose}>
              <CloseCircleOutlined className="text-[24px]" />
            </button>
          </div>
          {sidebarLinks.map((item) => {
            const isActive =
              (pathname.includes(item.route) && item.route.length > 1) ||
              pathname === item.route;
            return (
              <Link
                href={item.route}
                onClick={onClose}
                className={`${
                  isActive
                    ? "primary-gradient rounded-lg text-light-900"
                    : "text-dark300_light900"
                } flex items-center justify-start gap-4 p-4 max-sm:p-2`}
              >
                <img
                  src={item.imgURL}
                  alt={item.label}
                  height={20}
                  width={20}
                  className={`${isActive ? "" : "invert-colors"}`}
                />
                <p
                  className={`${isActive ? "base-bold" : "base-medium"} max-sm:text-[14px]`}
                >
                  {item.label}
                </p>
              </Link>
            );
          })}

          <SignedOut>
            <div className="flex gap-3 w-full flex-col">
              <Link href="/sign-in">
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient">Log In</span>
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="small-medium btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  Sign Up
                </Button>
              </Link>
            </div>
          </SignedOut>
        </div>
      </Drawer>
    </div>
  );
}

export default MobileNav;
