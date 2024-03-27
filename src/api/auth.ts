import { TypeOf, z } from "zod";

import { fetcher } from "@/lib";

import { ApiResponse } from "./type";

export const loginRequestSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 8 characters"),
});
export type LoginRequest = TypeOf<typeof loginRequestSchema>;
type LoginResponse = ApiResponse<{
  accessToken: string;
}>;
export const login = async ({ email, password }: LoginRequest) => {
  return await fetcher
    .post<LoginResponse>(`/auth/login`, { email, password })
    .then((res) => res.data);
};

type GetCurrentUserResponse = ApiResponse<{
  id: number;
  name: string;
  email: string;
}>;
export const getCurrentUser = async () => {
  return await fetcher
    .get<GetCurrentUserResponse>("/auth/me")
    .then((res) => res.data);
};

export const registerRequestSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1, "Name is required"),
  password: z.string().min(6, "Password must be at least 8 characters"),
});
export type RegisterRequest = TypeOf<typeof registerRequestSchema>;
export const register = async ({ name, email, password }: RegisterRequest) => {
  return await fetcher.post(`/auth/register`, {
    email,
    name,
    password,
  });
};
