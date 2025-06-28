"use client";
import { useState } from "react";
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
    value: "github",
    icon: <TbBrandGithubFilled />,
  },
  {
    label: "Frontend Mentor",
    value: "frontendMentor",
    icon: <SiFrontendmentor />,
  },
  {
    label: "Twitter",
    value: "twitter",
    icon: <IoLogoTwitter />,
  },
  {
    label: "LinkedIn",
    value: "linkedIn",
    icon: <FaLinkedin />,
  },
  {
    label: "YouTube",
    value: "youtube",
    icon: <FaYoutube />,
  },
  {
    label: "Facebook",
    value: "facebook",
    icon: <FaFacebook />,
  },
  {
    label: "Twitch",
    value: "twitch",
    icon: <FaTwitch />,
  },
  {
    label: "Dev.to",
    value: "dev.to",
    icon: <BiLogoDevTo />,
  },
  {
    label: "Codewars",
    value: "codewars",
    icon: <SiCodewars />,
  },
  {
    label: "Codepen",
    value: "codepen",
    icon: <DiCodepen />,
  },
  {
    label: "freeCodeCamp",
    value: "freeCodeCamp",
    icon: <FaFreeCodeCamp />,
  },
  {
    label: "GitLab",
    value: "gitLab",
    icon: <AiFillGitlab />,
  },
  {
    label: "Hashnode",
    value: "hashnode",
    icon: <FaHashnode />,
  },
  {
    label: "Stack Overflow",
    value: "stackOverflow",
    icon: <DiStackoverflow />,
  },
];

function LinksForm({ index, onRemove, links, id }) {
  const [selected, setSelected] = useState(options[0]);
  const [link, setLink] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-light-grey p-4 rounded-xl mb-6 ">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <HiOutlineEquals className="text-grey" />
          <span className="text-base text-grey leading-[150%] font-bold">
            Link #{index + 1}
          </span>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            onRemove();
          }}
          className="text-body-m text-grey"
        >
          Remove
        </button>
      </div>
      <label className="text-body-s text-grey" htmlFor="platform">
        Platform
      </label>
      <div className="mt-1 mb-3">
        <div className="relative w-full">
          <button
            onClick={(e) => {
              e.preventDefault();
              setOpen((open) => !open);
            }}
            className="w-full flex items-center gap-2 text-left text-body-m px-4 py-3 border text-grey border-borders rounded-lg bg-white"
          >
            {selected.icon}
            <span className="text-dark-grey">
              {links.platform || selected.label}
            </span>
          </button>

          {open && (
            <ul className="absolute z-10 w-full mt-1 bg-white border border-borders rounded-lg shadow-md ">
              {options.map((opt) => (
                <div key={opt.value}>
                  <li
                    className="px-3 py-2 gap-2 flex items-center text-body-m text-grey hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelected(opt);
                      setOpen(false);
                    }}
                  >
                    {opt.icon}
                    <span className="text-dark-grey">{opt.label}</span>
                  </li>
                </div>
              ))}
            </ul>
          )}

          <div className="absolute top-4.5 right-2 pointer-events-none">
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
      <label className="text-body-s text-grey" htmlFor="link">
        Link
      </label>
      <div className="w-full flex mt-1 items-center gap-2 text-left px-4 py-3 border border-borders rounded-lg bg-white">
        <BiLink className="text-grey" />
        <input
          type="text"
          placeholder="e.g.https://www.github.com/johnSmith"
          name="link"
          value={links.link || link}
          onChange={(e) => setLink(e.target.value)}
          className="outline-0 text-body-m text-dark-grey "
        />
        <input type="hidden" name="platforms" value={selected.value} />
        <input type="hidden" name="id" value={id} />
      </div>
    </div>
  );
}

export default LinksForm;
