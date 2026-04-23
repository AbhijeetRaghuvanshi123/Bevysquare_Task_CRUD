import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b border-black/10 h-10 flex items-center justify-between px-5">
      <span className="text-sm font-semibold tracking-tight">BevySquare</span>
      <nav>
        <ul className="flex items-center gap-5">
          <li>
            <Link href="/" className="text-sm text-black/60 hover:text-black transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/users" className="text-sm text-black/60 hover:text-black transition-colors">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;