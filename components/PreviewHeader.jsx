import { auth } from "@/app/_lib/auth";
import Link from "next/link";
import ShareLinkButton from "./ShareLinkButton";

async function PreviewHeader({ email }) {
  const session = await auth();
  if (!session) return null;
  if (session.user.email !== email) return null;
  return (
    <div className="mb-10 flex justify-between px-6 py-4 sm:m-6 sm:rounded-xl sm:bg-white">
      <Link
        href={"/"}
        className="text-heading-s text-purple cursor-pointer rounded-lg border-1 px-6.5 py-2.5"
      >
        Back to Editor
      </Link>
      <ShareLinkButton />
    </div>
  );
}

export default PreviewHeader;
