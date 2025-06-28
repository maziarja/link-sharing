import connectDB from "@/app/_config/database";
import { convertToObject } from "@/app/_utils/convertToObject";
import PreviewHeader from "@/components/PreviewHeader";
import PreviewPage from "@/components/PreviewPage";
import User from "@/models/User";

async function Page({ params }) {
  const { email } = await params;
  const decodeUriEmail = decodeURIComponent(email);
  await connectDB();

  const currentUserDoc = await User.findOne({ email: decodeUriEmail }).lean();
  delete currentUserDoc._id;
  delete currentUserDoc.__v;

  const currentUser = convertToObject(currentUserDoc);

  return (
    <div>
      <div className="bg-purple absolute inset-0 -z-5 hidden h-[357px] rounded-b-4xl sm:block"></div>
      <PreviewHeader email={decodeUriEmail} />
      <PreviewPage currentUser={currentUser} />
    </div>
  );
}

export default Page;
