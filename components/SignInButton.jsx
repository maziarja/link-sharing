"use client";
import { FaGoogle } from "react-icons/fa";
import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

function GmailButton() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-purple hover:bg-purple-hover border-borders mx-auto mt-4 flex w-full cursor-pointer items-center justify-center rounded-lg border py-3"
    >
      {!pending ? (
        <div className="flex items-center justify-center gap-4">
          <FaGoogle className="text-xl text-white" />
          <p className="text-xl font-medium tracking-[0.5px] text-white">
            Google
          </p>
        </div>
      ) : (
        <SpinnerMini />
      )}
    </button>
  );
}

export default GmailButton;
