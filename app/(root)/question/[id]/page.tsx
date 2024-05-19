import IconTextComp from "@/components/IconTextComp";
import ParseHTML from "@/components/shared/ParseHTML";
import RenderTag from "@/components/shared/RenderTag";
import { getQuestionById } from "@/lib/actions/question.action";
import { formatAndDivideNumber, getTimestamp } from "@/lib/utils";
import Link from "next/link";
import React from "react";
interface QuestionTagProps {
  _id: string;
  name: string;
}
const Page = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: string;
}) => {
  const result = await getQuestionById({ questionId: params.id });
  console.log("result is ", result);
  return (
    <>
      <div className="w-full flex-col">
        <div className="flex w-full flex-col-reverse justify-between gap-5 sm:flex-row sm:item-center sm:gap-2">
          <Link
            href={`/profile/${result.author.clerkId}`}
            className="flex items-center justify-start gap-1"
          >
            <img
              src={result.author.picture}
              className="rounded-full"
              width={22}
              height={22}
              alt="profile"
            />
            <p className="paragraph-semibold text-dark300_light700 ">
              {result.author.name}
            </p>
          </Link>
        </div>
        <div className=" flex flex-col justify-start">
          <h2 className=" h2-semibold text-dark200_light900 mt-3.5 w-full text-left ">
            <span className="uppercase">{result.title[0]}</span>
            <span>{result.title.substr(1)}</span>
          </h2>
          <div className=" mb-8 mt-5 flex flex-wrap gap-4">
            <IconTextComp
              imgUrl="/assets/icons/clock.svg"
              alt="clockIcon"
              value={`asked ${getTimestamp(result.createdAt)}`}
              title=""
              textStyles="small-medium text-dark400_light800"
            />
            <IconTextComp
              imgUrl="/assets/icons/message.svg"
              alt="Message"
              value={formatAndDivideNumber(result.answers.length)}
              title="Answers"
              textStyles="small-medium text-dark400_light800"
            />
            <IconTextComp
              imgUrl="/assets/icons/eye.svg"
              alt="eye"
              value={formatAndDivideNumber(result.views)}
              title="Views"
              textStyles="small-medium text-dark400_light800"
            />
          </div>
        </div>
        <ParseHTML data={result.content} />
        <div className=" mt-8 flex gap-4">
          {result.tags.map((tag: QuestionTagProps) => {
            return (
              <RenderTag
                key={tag._id}
                _id={tag._id}
                name={tag.name}
                showCount={false}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
