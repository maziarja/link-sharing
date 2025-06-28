import Image from "next/image";
import ShareLink from "./ShareLink";

async function PreviewPage({ currentUser }) {
  const { firstName, lastName, image, email, links } = currentUser;

  return (
    <div className="mx-auto mt-5 w-[65%] max-w-[349px] sm:mt-[102px] sm:rounded-3xl sm:bg-white sm:px-14 sm:py-12 sm:shadow-lg">
      <div className="mx-auto mb-6 w-[43%]">
        <Image
          className="ring-purple mx-auto aspect-square rounded-full ring-4"
          src={image.at(0)}
          width={104}
          height={104}
          alt="avatar"
        />
      </div>
      <div className="mb-14 text-center">
        <h2 className="text-heading-m text-dark-grey mb-2">
          {firstName} {lastName}
        </h2>
        <p className="text-body-m text-grey">{email}</p>
      </div>
      <div className="flex h-100 flex-col items-center gap-5 overflow-scroll">
        {links.map((link) => (
          <ShareLink key={link.id} link={link} />
        ))}
      </div>
    </div>
  );
}

export default PreviewPage;
