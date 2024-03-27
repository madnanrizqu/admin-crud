import { optional, TypeOf, z } from "zod";

import { fetcher } from "@/lib";
import { Pagination } from "@/type/pagination";
import { PostAsResponse } from "@/type/post";

import { ApiResponse } from "./type";

export const createPostSchema = z
  .object({
    title: z.string(),
    content: z.string(),
    authorEmail: z.string().email(),
  })
  .required();
export type CreatePostData = TypeOf<typeof createPostSchema>;
type CreatePostResponse = ApiResponse<{
  authorId: number;
  content: string;
  id: number;
  published: boolean;
  title: string;
}>;
export const createPost = async (data: CreatePostData) => {
  return await fetcher
    .post<CreatePostResponse>("/post", data)
    .then((res) => res.data);
};

export type GetPostsResponse = ApiResponse<{
  total: number;
  posts: Array<PostAsResponse>;
}>;
export const getPosts = async (args?: Pagination) => {
  const searchParams = args
    ? new URLSearchParams(args as Record<string, string>)
    : "";

  return await fetcher
    .get<GetPostsResponse>(`/post?${searchParams}`)
    .then((res) => res.data.data);
};

export const updatePostSchema = z
  .object({
    title: optional(z.string()),
    content: optional(z.string()),
  })
  .refine(
    (obj) => {
      for (const val of Object.values(obj)) {
        if (val !== undefined) return true;
      }
      return false;
    },
    {
      message: "Must have at least one property defined",
    },
  );

export type UpdatePostData = TypeOf<typeof updatePostSchema>;
export const updatePost = async (postId: number, data: UpdatePostData) => {
  return await fetcher.put(`/post/${postId}`, data);
};
