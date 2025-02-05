import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";
import Header from "../components/HeaderSection/Header";

function PageLayout() {
  return (
    <Box
      as="section"
      border="1px"
      w={["", "30em", "48em", "62em", "80em", "96em"]}
      m="auto"
    >
      <Header />
      <Outlet />
    </Box>
  );
}

export default PageLayout;
