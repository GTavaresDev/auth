import { User } from "./User";
import { Post } from "./Post";

export type Comment = {
  id: string;
  content: string;
  userId: string;
  postId: string;

  user: User;
  post?: Post;

  createdAt: Date;
  updatedAt: Date;
};
