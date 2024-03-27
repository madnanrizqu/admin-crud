import {
  Button,
  Drawer,
  Flex,
  Modal,
  Pagination,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "6 konsep utama untuk menguasai Digital Marketing!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo itaque, alias error aliquam veniam eligendi necessitatibus voluptate voluptatibus nobis ratione modi eos aut iusto tenetur asperiores laboriosam eaque debitis cum.
    Consectetur distinctio deleniti fugiat, vel minus, voluptatem dolorem laborum quaerat et, fuga a? Eligendi facere aliquam praesentium numquam vitae doloribus fugit nesciunt possimus unde nemo assumenda, ipsum dolore, aspernatur quod.
    Iste laudantium nihil, harum, ab cum doloribus temporibus minima dicta impedit accusamus maxime corporis aspernatur similique voluptates eos quasi porro ea quis perspiciatis nobis quibusdam possimus delectus? Rem, velit unde!
    Vero harum ea voluptatem? Iusto eos, numquam nobis, ut possimus hic atque veniam nemo laboriosam corporis, neque deleniti distinctio placeat ab quam! Voluptate assumenda error quibusdam sunt eligendi iure sed.
    Ab blanditiis quod quaerat delectus optio soluta doloribus explicabo suscipit, deleniti voluptates similique sunt dolores in, itaque ullam nihil, ea dignissimos iste nostrum ipsum voluptas maxime. Molestias voluptates nisi incidunt?
    Incidunt aspernatur consequatur illo ratione reprehenderit recusandae dolorem similique optio, accusamus culpa consectetur libero quae deserunt tempore laudantium iusto ex debitis. Explicabo inventore, optio architecto reprehenderit voluptatem natus nobis commodi.
    Beatae explicabo voluptas quam molestias quisquam quas minus consequatur at iusto! Nostrum deleniti similique nobis illo omnis reprehenderit inventore. Illo accusantium modi reprehenderit, voluptas explicabo accusamus quos neque omnis unde.
    Quidem omnis ut nulla, eum saepe debitis possimus esse architecto odit temporibus, reprehenderit obcaecati quia harum animi? Mollitia fugit ipsum repudiandae! Ex vero placeat a tempore est perferendis quam exercitationem.
    Natus laudantium deserunt, itaque ratione quaerat unde possimus aut dolor eaque voluptas hic saepe sint omnis quia, necessitatibus ipsam quos vel et exercitationem eius culpa fugiat quae? Sapiente, unde vero?
    Officia expedita corrupti alias eveniet non ducimus voluptas est excepturi recusandae molestiae eos necessitatibus, maiores consequuntur quam, enim, obcaecati suscipit sunt impedit aspernatur. Rerum eligendi vitae quo reiciendis quaerat consequatur.`,
    author: "Budi",
  },
  {
    id: 1,
    title: "6 konsep utama untuk menguasai Digital Marketing!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo itaque, alias error aliquam veniam eligendi necessitatibus voluptate voluptatibus nobis ratione modi eos aut iusto tenetur asperiores laboriosam eaque debitis cum.
    Consectetur distinctio deleniti fugiat, vel minus, voluptatem dolorem laborum quaerat et, fuga a? Eligendi facere aliquam praesentium numquam vitae doloribus fugit nesciunt possimus unde nemo assumenda, ipsum dolore, aspernatur quod.
    Iste laudantium nihil, harum, ab cum doloribus temporibus minima dicta impedit accusamus maxime corporis aspernatur similique voluptates eos quasi porro ea quis perspiciatis nobis quibusdam possimus delectus? Rem, velit unde!
    Vero harum ea voluptatem? Iusto eos, numquam nobis, ut possimus hic atque veniam nemo laboriosam corporis, neque deleniti distinctio placeat ab quam! Voluptate assumenda error quibusdam sunt eligendi iure sed.
    Ab blanditiis quod quaerat delectus optio soluta doloribus explicabo suscipit, deleniti voluptates similique sunt dolores in, itaque ullam nihil, ea dignissimos iste nostrum ipsum voluptas maxime. Molestias voluptates nisi incidunt?
    Incidunt aspernatur consequatur illo ratione reprehenderit recusandae dolorem similique optio, accusamus culpa consectetur libero quae deserunt tempore laudantium iusto ex debitis. Explicabo inventore, optio architecto reprehenderit voluptatem natus nobis commodi.
    Beatae explicabo voluptas quam molestias quisquam quas minus consequatur at iusto! Nostrum deleniti similique nobis illo omnis reprehenderit inventore. Illo accusantium modi reprehenderit, voluptas explicabo accusamus quos neque omnis unde.
    Quidem omnis ut nulla, eum saepe debitis possimus esse architecto odit temporibus, reprehenderit obcaecati quia harum animi? Mollitia fugit ipsum repudiandae! Ex vero placeat a tempore est perferendis quam exercitationem.
    Natus laudantium deserunt, itaque ratione quaerat unde possimus aut dolor eaque voluptas hic saepe sint omnis quia, necessitatibus ipsam quos vel et exercitationem eius culpa fugiat quae? Sapiente, unde vero?
    Officia expedita corrupti alias eveniet non ducimus voluptas est excepturi recusandae molestiae eos necessitatibus, maiores consequuntur quam, enim, obcaecati suscipit sunt impedit aspernatur. Rerum eligendi vitae quo reiciendis quaerat consequatur.`,
    author: "Budi",
  },
  {
    id: 1,
    title: "6 konsep utama untuk menguasai Digital Marketing!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo itaque, alias error aliquam veniam eligendi necessitatibus voluptate voluptatibus nobis ratione modi eos aut iusto tenetur asperiores laboriosam eaque debitis cum.
    Consectetur distinctio deleniti fugiat, vel minus, voluptatem dolorem laborum quaerat et, fuga a? Eligendi facere aliquam praesentium numquam vitae doloribus fugit nesciunt possimus unde nemo assumenda, ipsum dolore, aspernatur quod.
    Iste laudantium nihil, harum, ab cum doloribus temporibus minima dicta impedit accusamus maxime corporis aspernatur similique voluptates eos quasi porro ea quis perspiciatis nobis quibusdam possimus delectus? Rem, velit unde!
    Vero harum ea voluptatem? Iusto eos, numquam nobis, ut possimus hic atque veniam nemo laboriosam corporis, neque deleniti distinctio placeat ab quam! Voluptate assumenda error quibusdam sunt eligendi iure sed.
    Ab blanditiis quod quaerat delectus optio soluta doloribus explicabo suscipit, deleniti voluptates similique sunt dolores in, itaque ullam nihil, ea dignissimos iste nostrum ipsum voluptas maxime. Molestias voluptates nisi incidunt?
    Incidunt aspernatur consequatur illo ratione reprehenderit recusandae dolorem similique optio, accusamus culpa consectetur libero quae deserunt tempore laudantium iusto ex debitis. Explicabo inventore, optio architecto reprehenderit voluptatem natus nobis commodi.
    Beatae explicabo voluptas quam molestias quisquam quas minus consequatur at iusto! Nostrum deleniti similique nobis illo omnis reprehenderit inventore. Illo accusantium modi reprehenderit, voluptas explicabo accusamus quos neque omnis unde.
    Quidem omnis ut nulla, eum saepe debitis possimus esse architecto odit temporibus, reprehenderit obcaecati quia harum animi? Mollitia fugit ipsum repudiandae! Ex vero placeat a tempore est perferendis quam exercitationem.
    Natus laudantium deserunt, itaque ratione quaerat unde possimus aut dolor eaque voluptas hic saepe sint omnis quia, necessitatibus ipsam quos vel et exercitationem eius culpa fugiat quae? Sapiente, unde vero?
    Officia expedita corrupti alias eveniet non ducimus voluptas est excepturi recusandae molestiae eos necessitatibus, maiores consequuntur quam, enim, obcaecati suscipit sunt impedit aspernatur. Rerum eligendi vitae quo reiciendis quaerat consequatur.`,
    author: "Budi",
  },
  {
    id: 1,
    title: "6 konsep utama untuk menguasai Digital Marketing!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo itaque, alias error aliquam veniam eligendi necessitatibus voluptate voluptatibus nobis ratione modi eos aut iusto tenetur asperiores laboriosam eaque debitis cum.
    Consectetur distinctio deleniti fugiat, vel minus, voluptatem dolorem laborum quaerat et, fuga a? Eligendi facere aliquam praesentium numquam vitae doloribus fugit nesciunt possimus unde nemo assumenda, ipsum dolore, aspernatur quod.
    Iste laudantium nihil, harum, ab cum doloribus temporibus minima dicta impedit accusamus maxime corporis aspernatur similique voluptates eos quasi porro ea quis perspiciatis nobis quibusdam possimus delectus? Rem, velit unde!
    Vero harum ea voluptatem? Iusto eos, numquam nobis, ut possimus hic atque veniam nemo laboriosam corporis, neque deleniti distinctio placeat ab quam! Voluptate assumenda error quibusdam sunt eligendi iure sed.
    Ab blanditiis quod quaerat delectus optio soluta doloribus explicabo suscipit, deleniti voluptates similique sunt dolores in, itaque ullam nihil, ea dignissimos iste nostrum ipsum voluptas maxime. Molestias voluptates nisi incidunt?
    Incidunt aspernatur consequatur illo ratione reprehenderit recusandae dolorem similique optio, accusamus culpa consectetur libero quae deserunt tempore laudantium iusto ex debitis. Explicabo inventore, optio architecto reprehenderit voluptatem natus nobis commodi.
    Beatae explicabo voluptas quam molestias quisquam quas minus consequatur at iusto! Nostrum deleniti similique nobis illo omnis reprehenderit inventore. Illo accusantium modi reprehenderit, voluptas explicabo accusamus quos neque omnis unde.
    Quidem omnis ut nulla, eum saepe debitis possimus esse architecto odit temporibus, reprehenderit obcaecati quia harum animi? Mollitia fugit ipsum repudiandae! Ex vero placeat a tempore est perferendis quam exercitationem.
    Natus laudantium deserunt, itaque ratione quaerat unde possimus aut dolor eaque voluptas hic saepe sint omnis quia, necessitatibus ipsam quos vel et exercitationem eius culpa fugiat quae? Sapiente, unde vero?
    Officia expedita corrupti alias eveniet non ducimus voluptas est excepturi recusandae molestiae eos necessitatibus, maiores consequuntur quam, enim, obcaecati suscipit sunt impedit aspernatur. Rerum eligendi vitae quo reiciendis quaerat consequatur.`,
    author: "Budi",
  },
  {
    id: 1,
    title: "6 konsep utama untuk menguasai Digital Marketing!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo itaque, alias error aliquam veniam eligendi necessitatibus voluptate voluptatibus nobis ratione modi eos aut iusto tenetur asperiores laboriosam eaque debitis cum.
    Consectetur distinctio deleniti fugiat, vel minus, voluptatem dolorem laborum quaerat et, fuga a? Eligendi facere aliquam praesentium numquam vitae doloribus fugit nesciunt possimus unde nemo assumenda, ipsum dolore, aspernatur quod.
    Iste laudantium nihil, harum, ab cum doloribus temporibus minima dicta impedit accusamus maxime corporis aspernatur similique voluptates eos quasi porro ea quis perspiciatis nobis quibusdam possimus delectus? Rem, velit unde!
    Vero harum ea voluptatem? Iusto eos, numquam nobis, ut possimus hic atque veniam nemo laboriosam corporis, neque deleniti distinctio placeat ab quam! Voluptate assumenda error quibusdam sunt eligendi iure sed.
    Ab blanditiis quod quaerat delectus optio soluta doloribus explicabo suscipit, deleniti voluptates similique sunt dolores in, itaque ullam nihil, ea dignissimos iste nostrum ipsum voluptas maxime. Molestias voluptates nisi incidunt?
    Incidunt aspernatur consequatur illo ratione reprehenderit recusandae dolorem similique optio, accusamus culpa consectetur libero quae deserunt tempore laudantium iusto ex debitis. Explicabo inventore, optio architecto reprehenderit voluptatem natus nobis commodi.
    Beatae explicabo voluptas quam molestias quisquam quas minus consequatur at iusto! Nostrum deleniti similique nobis illo omnis reprehenderit inventore. Illo accusantium modi reprehenderit, voluptas explicabo accusamus quos neque omnis unde.
    Quidem omnis ut nulla, eum saepe debitis possimus esse architecto odit temporibus, reprehenderit obcaecati quia harum animi? Mollitia fugit ipsum repudiandae! Ex vero placeat a tempore est perferendis quam exercitationem.
    Natus laudantium deserunt, itaque ratione quaerat unde possimus aut dolor eaque voluptas hic saepe sint omnis quia, necessitatibus ipsam quos vel et exercitationem eius culpa fugiat quae? Sapiente, unde vero?
    Officia expedita corrupti alias eveniet non ducimus voluptas est excepturi recusandae molestiae eos necessitatibus, maiores consequuntur quam, enim, obcaecati suscipit sunt impedit aspernatur. Rerum eligendi vitae quo reiciendis quaerat consequatur.`,
    author: "Budi",
  },
  {
    id: 1,
    title: "6 konsep utama untuk menguasai Digital Marketing!",
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo itaque, alias error aliquam veniam eligendi necessitatibus voluptate voluptatibus nobis ratione modi eos aut iusto tenetur asperiores laboriosam eaque debitis cum.
    Consectetur distinctio deleniti fugiat, vel minus, voluptatem dolorem laborum quaerat et, fuga a? Eligendi facere aliquam praesentium numquam vitae doloribus fugit nesciunt possimus unde nemo assumenda, ipsum dolore, aspernatur quod.
    Iste laudantium nihil, harum, ab cum doloribus temporibus minima dicta impedit accusamus maxime corporis aspernatur similique voluptates eos quasi porro ea quis perspiciatis nobis quibusdam possimus delectus? Rem, velit unde!
    Vero harum ea voluptatem? Iusto eos, numquam nobis, ut possimus hic atque veniam nemo laboriosam corporis, neque deleniti distinctio placeat ab quam! Voluptate assumenda error quibusdam sunt eligendi iure sed.
    Ab blanditiis quod quaerat delectus optio soluta doloribus explicabo suscipit, deleniti voluptates similique sunt dolores in, itaque ullam nihil, ea dignissimos iste nostrum ipsum voluptas maxime. Molestias voluptates nisi incidunt?
    Incidunt aspernatur consequatur illo ratione reprehenderit recusandae dolorem similique optio, accusamus culpa consectetur libero quae deserunt tempore laudantium iusto ex debitis. Explicabo inventore, optio architecto reprehenderit voluptatem natus nobis commodi.
    Beatae explicabo voluptas quam molestias quisquam quas minus consequatur at iusto! Nostrum deleniti similique nobis illo omnis reprehenderit inventore. Illo accusantium modi reprehenderit, voluptas explicabo accusamus quos neque omnis unde.
    Quidem omnis ut nulla, eum saepe debitis possimus esse architecto odit temporibus, reprehenderit obcaecati quia harum animi? Mollitia fugit ipsum repudiandae! Ex vero placeat a tempore est perferendis quam exercitationem.
    Natus laudantium deserunt, itaque ratione quaerat unde possimus aut dolor eaque voluptas hic saepe sint omnis quia, necessitatibus ipsam quos vel et exercitationem eius culpa fugiat quae? Sapiente, unde vero?
    Officia expedita corrupti alias eveniet non ducimus voluptas est excepturi recusandae molestiae eos necessitatibus, maiores consequuntur quam, enim, obcaecati suscipit sunt impedit aspernatur. Rerum eligendi vitae quo reiciendis quaerat consequatur.`,
    author: "Budi",
  },
];

export const Dashboard = () => {
  const [drawer, setDrawer] = useState<"edit" | "detail" | "none">("none");
  const [modal, setModal] = useState<"delete" | "none">("none");
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  return (
    <>
      <Stack>
        <Flex justify="space-between" align="center">
          <Title>Dashboard</Title>
          <Button>Add Post</Button>
        </Flex>
        <Stack>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Id</Table.Th>
                <Table.Th>Title</Table.Th>
                <Table.Th>Content</Table.Th>
                <Table.Th>Author</Table.Th>
                <Table.Th></Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {posts.map((post) => (
                <Table.Tr key={post.id}>
                  <Table.Td w="10px">{post.id}</Table.Td>
                  <Table.Td w="400px">{post.title}</Table.Td>
                  <Table.Td>
                    <Flex gap="xs" align="center">
                      <Text size="sm" w="300px" truncate="end">
                        {post.content}
                      </Text>
                      <Button
                        size="compact-xs"
                        variant="subtle"
                        color="dark"
                        onClick={() => {
                          setSelectedPostId(post.id);
                          setDrawer("detail");
                        }}
                      >
                        See more
                      </Button>
                    </Flex>
                  </Table.Td>
                  <Table.Td>{post.author}</Table.Td>
                  <Table.Td>
                    <Flex>
                      <Button
                        size="xs"
                        variant="subtle"
                        color="yellow"
                        onClick={() => {
                          setSelectedPostId(post.id);
                          setDrawer("edit");
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        size="xs"
                        variant="subtle"
                        color="red"
                        onClick={() => {
                          setSelectedPostId(post.id);
                          setModal("delete");
                        }}
                      >
                        Delete
                      </Button>
                    </Flex>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
          <Pagination total={10} />
        </Stack>
      </Stack>
      <Modal
        opened={modal === "delete"}
        onClose={() => setModal("none")}
        title="Are you sure you want to delete the post?"
      >
        <Stack>
          <Text>{`Post to be deleted: ${posts.find((p) => p.id === selectedPostId)?.title}`}</Text>
          <Flex gap="sm">
            <Button flex="1" variant="outline" color="dark">
              Cancel
            </Button>
            <Button flex="1" variant="outline" color="red">
              Delete
            </Button>
          </Flex>
        </Stack>
      </Modal>
      <Drawer
        title="Edit Post"
        opened={drawer === "edit"}
        onClose={() => setDrawer("none")}
      ></Drawer>
      <Drawer
        title="Detail Content"
        opened={drawer === "detail"}
        onClose={() => setDrawer("none")}
      ></Drawer>
    </>
  );
};
