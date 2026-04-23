"use server";

import userDB from "@/db/query";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateUser(formData: FormData) {
  const id = Number(formData.get("id"));
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  await userDB.updateUserById({ id, name, email });

  revalidatePath("/users");
  redirect(`/users/${id}`);
}