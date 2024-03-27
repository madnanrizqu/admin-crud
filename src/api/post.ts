import { TypeOf, z } from "zod";

import { fetcher } from "@/lib";
import { Pagination } from "@/type/pagination";

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
  posts: Array<{
    id: number;
    title: string;
    content: string;
    published: boolean;
    authorId: number;
    author: {
      id: number;
      name: string;
    };
  }>;
}>;
export const getPosts = async (args?: Pagination) => {
  const searchParams = args
    ? new URLSearchParams(args as Record<string, string>)
    : "";

  return await fetcher
    .get<GetPostsResponse>(`/post?${searchParams}`)
    .then((res) => res.data.data);
};
