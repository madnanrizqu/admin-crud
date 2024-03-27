import { Button, Stack, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";

import { CreatePostData, createPostSchema } from "@/api/post";

type PostFormProps = {
  initialData?: CreatePostData;
  onSubmit?: (v: CreatePostData) => void;
};
export const PostForm = (props: PostFormProps) => {
  const form = useForm<Partial<CreatePostData>>({
    initialValues: {
      title: props.initialData?.title ?? undefined,
      content: props.initialData?.title ?? undefined,
      authorEmail: props.initialData?.authorEmail ?? undefined,
    },
    validate: zodResolver(createPostSchema),
  });

  return (
    <Stack>
      <form
        onSubmit={form.onSubmit((v) => props.onSubmit?.(v as CreatePostData))}
      >
        <Stack>
          <TextInput label="Title" {...form.getInputProps("title")} />
          <Textarea
            label="Content"
            autosize
            minRows={10}
            {...form.getInputProps("content")}
          />
          <TextInput
            label="Author email"
            {...form.getInputProps("authorEmail")}
          />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Stack>
  );
};
