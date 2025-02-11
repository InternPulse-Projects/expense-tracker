import { Box, Stack, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router";
import Header from "../components/HeaderSection/Header";
import MobileNav from "../components/MobileNav";

function PageLayout() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function mobileNav() {
    onOpen();
  }

  return (
    <Stack
      as="section"
      direction="column"
      w={["", "", "", "62em", "80em", "96em"]}
      m="auto"
    >
      {onOpen && <MobileNav isOpen={isOpen} onClose={onClose} />}
      <Header onClick={mobileNav} />
      <Outlet />
    </Stack>
  );
}

export default PageLayout;
