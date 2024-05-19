import Tag from "@/database/tag.model";
import { connectToDatabase } from "./mongoose";
import {
  GetAllTagsParams,
  GetTopInteractedTagsParams,
} from "./shared/shared.types";
import User from "@/database/user.model";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();

    const { userId, limit = 3 } = params;
    const user = await User.findById(userId);

    if (!user) throw new Error("User not Found");

    return [
      { _id: "1", name: "Tag1" },
      { _id: "2", name: "Tag2" },
    ];
  } catch (error) {}
}
export async function getAllTags(parms: GetAllTagsParams) {
  try {
    connectToDatabase();

    const tags = await Tag.find({});
    return { tags };
  } catch (error) {}
}
