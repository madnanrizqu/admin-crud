import {
  Anchor,
  Button,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { isAxiosError } from "axios";
import { zodResolver } from "mantine-form-zod-resolver";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  getCurrentUser,
  login,
  LoginRequest,
  loginRequestSchema,
} from "@/api/auth";
import { useAuthStore } from "@/store/auth";
import { User } from "@/type/user";

const Login = () => {
  const authStore = useAuthStore();

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginRequest>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(loginRequestSchema),
  });

  const handleLogin = async (val: LoginRequest) => {
    try {
      setIsLoading(true);
      const resLogin = await login({
        email: val.email,
        password: val.password,
      });

      authStore.setToken(resLogin.data?.accessToken as string);

      const resGetUser = await getCurrentUser();

      authStore.setUser(resGetUser.data as User);

      notifications.show({
        title: "Success!",
        message: "Welcome to the dashboard",
      });
    } catch (error) {
      if (isAxiosError(error)) {
        notifications.show({
          title: error.message,
          message: error.response?.data?.message ?? "Please try again",
          color: "red",
        });
        return;
      }

      notifications.show({
        title: "Something went wrong",
        message: "Please try again later",
        color: "red",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack>
      <Title order={1}>Login</Title>
      <Text>Hi! Go ahead and fill in your credentials to use the app</Text>

      <form onSubmit={form.onSubmit(handleLogin)}>
        <Stack>
          <TextInput label="Email" {...form.getInputProps("email")} />
          <PasswordInput label="Password" {...form.getInputProps("password")} />
          <Button type="submit" loading={isLoading}>
            Submit
          </Button>
          <Stack>
            <Anchor component={Link} to={`/register`}>
              Register
            </Anchor>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default Login;
