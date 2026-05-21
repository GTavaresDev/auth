import { Account } from "./Account";
import { Session } from "./Session";
import { Authenticator } from "./Authenticator";
import { Post } from "./Post";
import { Like } from "./Like";
import { Comment } from "./Comments";

export type User = {
  id: string;
  name?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
  image?: string | null;

  accounts?: Account[];
  sessions?: Session[];
  authenticators?: Authenticator[];

  posts?: Post[];
  likes?: Like[];
  comments?: Comment[];

  createdAt: Date;
  updatedAt: Date;
};
