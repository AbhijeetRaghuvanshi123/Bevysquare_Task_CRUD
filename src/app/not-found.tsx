import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-sm text-black/50">Page not found</p>
      <Link href="/" className="text-sm underline underline-offset-4 hover:text-black/60 transition-colors">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;