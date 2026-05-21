import { User } from "./types/User";
import prisma from "./lib/prisma";

//Resgastar usuario pelo email
export async function getUserByEmail(
  email: string | null,
): Promise<User | null> {
  if (!email) return null;
  return await prisma.user.findFirst({
    where: {
      email,
    },
  });
}
