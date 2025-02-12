import {
  Box,
  Link as ChakraLink,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router";
import ProfileImage from "./ProfileImage";

function MobileNav({ isOpen, onClose }) {
  const location = useLocation();
  const isActive = location.pathname;

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px" px="20" mt="6">
          <Box w="18" m="auto">
            <ProfileImage w="xs" objectFit="contain" border="1px" />
          </Box>
          <Text m="auto">NAMEISSTRING</Text>
        </DrawerHeader>
        <DrawerBody px="0">
          <Stack direction="column" px="2">
            <ChakraLink
              as={ReactRouterLink}
              to="/dashboard"
              fontSize={["sm", "md", "md"]}
              fontFamily="sans-serif"
              color="whiteAlpha.800"
              bg="blue.500"
              _hover={{
                color: isActive && "whiteAlpha",
              }}
              py="4"
              px="2"
              rounded="md"
              border={isActive && "1px"}
            >
              <Text fontSize="lg">Dashboard</Text>
            </ChakraLink>
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default MobileNav;
