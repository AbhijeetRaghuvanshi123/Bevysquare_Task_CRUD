import Link from "next/link";
export default function Home() {
  return (
    <div className="max-w-xs mx-auto mt-16 px-4">
      <h1 className="text-lg font-semibold mb-4">Tech Stack</h1>
      <ul className="flex flex-col gap-1.5">
        {["Next.js", "TypeScript", "App Router", "PostgreSQL"].map((tech) => (
          <li key={tech} className="text-sm text-black/60 border-l-2 border-black/20 pl-3">
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link href="/users" className="border border-black/20 text-sm px-4 py-2 text-black/60 hover:border-black hover:text-black transition-colors">
          Checkout Users
        </Link>
      </div>
    </div>
  );
}