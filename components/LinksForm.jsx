"use client";
import { useEffect, useState } from "react";
import { HiOutlineEquals } from "react-icons/hi2";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLogoTwitter } from "react-icons/io";
import { BiLink } from "react-icons/bi";
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

const options = [
  {
    label: "GitHub",
    value: "GitHub",
    icon: <TbBrandGithubFilled />,
  },
  {
    label: "Frontend Mentor",
    value: "Frontend Mentor",
    icon: <SiFrontendmentor />,
  },
  {
    label: "Twitter",
    value: "Twitter",
    icon: <IoLogoTwitter />,
  },
  {
    label: "LinkedIn",
    value: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    label: "YouTube",
    value: "YouTube",
    icon: <FaYoutube />,
  },
  {
    label: "Facebook",
    value: "Facebook",
    icon: <FaFacebook />,
  },
  {
    label: "Twitch",
    value: "Twitch",
    icon: <FaTwitch />,
  },
  {
    label: "Dev.to",
    value: "Dev.to",
    icon: <BiLogoDevTo />,
  },
  {
    label: "Codewars",
    value: "Codewars",
    icon: <SiCodewars />,
  },
  {
    label: "Codepen",
    value: "Codepen",
    icon: <DiCodepen />,
  },
  {
    label: "FreeCodeCamp",
    value: "FreeCodeCamp",
    icon: <FaFreeCodeCamp />,
  },
  {
    label: "GitLab",
    value: "GitLab",
    icon: <AiFillGitlab />,
  },
  {
    label: "Hashnode",
    value: "Hashnode",
    icon: <FaHashnode />,
  },
  {
    label: "Stack Overflow",
    value: "Stack Overflow",
    icon: <DiStackoverflow />,
  },
];

function ShowIcons({ label }) {
  return options.map((opt, i) => {
    if (
      opt.label.toLowerCase().replaceAll(" ", "").replaceAll(".", "") ===
      (label?.toLowerCase()?.replaceAll(" ", "")?.replaceAll(".", "") || "")
    ) {
      return <div key={i}>{opt.icon}</div>;
    }
  });
}

function LinksForm({ index, onRemove, link, onPlatformChange, onUrlChange }) {
  const [url, setUrl] = useState(link.url || "");
  const [platform, setPlatform] = useState(link.platform);
  const [error, setError] = useState("");

  // check if url is correct
  const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w-./?%&=]*)?$/i;
  const isValidURL = (str) => urlRegex.test(str);

  const handlePlatformChange = (e) => {
    const newPlatform = e.target.value;
    setPlatform(newPlatform);
    onPlatformChange(newPlatform);
  };

  const handleUrlChange = (e) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    onUrlChange(newUrl);
  };

  useEffect(() => {
    setUrl(link.url || "");
  }, [link.url]);

  useEffect(() => {
    if (!isValidURL(url)) {
      setError("Please check the URL");
    } else {
      setError("");
    }

    if (url === "") {
      setError("Can't be empty");
    }
  }, [url]);

  return (
    <div className="bg-light-grey mb-6 rounded-xl p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HiOutlineEquals className="text-grey" />
          <span className="text-grey text-base leading-[150%] font-bold">
            Link #{index + 1}
          </span>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            onRemove();
          }}
          className="text-body-m text-grey cursor-pointer"
        >
          Remove
        </button>
      </div>
      <label
        className="text-body-s text-dark-grey"
        htmlFor={`platform-${index}`}
      >
        Platform
      </label>
      <div className="relative mt-1 mb-3">
        <div className="text-grey absolute top-4 left-2.5">
          {<ShowIcons label={platform} />}
        </div>
        <div className="border-borders hover:shadow-purple hover:border-purple-hover mt-1 flex w-full items-center gap-2 rounded-lg border bg-white pr-2 pl-8 text-left hover:border-1 hover:shadow-lg/20">
          <select
            style={{
              WebkitAppearance: "none",
              MozAppearance: "none",
              appearance: "none",
            }}
            className="w-full rounded-lg py-3 outline-0"
            id={`platform-${index}`}
            // required
            value={link.platform}
            onChange={(e) => {
              handlePlatformChange(e);
            }}
            name="platforms"
          >
            {options.map((opt) => (
              <option key={opt.label} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="text-grey pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
      <label className="text-body-s text-dark-grey" htmlFor={`link-${index}`}>
        Link
      </label>
      <div
        className={`hover:shadow-purple hover:border-purple-hover border-borders mt-1 flex w-full items-center gap-2 rounded-lg border bg-white px-4 py-3 text-left hover:border-1 hover:shadow-lg/20 ${
          !isValidURL(url) && "border-red"
        }`}
      >
        <BiLink className="text-grey" />
        <input
          id={`link-${index}`}
          // required
          type="text"
          placeholder="e.g.https://www.github.com/johnSmith"
          name="url"
          value={url}
          onChange={(e) => handleUrlChange(e)}
          className="text-body-m text-dark-grey w-full cursor-pointer outline-0"
        />
        <input type="hidden" name="id" value={link.id} />
        {!isValidURL(url) && (
          <p className="text-body-s text-red hidden w-50 text-right md:block">
            {error}
          </p>
        )}
      </div>
      {!isValidURL(url) && (
        <p className="text-body-s text-red mt-1 md:hidden">{error}</p>
      )}
    </div>
  );
}

export default LinksForm;
