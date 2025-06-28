"use server";

import User from "@/models/User";
import cloudinary from "../_config/cloudinary";
import connectDB from "../_config/database";
import { auth } from "../_lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addProfile(formData) {
  const session = await auth();
  if (!session) throw new Error("You need to logged in");
  await connectDB();

  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const images = formData.getAll("image").filter((image) => image.name !== "");

  // check first and last name

  if (firstName === "" || lastName === "")
    return {
      submitted: false,
    };

  // Cloudinary image

  const isUpdatingImage = formData.get("image").name !== "undefined";
  const imageUrls = [];

  if (isUpdatingImage) {
    for (const imageFile of images) {
      const imageBuffer = await imageFile.arrayBuffer();
      const imageArray = Array.from(new Uint8Array(imageBuffer));
      const imageData = Buffer.from(imageArray);

      // Convert to base64
      const imageBase64 = imageData.toString("base64");

      // Make request to cloudinary
      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${imageBase64}`,
        {
          folder: "linkSharing",
        }
      );
      imageUrls.push(result.secure_url);
    }
  }
  await User.findByIdAndUpdate(session.user.id, {
    ...(isUpdatingImage && { image: imageUrls }),
    firstName,
    lastName,
  });

  revalidatePath("/profile");
  return { submitted: true };
  // redirect("/preview");
}
