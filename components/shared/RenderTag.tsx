import Link from "next/link";
import React from "react";
import { Badge } from "antd";

interface Props {
  _id: string;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

const RenderTag = ({ _id, name, totalQuestions, showCount }: Props) => {
  return (
    <>
      <div className="flex justify-between gap-2">
        <Link href={`/tags/${_id}`}>
          <Badge className="subtle-medium text-light400_light500 background-light800_dark300 rounded-md border-none max-sm:px-2 max-sm:py-2 px-4 py-2 uppercase">
            {name}
          </Badge>
        </Link>
        {showCount && (
          <p className="small-medium text-dark500_light700">{totalQuestions}</p>
        )}
      </div>
    </>
  );
};

export default RenderTag;
