import userDB from "@/db/query";
import Link from "next/link";
import UserList from "./UserList";

export default async function UsersPage() {
  const users = await userDB.getAllUsers();

  return (
    <div className="max-w-3xl mx-auto mt-12 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-semibold">Users</h1>
        <Link
          href="/new"
          className="text-sm border border-black/20 px-3 py-1.5 hover:border-black transition-colors"
        >
          Add New User
        </Link>
      </div>

      <UserList initialUsers={users} />
    </div>
  );
}