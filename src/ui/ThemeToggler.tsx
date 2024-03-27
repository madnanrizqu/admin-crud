import { ActionIcon, useMantineColorScheme } from "@mantine/core";

import { MoonIcon, SunIcon } from "./icons";

export const ThemeToggler = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon variant="outline" onClick={toggleColorScheme}>
      {colorScheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </ActionIcon>
  );
};
