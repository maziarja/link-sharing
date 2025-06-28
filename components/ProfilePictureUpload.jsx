import { auth } from "@/app/_lib/auth";
import User from "@/models/User";
import { PiImage } from "react-icons/pi";
import Image from "next/image";
import connectDB from "@/app/_config/database";

async function ProfilePictureUpload() {
  const session = await auth();
  await connectDB();
  const userImage = await User.findOne({ _id: session.user.id }).select(
    "image",
  );
  const isChangeImage = userImage.image.at(0).includes("cloudinary");

  return (
    <div className="bg-light-grey flex flex-col rounded-xl p-5 sm:grid sm:grid-cols-[1.5fr_1fr_1fr] sm:items-center">
      <p className="text-grey text-body-m mb-4">Profile picture</p>

      <div
        style={
          isChangeImage
            ? { backgroundImage: `url(${userImage.image.at(0)})` }
            : {}
        }
        className={`bg-purple-light relative mb-6 flex h-[193px] w-[193px] flex-col items-center justify-center rounded-xl bg-cover bg-center bg-no-repeat sm:mr-4 sm:mb-0`}
      >
        <input
          type="file"
          id="image"
          name="image"
          className="absolute inset-0 h-full w-full opacity-0"
          accept="image/*"
        />
        <PiImage
          className={`pointer-events-none z-1 h-12 w-12 ${
            isChangeImage ? "fill-white" : "fill-purple"
          }`}
        />
        <p
          className={`text-purple text-heading-s pointer-events-none z-1 mt-2 ${
            isChangeImage && "text-white"
          }`}
        >
          {isChangeImage ? "Change Image" : "+ Upload Image"}
        </p>
        {isChangeImage && (
          <div className="pointer-events-none absolute h-full w-full rounded-lg bg-black opacity-50"></div>
        )}
      </div>

      <p className="text-grey text-body-s">
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </div>
  );
}

export default ProfilePictureUpload;
