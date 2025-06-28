"use client";

import { TbBrandGithubFilled } from "react-icons/tb";
import { IoLogoTwitter } from "react-icons/io";
import { SiFrontendmentor } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa6";
import { BiLogoDevTo } from "react-icons/bi";
import { SiCodewars } from "react-icons/si";
import { DiCodepen } from "react-icons/di";
import { FaFreeCodeCamp } from "react-icons/fa";
import { AiFillGitlab } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import { DiStackoverflow } from "react-icons/di";
import { BiRightArrowAlt } from "react-icons/bi";
import toast from "react-hot-toast";

const options = [
  {
    label: "GitHub",
    value: "GitHub",
    icon: <TbBrandGithubFilled />,
    color: "#1a1a1a",
  },
  {
    label: "Frontend Mentor",
    value: "Frontend Mentor",
    icon: <SiFrontendmentor />,
    color: "#ffffff",
  },
  {
    label: "Twitter",
    value: "Twitter",
    icon: <IoLogoTwitter />,
    color: "#43B7E9",
  },
  {
    label: "LinkedIn",
    value: "LinkedIn",
    icon: <FaLinkedin />,
    color: "#2D68FF",
  },
  {
    label: "YouTube",
    value: "YouTube",
    icon: <FaYoutube />,
    color: "#EE3939",
  },
  {
    label: "Facebook",
    value: "Facebook",
    icon: <FaFacebook />,
    color: "#2442AC",
  },
  {
    label: "Twitch",
    value: "Twitch",
    icon: <FaTwitch />,
    color: "#EE3FC8",
  },
  {
    label: "Dev.to",
    value: "Dev.to",
    icon: <BiLogoDevTo />,
    color: "#333333",
  },
  {
    label: "Codewars",
    value: "Codewars",
    icon: <SiCodewars />,
    color: "#8A1A50",
  },
  {
    label: "Codepen",
    value: "Codepen",
    icon: <DiCodepen />,
    color: "#776885",
  },
  {
    label: "FreeCodeCamp",
    value: "FreeCodeCamp",
    icon: <FaFreeCodeCamp />,
    color: "#302267",
  },
  {
    label: "GitLab",
    value: "GitLab",
    icon: <AiFillGitlab />,
    color: "#EB4925",
  },
  {
    label: "Hashnode",
    value: "Hashnode",
    icon: <FaHashnode />,
    color: "#0330D1",
  },
  {
    label: "Stack Overflow",
    value: "Stack Overflow",
    icon: <DiStackoverflow />,
    color: "#EC7100",
  },
];

function ShareLink({ link, isMockup = false }) {
  return options.map((opt, i) => {
    if (link.platform === opt.value) {
      const handleCopy = async () => {
        try {
          if (link.url === undefined) return;
          const url = link.url;
          await navigator.clipboard.writeText(url);
          toast.success("The link has been copied to your clipboard!");
        } catch (err) {
          console.error("Failed to copy:", err);
          toast.error("Failed to copy");
        }
      };

      return (
        <button
          onClick={handleCopy}
          className={`text-body-m mb-2 flex w-full items-center rounded-lg ${isMockup ? "p-2.5" : "p-4"} ${
            opt.value === "Frontend Mentor"
              ? "text-dark-grey border-borders border-1"
              : "text-white"
          }`}
          style={{ backgroundColor: opt.color }}
          key={i}
        >
          <p className="mr-2">{opt.icon}</p>
          <p>{opt.label}</p>
          <BiRightArrowAlt className="ml-auto" />
        </button>
      );
    }
  });
}

export default ShareLink;
