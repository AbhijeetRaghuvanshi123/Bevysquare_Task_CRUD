import { addUser } from "@/app/actions/addUser";

export default function NewUserPage() {
  return (
    <div className="max-w-md mx-auto mt-12 px-4">
      <h1 className="text-lg font-semibold mb-6">New User</h1>
      <form action={addUser} className="flex flex-col gap-3">
        <input
          name="name"
          placeholder="Name"
          className="border border-black/20 px-3 py-2 text-sm outline-none focus:border-black"
        />
        <input
          name="email"
          placeholder="Email"
          className="border border-black/20 px-3 py-2 text-sm outline-none focus:border-black"
        />
        <button
          type="submit"
          className="bg-black text-white text-sm px-4 py-2 hover:bg-black/80 transition-colors w-fit"
        >
          Create
        </button>
      </form>
    </div>
  );
}