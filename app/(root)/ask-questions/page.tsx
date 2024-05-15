import Question from "@/components/form/Question";
import { UserButton } from "@clerk/nextjs";
const page = () => {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>
      <Question />
    </div>
  );
};

export default page;
