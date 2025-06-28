"use client";
import Image from "next/image";
import logoSmall from "@/public/images/logo-devlinks-small.svg";
import logoLarge from "@/public/images/logo-devlinks-large.svg";
import { BiLink } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { redirect, usePathname } from "next/navigation";
import Link from "next/link";

function Navbar({ email }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between rounded-b-xl bg-white pt-4 pr-4 pb-4 pl-6 sm:m-4 sm:mb-0 sm:rounded-xl">
      <Image
        className="sm:hidden"
        onClick={() => redirect("/")}
        src={logoSmall}
        width="0"
        height="0"
        alt="logo"
      />
      <Image
        className="hidden sm:block"
        onClick={() => redirect("/")}
        src={logoLarge}
        width="146"
        height="32"
        alt="logo"
      />
      <div className="flex">
        <Link
          href="/"
          className={`text-grey flex items-center justify-center rounded-lg px-6.5 py-2.5 sm:gap-2 ${
            pathname === "/" && "bg-purple-light"
          }`}
        >
          <BiLink
            className={`h-[20px] w-[20px] ${pathname === "/" && "text-purple"}`}
          />
          <p
            className={`text-heading-s text-grey hidden sm:block ${pathname === "/" && "text-purple"}`}
          >
            Links
          </p>
        </Link>
        <Link
          href="/profile"
          className={`flex items-center justify-center rounded-lg px-6.5 py-2.5 sm:gap-2 ${
            pathname === "/profile" && "bg-purple-light"
          }`}
        >
          <BiUserCircle
            className={`text-grey h-[20px] w-[20px] ${
              pathname === "/profile" && "text-purple"
            }`}
          />
          <p
            className={`text-heading-s text-grey hidden sm:block ${pathname === "/profile" && "text-purple"}`}
          >
            Profile Details
          </p>
        </Link>
      </div>
      <Link
        href={`/preview/${email}`}
        className="text-purple border-purple flex items-center justify-center rounded-lg border-1 px-4 py-2"
      >
        <FiEye className="h-[20px] w-[20px] sm:hidden" />
        <p className="text-heading-s hidden sm:block">Preview</p>
      </Link>
    </div>
  );
}

export default Navbar;
