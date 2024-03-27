export type PostAsResponse = {
  id: number;
  title: string;
  content: string;
  published: boolean;
  authorId: number;
  author: {
    id: number;
    name: string;
    email: string;
  };
};
