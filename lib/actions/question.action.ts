"use server";

import { connectToDatabase } from "./mongoose";

export async function createQuestion(param: any) {
  try {
    connectToDatabase();
  } catch (err) {
    console.log('err',err)
  }
}
