import React from "react";
import Image from "next/image";
import Input from "antd/es/input/Input";
function GlobalSearch() {
  return (
    <div className="relative w-full max-w-[600px] hidden lg:block">
      <div className="background-light800_darkgradient relative flex min-h-[40px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          height={24}
          width={24}
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="Search globally"
          className="paragraph-regular no-focus  placeholder hover:background-light800_darkgradient focus:background-light800_darkgradient background-light800_darkgradient border-none shadow-none outline-none "
        />
      </div>
    </div>
  );
}

export default GlobalSearch;
