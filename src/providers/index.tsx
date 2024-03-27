import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { theme } from "./mantine";
import RootWrapper, { Children } from "./reactRouterDom";
export const Provider = ({ children }: { children: Children }) => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <Notifications />
      {/* children must be a react router root */}
      <RootWrapper>{children}</RootWrapper>
    </MantineProvider>
  );
};
