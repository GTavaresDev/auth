import { User } from "./User";
import { Like } from "./Like";
import { Comment } from "./Comments";

export type Post = {
  id: string;
  imageUrl: string;
  caption?: string | null;
  userId: string;

  user: User;
  likes?: Like[];
  comments?: Comment[];

  createdAt: Date;
  updatedAt: Date;
};
