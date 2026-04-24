"use client";

import { useOptimistic } from "react";
import { updateUser } from "@/app/actions/updateUser";
import { deleteUser } from "@/app/actions/deleteUser";
import SubmitButton from "@/components/submitButton";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function EditForm({ user }: { user: User }) {
  const [optimisticUser, setOptimisticUser] = useOptimistic(
    user,
    (state, newUserData: Partial<User>) => ({ ...state, ...newUserData })
  );

  const handleUpdate = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;

    setOptimisticUser({ name, email });
    await updateUser(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-12 px-4">
      <h1 className="text-lg font-semibold mb-6">{optimisticUser.name}</h1>

      <form action={handleUpdate} className="flex flex-col gap-3 mb-8">
        <input type="hidden" name="id" value={optimisticUser.id} />
        <input
          name="name"
          autoFocus
          defaultValue={optimisticUser.name}
          className="border border-black/20 px-3 py-2 text-sm outline-none focus:border-black"
        />
        <input
          name="email"
          defaultValue={optimisticUser.email}
          className="border border-black/20 px-3 py-2 text-sm outline-none focus:border-black"
        />
        <SubmitButton text="Update User" />
      </form>

      <div className="border-t border-black/10 pt-6">
        <form action={deleteUser}>
          <input type="hidden" name="id" value={optimisticUser.id} />
          <SubmitButton text="Delete User" /> 
        </form>
      </div>
    </div>
  );
}