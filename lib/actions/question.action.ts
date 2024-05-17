"use server";

import Question from "@/database/question.model";
import { connectToDatabase } from "./mongoose";
import Tag from "@/database/tag.model";

export async function createQuestion(params: any) {
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
      $push: { tags: { $each: tagDocument } },
    });
  } catch (err) {
    console.log("err", err);
  }
}
