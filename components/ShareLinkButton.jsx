"use client";

import toast from "react-hot-toast";

function ShareLinkButton() {
  const handleCopy = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      toast.success(
        <p className="bg-dark-grey">
          The link has been copied to your clipboard!
        </p>
      );
    } catch (err) {
      console.error("Failed to copy:", err);
      toast.error("Failed to copy");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="border-1 text-heading-s cursor-pointer text-white bg-purple px-8.5 py-2.5 rounded-lg"
    >
      Share Link
    </button>
  );
}

export default ShareLinkButton;
