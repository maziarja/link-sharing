"use client";

import Image from "next/image";
import illustrationEmpty from "@/public/images/illustration-empty.svg";
import LinksForm from "./LinksForm";
import { useState } from "react";
import { addLinksToDB } from "@/app/_actions/addLinks";
import PhoneMockup from "./PhoneMockup";

function LinksPage({ currentUser }) {
  const [openNewLink, setOpenNewLink] = useState(currentUser.links || []);

  const handleAddLink = (e) => {
    e.preventDefault();
    setOpenNewLink((links) => [
      ...links,
      { id: crypto.randomUUID(), platform: "GitHub" },
    ]);
  };

  const handleRemoveLink = (id) => {
    setOpenNewLink((links) => links.filter((link) => link.id !== id));
  };

  const handleChangePlatform = (id, newPlatform) => {
    const updatedLink = openNewLink.map((link) =>
      link.id === id ? { ...link, platform: newPlatform } : link,
    );
    setOpenNewLink(updatedLink);
  };

  const handleChangeUrl = (id, newUrl) => {
    const updatedLink = openNewLink.map((link) =>
      link.id === id ? { ...link, url: newUrl } : link,
    );
    setOpenNewLink(updatedLink);
  };

  return (
    <div className="mb-10 h-full lg:grid lg:grid-cols-[1fr_1.59fr]">
      <PhoneMockup openNewLink={openNewLink} currentUser={currentUser} />
      <form
        action={addLinksToDB}
        className="m-4 mt-6 flex h-full flex-col rounded-xl bg-white p-6"
      >
        <div className="border-borders mb-4 h-full border-b-1">
          <div className="mb-6">
            <h2 className="text-dark-grey mb-2 text-2xl leading-[150%] font-bold">
              Customize your links
            </h2>
            <p className="text-body-m text-grey mb-10">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
            <button
              onClick={handleAddLink}
              className="border-purple text-purple text-heading-s active:bg-purple-light flex w-full cursor-pointer justify-center rounded-lg border py-2.5"
            >
              + Add new link
            </button>
          </div>
          {openNewLink.length === 0 ? (
            <div className="bg-light-grey flex flex-col items-center justify-center gap-6 rounded-xl px-5 py-11.5">
              <Image
                src={illustrationEmpty}
                height={80}
                width={125}
                className="sm:h-[160px] sm:w-[250px]"
                alt="phone-icon"
              />
              <h2 className="text-dark-grey text-2xl leading-[150%] font-bold">
                Let's get you started
              </h2>
              <p className="text-body-m text-grey text-center">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We're here to help
                you share your profiles with everyone!
              </p>
            </div>
          ) : (
            <div className="h-[calc(100dvh-470px)] overflow-auto">
              {openNewLink.map((link, index) => (
                <div key={index}>
                  <LinksForm
                    index={index}
                    link={link}
                    onRemove={() => handleRemoveLink(link.id)}
                    onUrlChange={(newUrl) => handleChangeUrl(link.id, newUrl)}
                    onPlatformChange={(newPlatform) =>
                      handleChangePlatform(link.id, newPlatform)
                    }
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          className={`bg-purple text-heading-s hover:bg-purple-hover my-4 cursor-pointer rounded-lg px-6.5 py-3 text-white sm:ml-auto`}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default LinksPage;
