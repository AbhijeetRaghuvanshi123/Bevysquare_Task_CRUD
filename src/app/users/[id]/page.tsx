import userDB from "@/db/query";
import EditUserForm from "./EditUserForm";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const userId = Number(id);

  if (isNaN(userId)) {
    return (
      <div className="max-w-md mx-auto mt-12 px-4 text-sm text-black/50">
        Invalid user ID
      </div>
    );
  }

  const user = await userDB.getUserById(userId);

  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-12 px-4 text-sm text-black/50">
        User not found
      </div>
    );
  }

  return <EditUserForm user={user} />;
}