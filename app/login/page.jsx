import GmailButton from "@/components/SignInButton";
import logoLarge from "@/public/images/logo-devlinks-large.svg";
import Image from "next/image";
import { signin } from "../_actions/signIn";

function Page() {
  return (
    <section className="mx-8 mt-8 flex flex-col sm:mx-auto sm:max-w-[476px]">
      <header className="mb-16 sm:mx-auto">
        <Image src={logoLarge} width="0" height="0" alt="logo" />
      </header>
      <div className="p-6 sm:rounded-xl sm:bg-white">
        <h1 className="text-dark-grey mb-2 text-2xl font-bold sm:mb-4">
          Login
        </h1>
        <p className="text-body-m text-grey">
          Continue with your Gmail below to get back into the app
        </p>
        <div className="mt-20">
          <form action={signin}>
            <GmailButton />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Page;
