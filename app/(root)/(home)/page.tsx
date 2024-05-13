import Link from "next/link";
import { Button } from "antd";
import LocalSearch from "@/components/shared/search/LocalSearch";
import Filter from "@/components/shared/Filter";
import { HomePageFilters } from "@/constants/filter";
import HomeFilters from "@/components/Home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/Cards/QuestionCard";
export default function Home() {
  const date2022_01_01 = new Date("2022-01-01");
  const date2022_02_01 = new Date("2023-02-01");
  const date2022_03_01 = new Date("2024-03-01");
  const date2022_04_01 = new Date("2021-04-01");
  const date2022_05_01 = new Date("2020-05-01");
  const date2022_06_01 = new Date("2019-06-01");
  const date2022_07_01 = new Date("2001-07-01");
 
  const result: any = [
    {
      _id: 1,
      title: "How to center a div",
      tag: [
        { name: "HTML", _id: 10 },
        { name: "CSS", _id: 11 },
        { name: "React", _id: 12 },
      ],
      author: { _id: 1, name: "Arun" },
      upvotes: [1, 1],
      views: 100000,
      answers: [
        {
          text: "You can center a div using the 'margin: auto;' CSS property.",
        },
        {
          text: "Flexbox and Grid layouts also offer efficient ways to center elements.",
        },
      ],
      createdAt: date2022_01_01, // Specific date for createdAt
    },
    {
      _id: 2,
      title: "Introduction to JavaScript",
      tag: [
        { name: "JavaScript", _id: 13 },
        { name: "Programming", _id: 14 },
      ],
      author: { _id: 2, name: "Alice" },
      upvotes: [2, 3],
      views: 20,
      answers: [
        {
          text: "JavaScript is a versatile programming language used for web development.",
        },
        { text: "It is commonly used for adding interactivity to websites." },
        {
          text: "JavaScript can also be used for server-side development using Node.js.",
        },
      ],
      createdAt: date2022_02_01, // Specific date for createdAt
    },
    {
      _id: 3,
      title: "Responsive Web Design",
      tag: [
        { name: "HTML", _id: 10 },
        { name: "CSS", _id: 11 },
      ],
      author: { _id: 3, name: "Bob" },
      upvotes: [5, 4],
      views: 15,
      answers: [
        {
          text: "Responsive web design ensures that web pages render well on various devices and window sizes.",
        },
        {
          text: "Media queries are commonly used in CSS for responsive design.",
        },
      ],
      createdAt: date2022_03_01, // Specific date for createdAt
    },
    {
      _id: 4,
      title: "Getting Started with React Hooks",
      tag: [
        { name: "React", _id: 12 },
        { name: "JavaScript", _id: 13 },
      ],
      author: { _id: 4, name: "Charlie" },
      upvotes: [7],
      views: 30,
      answers: [
        {
          text: "React Hooks provide a way to use state and other React features without writing a class.",
        },
        { text: "useState and useEffect are commonly used React Hooks." },
        { text: "Hooks were introduced in React version 16.8." },
        { text: "They allow for cleaner and more readable React code." },
      ],
      createdAt: date2022_04_01, // Specific date for createdAt
    },
    {
      _id: 5,
      title: "Understanding CSS Flexbox",
      tag: [{ name: "CSS", _id: 11 }],
      author: { _id: 5, name: "David" },
      upvotes: [2, 2, 1],
      views: 25,
      answers: [
        {
          text: "CSS Flexbox is a layout model that provides a more efficient way to layout items in a container.",
        },
        {
          text: "Flexbox allows for easier alignment and distribution of space among items in a container.",
        },
        {
          text: "It is especially useful for building navigation menus, sidebars, and card layouts.",
        },
      ],
      createdAt: date2022_05_01, // Specific date for createdAt
    },
    {
      _id: 6,
      title: "Best Practices in Software Development",
      tag: [{ name: "Programming", _id: 14 }],
      author: { _id: 6, name: "Emily" },
      upvotes: [8, 6],
      views: 40,
      answers: [
        {
          text: "Using version control systems like Git is essential for collaborative software development.",
        },
        {
          text: "Adhering to coding standards and conventions improves code readability and maintainability.",
        },
        {
          text: "Regular code reviews help identify bugs and improve overall code quality.",
        },
      ],
      createdAt: date2022_06_01, // Specific date for createdAt
    },
    {
      _id: 7,
      title: "Getting Started with Node.js",
      tag: [
        { name: "Node.js", _id: 15 },
        { name: "JavaScript", _id: 13 },
      ],
      author: { _id: 7, name: "Frank" },
      upvotes: [10],
      views: 35,
      answers: [
        {
          text: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
        },
        { text: "It allows developers to run JavaScript on the server side." },
        {
          text: "Node.js is commonly used for building scalable network applications.",
        },
      ],
      createdAt: date2022_07_01, // Specific date for createdAt
    },
  ];
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-questions" className="flex justify-end max-sm:w-full">
          <button className="primary-gradient min-h-[56px] px-4 py-3 !text-light-900 rounded-md">
            Ask a Question
          </button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions "
          otherClasses="flex-1"
        />
        <Filter
          filter={HomePageFilters}
          otherClasses="min-h-[56px] w-full sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex flex-col gap-6 ">
        {result.length > 0 ? (
          result.map((question: any) => {
            return (
              <div key={question._id}>
                <QuestionCard
                  key={question._id}
                  _id={question._id}
                  title={question.title}
                  tags={question.tag}
                  author={question.author}
                  upvotes={question.upvotes.length}
                  views={question.views}
                  answers={question.answers}
                  createdAt={question.createdAt}
                />
              </div>
            );
          })
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-questions"
            LinkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
