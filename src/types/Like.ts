import { User } from "./User";
import { Post } from "./Post";

export type Like = {
  id: string;
  userId: string;
  postId: string;

  user: User;
  post?: Post;

  createdAt: Date;
};
