import phoneMockup from "@/public/images/illustration-phone-mockup.svg";
import Image from "next/image";
import ShareLink from "./ShareLink";
function PhoneMockup({ openNewLink, currentUser }) {
  return (
    <div className="mt-6 ml-6 hidden h-full items-center justify-center rounded-xl bg-white lg:flex">
      <div className="relative">
        <Image src={phoneMockup} width={0} height={0} alt="phone mockup" />
        <div className="absolute top-69.5 right-9 flex flex-col gap-5">
          {openNewLink
            ? openNewLink?.map(
                (link, i) =>
                  i < 5 && (
                    <div key={link.id} className={`h-11 w-59.5 rounded-lg`}>
                      <ShareLink link={link} isMockup={true} />
                    </div>
                  ),
              )
            : currentUser.links?.map(
                (link, i) =>
                  i < 5 && (
                    <div key={link.id} className={`h-11 w-59.5 rounded-lg`}>
                      <ShareLink link={link} isMockup={true} />
                    </div>
                  ),
              )}
        </div>
        {currentUser.image && (
          <div className="absolute top-17 right-28">
            <Image
              className="ring-purple mx-auto aspect-square rounded-full ring-4"
              src={currentUser.image.at(0)}
              height={85}
              width={85}
              alt="avatar"
            />
          </div>
        )}
        {(currentUser.firstName || currentUser.lastName) && (
          <p className="text-dark-grey absolute top-44 right-3.5 flex w-70 items-center justify-center bg-white text-lg font-semibold">
            {currentUser.firstName} {currentUser.lastName}
          </p>
        )}
        {currentUser.email && (
          <p className="text-grey absolute top-52 right-3.5 flex w-70 items-center justify-center bg-white text-sm">
            {currentUser.email}
          </p>
        )}
      </div>
    </div>
  );
}

export default PhoneMockup;
