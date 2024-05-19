import Link from "next/link";
import React from "react";
import RenderTag from "../shared/RenderTag";
import IconTextComp from "../IconTextComp";
import { formatAndDivideNumber, getTimestamp } from "@/lib/utils";
interface Props {
  _id: string;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}
const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: Props) => {
  return (
    <div className="shadow-lg rounded-[10px] p-9 max-sm:p-5">
      <div className="flex flex-col-reverse items-start justify-between gap-5 max-sm:gap-3 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="max-sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.length > 0 &&
          tags.map((tag) => {
            return <RenderTag key={tag._id} _id={tag._id} name={tag.name} />;
          })}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <div>
          <IconTextComp
            imgUrl={author.picture}
            alt="avatar"
            value={author.name}
            title={`- asked ${getTimestamp(createdAt)}`}
            isAuthor
            textStyles="small-medium text-dark400_light800"
            href={`/profile/${author._id}`}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <IconTextComp
            imgUrl="/assets/icons/like.svg"
            alt="upvotes"
            value={formatAndDivideNumber(upvotes)}
            title="votes"
            textStyles="small-medium text-dark400_light800"
          />
          {/* <IconTextComp
            imgUrl="/assets/icons/message.svg"
            alt="message"
            value={upvotes}
            title="Message"
            textStyles="small-medium text-dark400_light800"
          /> */}
          <IconTextComp
            imgUrl="/assets/icons/message.svg"
            alt="answers"
            value={formatAndDivideNumber(answers.length)}
            title="Answers"
            textStyles="small-medium text-dark400_light800"
          />{" "}
          <IconTextComp
            imgUrl="/assets/icons/eye.svg"
            alt="eye"
            value={formatAndDivideNumber(views)}
            title="Views"
            textStyles="small-medium text-dark400_light800"
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
