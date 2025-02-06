import { Box, Stack } from "@chakra-ui/react";
import { Outlet } from "react-router";
import Header from "../components/HeaderSection/Header";

function PageLayout() {
  return (
    <Stack
      as="section"
      direction="column"
      w={["", "30em", "48em", "62em", "80em", "96em"]}
      m="auto"
    >
      <Header />
      <Outlet />
    </Stack>
  );
}

export default PageLayout;
