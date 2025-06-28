"use server";

import { signIn, signOut } from "../_lib/auth";

export async function signin() {
  await signIn("google", { redirectTo: "/" });
}

export async function signout() {
  await signOut();
}
