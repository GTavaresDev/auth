"use server";

import { signIn, signOut, auth } from "auth";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold hover:text-blue-200 transition"
          >
            Home
          </Link>

          {session && session.user ? (
            <div className="flex items-center gap-6">
              <span className="text-lg font-semibold">{session.user.name}</span>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold transition duration-200 shadow-md"
                >
                  Sair
                </button>
              </form>
            </div>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn();
              }}
            >
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg font-semibold transition duration-200 shadow-md"
              >
                Entrar
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
