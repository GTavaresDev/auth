"use server";

import { signOut, auth } from "auth";
import Image from "next/image";
import Link from "next/link";
import { getUserByEmail } from "@/actions";
import Button from "./Button";
import ButtonLink from "./ButtonLink";

const Navbar = async () => {
  const session = await auth();
  const user = await getUserByEmail(session?.user.email ?? null);

  return (
    <nav className="w-full bg-white border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center gap-4">
            <ButtonLink href="/">Home</ButtonLink>
            <ButtonLink href="/profile">Profile</ButtonLink>
            <ButtonLink href="/my-posts">Posts</ButtonLink>
          </div>

          {user ? (
            <div className="flex items-center gap-4">
              <span className="flex text-sm gap-2 text-zinc-900 font-light">
                {user.name}
              </span>
              <span>
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={`Perfil de ${user.name ?? "usuario"}`}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : null}
              </span>
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <Button text="Sair" />
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
