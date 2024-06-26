"use client";
import React from "react";
import { HomePageFilters } from "@/constants/filter";
import { Button } from "antd";
function HomeFilters() {
  const isActive = "newest";
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => {
        return (
          <Button
            key={item.value}
            onClick={() => {
                
            }}
            className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none flex justify-self-center items-center ${
              isActive === item.value
                ? "bg-primary-100 text-primary-500 dark:bg-dark-400"
                : " bg-light-800 text-light-500 hover:bg-light-700 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
            }`}
          >
            
            {item.name}
          </Button>
        );
      })}
    </div>
  );
}

export default HomeFilters;
