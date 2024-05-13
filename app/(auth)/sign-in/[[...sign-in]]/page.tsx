import { SignIn } from "@clerk/nextjs";
const Page = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
     
      <SignIn />
    </div>
  );
};

export default Page;
