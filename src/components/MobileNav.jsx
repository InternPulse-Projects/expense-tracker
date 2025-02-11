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
import { route } from "./HeaderSection/route";
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
            {route.map((route) => (
              <ChakraLink
                as={ReactRouterLink}
                to={route.path}
                key={route.label}
                fontSize={["sm", "md", "md"]}
                fontFamily="sans-serif"
                color={isActive === route.path ? "whiteAlpha.800" : ""}
                bg={isActive === route.path ? "blue.500" : ""}
                _hover={{
                  color: isActive === route.path ? "whiteAlpha" : "blue.500",
                }}
                py="4"
                px="2"
                rounded="md"
                border={isActive === route.path ? "1px" : ""}
              >
                <Text fontSize="lg">{route.label}</Text>
              </ChakraLink>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default MobileNav;
