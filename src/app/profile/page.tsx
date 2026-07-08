import { auth } from "auth";
import { getUserByEmail } from "@/actions";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Profile() {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/signin");
  }

  const user = await getUserByEmail(session.user.email);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <section className="w-full max-w-md min-h-187.5 bg-white border border-zinc-900 rounded-2xl p-10 flex flex-col items-center gap-6">
        {user?.image ? (
          <Image
            src={user.image}
            alt={`Perfil de ${user.name ?? "usuário"}`}
            width={120}
            height={120}
            className="rounded-full border border-zinc-900 object-cover"
          />
        ) : (
          <div className="w-24 h-24 rounded-full border border-zinc-900 flex items-center justify-center">
            <span className="font-serif text-3xl text-zinc-900">
              {user?.name?.charAt(0).toUpperCase() ?? "U"}
            </span>
          </div>
        )}

        <div className="text-center space-y-1.5">
          <h1 className="font-serif text-2xl text-zinc-900 leading-snug">
            Perfil do usuário
          </h1>

          <p className="text-sm text-zinc-500 font-light">
            {user?.name ?? "Usuário"}
          </p>
        </div>

        <div className="w-full flex items-center gap-3">
          <span className="flex-1 h-px bg-zinc-900" />
          <p className="text-xs text-zinc-400">informações</p>
          <span className="flex-1 h-px bg-zinc-900" />
        </div>

        <div className="w-full flex flex-col gap-2.5">
          <div className="w-full px-4 py-2.5 rounded-xl border border-zinc-900 bg-white">
            <p className="text-xs text-zinc-400">Nome</p>
            <p className="text-sm font-medium text-zinc-800">
              {user?.name ?? "Não informado"}
            </p>
          </div>

          <div className="w-full px-4 py-2.5 rounded-xl border border-zinc-900 bg-white">
            <p className="text-xs text-zinc-400">E-mail</p>
            <p className="text-sm font-medium text-zinc-800">
              {user?.email ?? session.user.email}
            </p>
          </div>
        </div>

        <p className="text-xs text-zinc-400 text-center leading-relaxed">
          Esta é a página de perfil do usuário autenticado.
        </p>
      </section>
    </main>
  );
}
