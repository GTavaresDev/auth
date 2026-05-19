import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
        Bem-vindo à nossa aplicação!
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
        Faça login para acessar sua pagina principal.
      </p>
      <Link
        href="/client"
        className="mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Pagina Client
      </Link>
      <Link
        href="/server"
        className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
      >
        Pagina Server
      </Link>
      <Link
        href="/dashboard"
        className="mt-6 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
      >
        Pagina Dashboard
      </Link>
    </div>
  );
}
