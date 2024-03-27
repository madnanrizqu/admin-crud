import {
  Anchor,
  Button,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { isAxiosError } from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { register, RegisterRequest, registerRequestSchema } from "@/api/auth";
const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm<RegisterRequest>({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    validate: zodResolver(registerRequestSchema),
  });

  const handleRegister = async (val: RegisterRequest) => {
    try {
      setIsLoading(true);
      await register({
        email: val.email,
        name: val.name,
        password: val.password,
      });

      notifications.show({
        title: "Success!",
        message: "Redirecting you to login...",
        onClose: () =>
          navigate(`/login`),
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
      <Title order={1}>Register</Title>
      <Text>Hi! You can create an account here</Text>

      <form onSubmit={form.onSubmit((val) => handleRegister(val))}>
        <Stack>
          <TextInput label="Name" {...form.getInputProps("name")} />
          <TextInput label="Email" {...form.getInputProps("email")} />
          <PasswordInput label="Password" {...form.getInputProps("password")} />
          <Button type="submit" loading={isLoading}>
            Submit
          </Button>
          <Stack>
            <Anchor
              component={Link}
              to={`/login`}
            >
              Login
            </Anchor>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default Register;
