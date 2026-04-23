import userDB from "@/db/query";
import Link from "next/link";

export default async function UsersPage() {
  const users = await userDB.getAllUsers();

  return (
    <div className="max-w-xl mx-auto mt-12 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-semibold">Users</h1>
        <Link
          href="/new"
          className="text-sm border border-black/20 px-3 py-1.5 hover:border-black transition-colors"
        >
          Add New User
        </Link>
      </div>

      <ul className="divide-y divide-black/10">
        {users.map((u) => (
          <li key={u.id} className="flex items-center justify-between py-3">
            <div>
              <span className="text-sm font-medium">{u.name}</span>
              <span className="text-sm text-black/40 ml-2">{u.email}</span>
            </div>
            <Link
              href={`/users/${u.id}`}
              className="text-sm border border-black/20 px-3 py-1.5 hover:border-black transition-colors"
            >
              Edit 
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}