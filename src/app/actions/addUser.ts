"use server";

import userDB from "@/db/query";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  await userDB.addNewUser({ name, email });

  revalidatePath("/users");
  redirect("users");
}