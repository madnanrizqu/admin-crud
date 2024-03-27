import { TypeOf, z } from "zod";

import { fetcher } from "@/lib";

export const createPostSchema = z
  .object({
    title: z.string(),
    content: z.string(),
    authorId: z.number(),
  })
  .required();
export type CreatePostData = TypeOf<typeof createPostSchema>;
export const createPost = async (data: CreatePostData) => {
  return await fetcher.post("/post", data);
};
