"use client";

import { updateUser } from "@/app/actions/updateUser";
import { deleteUser } from "@/app/actions/deleteUser";
import SubmitButton from "@/components/submitButton";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function EditForm({ user }: { user: User }) {
  return (
    <div className="max-w-md mx-auto mt-12 px-4">
      <h1 className="text-lg font-semibold mb-6">Edit User</h1>

      <form action={updateUser} className="flex flex-col gap-3 mb-8">
        <input type="hidden" name="id" value={user.id} />
        <input
          name="name"
          autoFocus
          defaultValue={user.name}
          className="border border-black/20 px-3 py-2 text-sm outline-none focus:border-black"
        />
        <input
          name="email"
          defaultValue={user.email}
          className="border border-black/20 px-3 py-2 text-sm outline-none focus:border-black"
        />
        <SubmitButton text="Update User" />
      </form>

      <div className="border-t border-black/10 pt-6">
        <form action={deleteUser}>
          <input type="hidden" name="id" value={user.id} />
          <SubmitButton text="Delete User" />
        </form>
      </div>
    </div>
  );
}