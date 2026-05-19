import { auth } from "auth";

const ServerPage = async () => {
  const session = await auth();

  if (!session || !session.user) {
    return (
      <div>
        <h1 className="text-4xl font-bold text-gray-800 ">Acesso Negado</h1>
        <p className="text-lg  text-gray-600  mt-4">
          Você precisa estar logado para acessar esta página.
        </p>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800">
        Bem-vindo {session.user.name} à sua pagina Server Side!
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        Esta é a página principal acessível apenas para usuários autenticados.
      </p>
    </div>
  );
};

export default ServerPage;
