import Link from "next/link";
import React from "react";
interface props {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  textStyles: string;
  href?: string;
  isAuthor?: Boolean;
}
const IconTextComp = ({
  imgUrl,
  alt,
  value,
  title,
  textStyles,
  href,
  isAuthor,
}: props) => {
 
  return (
    <>
      {href && (
        <Link href={href}>
          <div className="flex-center flex-wrap gap-1">
            <img
              src={imgUrl}
              width={16}
              height={16}
              className={`object-contain ${href ? "rounded-full" : ""}`}
            />
            <p className={`${textStyles} flex items-center gap-1`}>
              {value}
              <span
                className={`small-regular line-clamp-1  ${isAuthor ? "max-sm:hidden" : "max-sm:hidden"} `}
              >
                {title}
              </span>
            </p>
          </div>
        </Link>
      )}
      {!href && (
        <div className="flex-center flex-wrap gap-1">
          <img
            src={imgUrl}
            width={16}
            height={16}
            className={`object-contain ${href ? "rounded-full" : ""}`}
          />
          <p className={`${textStyles} flex items-center gap-1`}>
           {value}
            <span
              className={`small-regular line-clamp-1  ${isAuthor ? "max-sm:hidden" : "max-sm:hidden"} `}
            >
              {title}
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default IconTextComp;
