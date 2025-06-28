import Navbar from "@/components/Navbar";
import { auth } from "./_lib/auth";
import { redirect } from "next/navigation";
import LinksPage from "@/components/LinksPage";
import User from "@/models/User";
import { convertToObject } from "./_utils/convertToObject";
import connectDB from "./_config/database";

async function Page() {
  const session = await auth();
  if (!session) redirect("/login");
  await connectDB();
  const currentUserDoc = await User.findOne({ _id: session.user.id }).lean();
  const currentUser = convertToObject(currentUserDoc);
  const email = currentUser.email;
  return (
    <div className="flex h-dvh flex-col">
      <Navbar email={email} />
      <LinksPage currentUser={currentUser} />
    </div>
  );
}

export default Page;
