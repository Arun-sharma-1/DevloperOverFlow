import { SignUp } from "@clerk/nextjs";
const Page = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <SignUp />
    </div>
  );
};

export default Page;
