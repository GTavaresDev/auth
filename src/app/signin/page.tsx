import { signIn, providerMap } from "auth";
import { BsGoogle } from "react-icons/bs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white border border-zinc-900 rounded-2xl p-10 flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center">
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>

        {/* Heading */}
        <div className="text-center space-y-1.5">
          <h1 className="font-serif text-2xl text-zinc-900 leading-snug">
            Bem-vindo de volta
          </h1>
          <p className="text-sm text-zinc-500 font-light">
            Acesse ou crie sua conta para continuar
          </p>
        </div>

        {/* Divider */}
        <div className="w-full flex items-center gap-3">
          <span className="flex-1 h-px bg-zinc-900" />
          <p className="text-xs text-zinc-400">Entrar com</p>
          <span className="flex-1 h-px bg-zinc-900" />
        </div>

        {/* Providers */}
        <div className="w-full flex flex-col gap-2.5">
          {Object.values(providerMap).map((provider) => (
            <form
              key={provider.id}
              action={async () => {
                "use server";
                await signIn(provider.id, { redirectTo: "/" });
              }}
            >
              <button className="w-full flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl border border-zinc-900 bg-white hover:bg-gray-50 text-zinc-800 text-sm font-medium transition-colors duration-150">
                <BsGoogle className="w-4 h-4" />
                Entrar com {provider.name}
              </button>
            </form>
          ))}
        </div>

        {/* Terms */}
        <p className="text-xs text-zinc-400 text-center leading-relaxed">
          Ao continuar, você concorda com os{" "}
          <a
            href="#"
            className="underline underline-offset-2 hover:text-zinc-600"
          >
            Termos de uso
          </a>{" "}
          e a{" "}
          <a
            href="#"
            className="underline underline-offset-2 hover:text-zinc-600"
          >
            Política de privacidade
          </a>
        </p>
      </div>
    </div>
  );
}
