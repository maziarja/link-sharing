"use server";

import User from "@/models/User";
import connectDB from "../_config/database";
import { auth } from "../_lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addLinksToDB(formData) {
  const session = await auth();
  if (!session) throw new Error("You need to logged in");
  await connectDB();

  const platforms = formData.getAll("platforms");
  const urls = formData.getAll("url");
  const ids = formData.getAll("id");
  const newLinkObj = platforms.map((platform, i) => {
    return {
      platform,
      url: urls[i],
      id: ids[i],
    };
  });
  // check if url is correct
  // const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-./?%&=]*)?$/i;
  const urlRegex = /^https:\/\/[^\s/$.?#].[^\s]*$/;
  const isValidURL = (str) => urlRegex.test(str);

  if (newLinkObj.some((obj) => !isValidURL(obj.url)))
    return {
      submitted: false,
    };

  await User.updateOne(
    { _id: session.user.id, links: { $ne: newLinkObj } },
    { $set: { links: newLinkObj } },
  );
  revalidatePath("/");
  redirect("/");
}
