"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "./mongoose";

export async function getUserById(params: any) {
  try {
    connectToDatabase();

    const { userId } = params;
    console.log('user id here ....' ,userId)
    const user = await User.findOne({ clerkId: userId });
    console.log('user info '  , user)
    return user;
  } catch (err) {
    console.log('error occured ' , err);
    return err;
  }
}
