"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ text }: { text: string }) {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-black text-white text-sm h-[38px] w-28 flex-shrink-0 flex items-center justify-center hover:bg-black/80 transition-colors disabled:opacity-50"
        >
            {pending ? (
                <span className="flex items-center gap-2">
                    <span className="animate-spin h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full" />
                    <span>Saving...</span>
                </span>
            ) : (
                text
            )}
        </button>
    );
}