import { Button, Select, Stack, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";

import { CreatePostData, createPostSchema } from "@/api/post";

type PostFormProps = {
  authors: Array<{ value: number; label: string }>;
  initialData?: CreatePostData;
  onSubmit?: (v: CreatePostData) => void;
};
export const PostForm = (props: PostFormProps) => {
  const form = useForm<Partial<CreatePostData>>({
    initialValues: {
      title: props.initialData?.title ?? undefined,
      content: props.initialData?.title ?? undefined,
      authorId: props.initialData?.authorId ?? undefined,
    },
    validate: zodResolver(createPostSchema),
  });

  return (
    <Stack>
      <form onSubmit={form.onSubmit(console.log)}>
        <Stack>
          <TextInput label="Title" {...form.getInputProps("title")} />
          <Textarea
            label="Content"
            autosize
            minRows={10}
            {...form.getInputProps("content")}
          />
          <Select
            label="Author"
            placeholder="Pick value"
            data={props.authors.map((v) => {
              return { ...v, value: String(v.value) };
            })}
            {...form.getInputProps("authorId")}
            onChange={(v) => form.getInputProps("authorId").onChange(Number(v))}
          />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Stack>
  );
};
