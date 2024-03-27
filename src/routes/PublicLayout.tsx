import { Center, Container } from "@mantine/core";
import { Outlet } from "react-router-dom";

import classes from "./PublicLayout.module.css";
const PublicLayout = () => {
  return (
    <Container pt="xl">
      <Center>
        <div className={classes.innerContainer}>
          <Outlet />
        </div>
      </Center>
    </Container>
  );
};

export default PublicLayout;
