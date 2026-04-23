"use client";

import { updateUser } from "@/app/actions/updateUser";
import { deleteUser } from "@/app/actions/deleteUser";

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
          defaultValue={user.name}
          className="border border-black/20 px-3 py-2 text-sm outline-none focus:border-black"
        />
        <input
          name="email"
          defaultValue={user.email}
          className="border border-black/20 px-3 py-2 text-sm outline-none focus:border-black"
        />
        <button
          type="submit"
          className="bg-black text-white text-sm px-4 py-2 hover:bg-black/80 transition-colors w-fit"
        >
          Update User
        </button>
      </form>

      <div className="border-t border-black/10 pt-6">
        <form action={deleteUser}>
          <input type="hidden" name="id" value={user.id} />
          <button
            type="submit"
            className="border border-black/20 text-sm px-4 py-2 text-black/60 hover:border-black hover:text-black transition-colors"
          >
            Delete User
          </button>
        </form>
      </div>
    </div>
  );
}