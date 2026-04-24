"use client";

import { useOptimistic, useRef } from "react";
import { deleteUser } from "@/app/actions/deleteUser";
import { addUser } from "@/app/actions/addUser";
import Link from "next/link";
import SubmitButton from "@/components/submitButton";

type User = { id: number; name: string; email: string };

export default function UserList({ initialUsers }: { initialUsers: User[] }) {
    const formRef = useRef<HTMLFormElement>(null);

    const [optimisticUsers, addOptimisticUpdate] = useOptimistic(
        initialUsers,
        (state, action: { type: "ADD" | "DELETE"; payload: any }) => {
            if (action.type === "ADD") {
                return [...state, action.payload];
            }
            if (action.type === "DELETE") {
                return state.filter((user) => user.id !== action.payload);
            }
            return state;
        }
    );

    const handleAdd = async (formData: FormData) => {
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;

        const newUser = { id: Math.random(), name, email };

        addOptimisticUpdate({ type: "ADD", payload: newUser });

        formRef.current?.reset();

        await addUser(formData);
    };

    const handleDelete = async (formData: FormData) => {
        const id = Number(formData.get("id"));
        addOptimisticUpdate({ type: "DELETE", payload: id });
        await deleteUser(formData);
    };

    return (
        <div className="flex flex-col gap-8">
            <form
                ref={formRef}
                action={handleAdd}
                className="flex flex-col gap-3 p-4 bg-black/5 border border-black/10 w-full max-w-2xl"
            >
                <h2 className="text-sm font-semibold">Quick Add User</h2>
                <div className="flex gap-2 items-start">
                    <input
                        name="name"
                        placeholder="Name"
                        required
                        className="flex-1 border border-black/20 px-3 py-2 text-sm outline-none focus:border-black bg-white"
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                        className="flex-1 border border-black/20 px-3 py-2 text-sm outline-none focus:border-black bg-white"
                    />
                    <SubmitButton text="Add" />
                </div>
            </form>

            <ul className="divide-y divide-black/10">
                {optimisticUsers.map((u) => (
                    <li key={u.id} className="flex items-center justify-between py-3">
                        <div>
                            <span className="text-sm font-medium">{u.name}</span>
                            <span className="text-sm text-black/40 ml-2">{u.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link
                                href={`/users/${u.id}`}
                                className="text-sm border border-black/20 px-3 py-1.5 hover:border-black transition-colors"
                            >
                                Edit
                            </Link>
                            <form action={handleDelete}>
                                <input type="hidden" name="id" value={u.id} />
                                <SubmitButton text="Delete" />
                            </form>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}