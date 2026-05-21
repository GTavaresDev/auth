"use server";

import { signOut, auth } from "auth";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <nav className="w-full bg-white border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <Link
            href="/"
            className="font-serif text-xl text-zinc-900 hover:text-zinc-500 transition-colors duration-150"
          >
            Home
          </Link>

          {user?.name ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-zinc-900 font-light">
                {user.name}
              </span>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl border border-zinc-900 bg-white hover:bg-gray-50 text-zinc-800 text-sm font-medium transition-colors duration-150"
                >
                  Sair
                </button>
              </form>
            </div>
          ) : (
            <Link
              href="/signin"
              className="px-4 py-1.5 rounded-xl border border-zinc-900 bg-white hover:bg-gray-50 text-zinc-800 text-sm font-medium transition-colors duration-150"
            >
              Entrar
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
