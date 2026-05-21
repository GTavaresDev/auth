import { User } from "./User";

export type Session = {
  id: string;
  sessionToken: string;
  userId: string;
  expires: Date;

  user?: User;

  createdAt: Date;
  updatedAt: Date;
};
