"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ text }: { text: string }) {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-black text-white text-sm px-4 py-2 hover:bg-black/80 transition-colors w-fit disabled:opacity-50"
        >
            {pending ? (
                <span className="flex items-center gap-2">
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                    Saving...
                </span>
            ) : (
                text
            )}
        </button>
    );
}