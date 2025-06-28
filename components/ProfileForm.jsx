"use client";
import { addProfile } from "@/app/_actions/addProfile";
import { signout } from "@/app/_actions/signIn";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoSave } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";

function ProfileForm({ currentUser, children }) {
  // const [state, formAction] = useActionState(handleAddProfile, false);
  const [state, setState] = useState(false);

  async function handleAddProfile(formData) {
    const state = await addProfile(formData);
    setState(state);
    if (state.submitted)
      toast.success(<p>Your changes have been successfully saved!</p>, {
        icon: <IoSave className="text-grey text-3xl" />,
      });
  }

  return (
    <div className="m-4 mt-6 flex h-full flex-col rounded-xl bg-white p-6">
      <div className="mb-10">
        <h2 className="text-dark-grey mb-2 text-2xl leading-[150%] font-bold">
          Profile Details
        </h2>
        <p className="text-grey text-body-m">
          Add your details to create a personal touch to your profile.
        </p>
      </div>
      <form action={handleAddProfile} className="flex h-full flex-col">
        <div className="mb-6">{children}</div>
        <div className="bg-light-grey mb-6 flex flex-col rounded-xl p-5">
          <div className="mb-3">
            <label className="text-body-s text-dark-grey" htmlFor="firstName">
              First name*
            </label>

            <input
              // required
              id="firstName"
              type="text"
              name="firstName"
              className={`text-dark-grey border-borders hover:shadow-purple hover:border-purple-hover mt-1 flex w-full cursor-pointer items-center gap-2 rounded-lg border bg-white px-4 py-3 text-left outline-0 hover:border-1 hover:shadow-lg/20 ${
                state.submitted === false && "border-red"
              }`}
            />
            {state.submitted === false && (
              <p className="text-body-s text-red mt-1">Can't be empty</p>
            )}
          </div>
          <div className="mb-3">
            <label className="text-body-s text-dark-grey" htmlFor="lastName">
              Last name*
            </label>

            <input
              // required
              id="lastName"
              type="text"
              name="lastName"
              className={`text-dark-grey hover:shadow-purple hover:border-purple-hover border-borders mt-1 flex w-full cursor-pointer items-center gap-2 rounded-lg border bg-white px-4 py-3 text-left hover:border-1 hover:shadow-lg/20 ${
                state.submitted === false && "border-red"
              }`}
            />
            {state.submitted === false && (
              <p className="text-body-s text-red mt-1">Can't be empty</p>
            )}
          </div>
          <div className="mb-3">
            <label className="text-body-s text-dark-grey" htmlFor="email">
              Email
            </label>
            <div className="text-grey border-borders mt-1 flex w-full items-center gap-2 rounded-lg border bg-white px-4 py-3 text-left">
              <input
                id="email"
                disabled
                defaultValue={currentUser.email}
                type="text"
                name="lastName"
              />
              <LuLogOut
                onClick={signout}
                className="hover:text-purple ml-auto cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="border-borders mt-auto mb-2 flex border-t-1">
          <button
            className={`bg-purple hover:bg-purple-hover text-heading-s mt-7.5 mb-4 flex-1 cursor-pointer rounded-lg px-6.5 py-3 text-white sm:ml-auto sm:flex-0`}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
