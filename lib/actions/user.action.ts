"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "./mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared/shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function getUserById(params: any) {
  try {
    connectToDatabase();

    const { userId } = params;
    console.log("user id here ....", userId);
    const user = await User.findOne({ clerkId: userId });
    console.log("user info ", user);
    return user;
  } catch (err) {
    console.log("error occured ", err);
    return err;
  }
}
export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.log("error in creating new user  ", error);
  }
}
export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDatabase();
    const { clerkId, updateData, path } = params;
    const newUser = await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });
    revalidatePath(path);
  } catch (error) {
    console.log("error in updating user  ", error);
  }
}
export async function deletedUser(params: DeleteUserParams) {
  try {
    connectToDatabase();
    const { clerkId } = params;
    const user = await User.findOneAndDelete({ clerkId });

    if (!user) {
      throw new Error("User not found");
    }
    //delete user form db and questions , answers ,commments etc

    //get user ques id
    const userQuestionId = await Question.find({
      author: user._id,
    }).distinct("_id");

    //delete user ques
    await Question.deleteMany({ author: user._id });

    //TOdO:delete user answers  , comments 

    const deletedUser = await User.findByIdAndDelete(user._id);
    return deletedUser;
  } catch (error) {
    console.log("error in deleting  user  ", error);
  }
}
