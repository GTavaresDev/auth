import { auth } from "auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white">
      {session?.user ? (
        <div className="text-center space-y-2">
          <h1 className="font-serif text-4xl text-zinc-900">
            Bem-vindo de volta, {session.user.name?.split(" ")[0]}!
          </h1>
          <p className="text-sm text-zinc-500 font-light">
            Que bom ter você aqui novamente.
          </p>
        </div>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 px-4">
          <div className="w-full max-w-sm bg-white border border-zinc-900 rounded-2xl p-10 flex flex-col items-center gap-6">
            <div className="text-center space-y-1.5">
              <h2 className="font-serif text-2xl text-zinc-900 leading-snug">
                Acesso restrito
              </h2>
              <p className="text-sm text-zinc-500 font-light">
                Para continuar, faça login na sua conta.
              </p>
            </div>

            <div className="w-full flex items-center gap-3">
              <span className="flex-1 h-px bg-zinc-900" />
              <p className="text-xs text-zinc-400">necessário</p>
              <span className="flex-1 h-px bg-zinc-900" />
            </div>

            <Link
              href="/signin"
              className="w-full flex items-center justify-center px-5 py-2.5 rounded-xl border border-zinc-900 bg-white hover:bg-gray-50 text-zinc-800 text-sm font-medium transition-colors duration-150"
            >
              Fazer login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
