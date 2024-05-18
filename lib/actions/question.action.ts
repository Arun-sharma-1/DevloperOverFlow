"use server";

import Question from "@/database/question.model";
import { connectToDatabase } from "./mongoose";
import Tag from "@/database/tag.model";
import { GetQuestionParms, createQuestionParams } from "./shared/shared.types";
import User from "@/database/user.model";
import { revalidatePath } from "next/cache";

export async function getQuestion(params: GetQuestionParms) {
  try {
    connectToDatabase();
    const questions = await Question.find({})
      .populate({ path: "tags", model: Tag })
      .populate({ path: "author", model: User })
      .sort({ createdAt: -1 });
    console.log("question in back ", questions);
    return { questions };
  } catch (error) {
    console.log(error);
  }
}
export async function createQuestion(params: createQuestionParams) {
  try {
    //connect to database
    connectToDatabase();
    const { title, content, tags, author, path } = params;

    //create question
    const question = await Question.create({
      title,
      content,
      author,
    });
    const tagDocument = [];
    //create the tag or get them if they already exist
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: tag },
        { $push: { Questions: question._id } },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );

      tagDocument.push(existingTag._id);
    }

    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocument } }
    });

    revalidatePath(path)
    
  } catch (err) {
    console.log("err", err);
  }
}
