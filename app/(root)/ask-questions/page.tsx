import Question from "@/components/form/Question";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
const page = async () => {
  // const { userId } = auth();
  const userId = "clerk123";
  if (!userId) redirect("/sign-in");
  console.log("current user id ", userId);

  const mongoUser = await getUserById({ userId });
  console.log("mongouser ", mongoUser);
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>
      <Question mongoUserId={JSON.stringify(mongoUser?._id)} />
    </div>
  );
};

export default page;
