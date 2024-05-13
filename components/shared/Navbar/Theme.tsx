"use client";
import React from "react";
import { useTheme } from "@/context/ThemeProvider";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { BulbOutlined } from "@ant-design/icons";
function Theme() {
  const { mode, setMode } = useTheme();
  const items: MenuProps["items"] = [
    {
      label: "Light",
      key: "1",
      icon: <img src="/assets/icons/sun.svg" />,
    },
    {
      label: "Dark",
      key: "2",
      icon: <img width="15px" src="/assets/icons/moon.svg" />,
    },
  ];
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("click", e.key);

    if (e.key == "1") {
      console.log("entered in light mode");
      setMode("light");
      document.documentElement.classList.add("light");
      localStorage.setItem('theme','light')
    } else {
      console.log("entered in dark mode");
      setMode("dark");
      document.documentElement.classList.add("dark");
       localStorage.setItem("theme", "dark");
    }
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div>
      <Dropdown menu={menuProps} placement="bottom">
        <Button
          icon={
            <img
              width="15px"
              src={
                mode == "light"
                  ? "/assets/icons/sun.svg"
                  : "/assets/icons/moon.svg"
              }
            />
          }
        />
      </Dropdown>
    </div>
  );
}

export default Theme;
