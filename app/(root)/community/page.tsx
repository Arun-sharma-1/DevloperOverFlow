import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { UserFilters } from "@/constants/filter";
import { getAllUsers } from "@/lib/actions/user.action";
import { IUser } from "@/database/user.model";
import React from "react";
import UserCard from "@/components/Cards/UserCard";

interface resultInterface {
  allUsers: IUser[];
}
const page = async () => {
  const result: any = (await getAllUsers({})) || { allUsers: [] };
  console.log("result at font", result);
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Users</h1>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions "
          otherClasses="flex-1"
        />
        <Filter
          filter={UserFilters}
          otherClasses="min-h-[56px] w-full sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <section className="mt-12 flex flex-wrap gap-4">
        {result?.allUsers?.length! > 0 ? (
          result!.allUsers.map((user:any) => (
            <UserCard key={user.username} user={user} />
          ))
        ) : (
          <div className="paragraph-regular text-dark200">No user found</div>
        )}
      </section>
    </>
  );
};

export default page;
