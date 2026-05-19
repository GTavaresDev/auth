import { auth } from "auth";

export default async function Dashboard() {
  const session = await auth();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Dashboard
        </h1>
        {session?.user?.name && (
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Welcome, <span className="font-semibold">{session.user.name}</span>!
          </p>
        )}
      </div>
    </div>
  );
}
