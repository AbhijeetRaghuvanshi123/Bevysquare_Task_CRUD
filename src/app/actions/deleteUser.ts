"use server";

import userDB from "@/db/query";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteUser(formData: FormData) {
  const id = Number(formData.get("id"));

  await userDB.deleteUserById(id);

  revalidatePath("/users");
  redirect("/users");
}