"use client";
import React from "react";
import { Select } from "antd";

interface Props {
  filter: {
    name: string;
    value: string;
  }[];
  otherClasses?: string;
  containerClasses?: string;
}
function Filter({ filter, otherClasses, containerClasses }: Props) {
  const filterList: any = filter.map((item) => {
    return {
      value: item.value,
      label: item.name,
    };
  });
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  return (
    <div className={`relative ${containerClasses}`}>
      <Select
        showSearch
        placeholder="Select a Filter"
        optionFilterProp="children"
        onChange={onChange}
        filterOption={filterOption}
        options={filterList}
        className={`${otherClasses}`}
      />
      
    </div>
  );
}

export default Filter;
