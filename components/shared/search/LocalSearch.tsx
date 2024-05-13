"use client";
import React from "react";
import Input from "antd/es/input/Input";
interface searchInteface {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}
function LocalSearch({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: searchInteface) {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center px-2 gap-4 rounded-[10px] ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <img
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        onChange={() => {}}
        className="paragraph-regular no-focus  placeholder hover:background-light800_darkgradient focus:background-light800_darkgradient background-light800_darkgradient border-none shadow-none outline-none "
      />
      {iconPosition === "right" && (
        <img
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
}

export default LocalSearch;
