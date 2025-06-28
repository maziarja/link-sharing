import Navbar from "@/components/Navbar";
import ProfilePage from "@/components/ProfilePage";
import { auth } from "../_lib/auth";
import { redirect } from "next/navigation";
import User from "@/models/User";
import connectDB from "../_config/database";
import { convertToObject } from "../_utils/convertToObject";

async function Page() {
  const session = await auth();
  if (!session) redirect("/login");
  await connectDB();
  const currentUserDoc = await User.findById(session.user.id).lean();
  const currentUser = convertToObject(currentUserDoc);
  const email = currentUser.email;
  return (
    <div className="flex h-dvh flex-col">
      <Navbar email={email} />
      <ProfilePage currentUser={currentUser} />
    </div>
  );
}

export default Page;
