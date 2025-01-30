import Link from "next/link";

interface User {
  name: string;
  avatar: string;
}

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
}

const Navbar = ({ user, onLogout }: NavbarProps) => (
  <nav className="bg-teal-600 text-white shadow-md">
    <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <Link
        href="/"
        className="text-2xl font-bold hover:text-teal-100 transition-colors"
      >
        HabitHero
      </Link>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-sm">{user.name}</span>
            <img
              src="/avatar.png"
              alt="Avatar"
              className="w-8 h-8 rounded-full border-2 border-teal-300"
            />
            <button
              onClick={onLogout}
              className="bg-teal-700 hover:bg-teal-800 px-4 py-2 rounded-md text-sm transition-colors"
            >
              Log Out
            </button>
          </>
        ) : (
          <Link
            href="/login"
            className="bg-teal-500 hover:bg-teal-400 px-4 py-2 rounded-md text-sm transition-colors"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  </nav>
);

export default Navbar;
