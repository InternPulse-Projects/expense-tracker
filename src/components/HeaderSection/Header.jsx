import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  Text,
  Heading,
  Hide,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router";
import { route } from "./route";
import { BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import ProfileImage from "../ProfileImage";

function Header({ onClick }) {
  const location = useLocation();
  const isActive = location.pathname;

  console.log(isActive);

  return (
    <Box as="section" px={[5, 5, 5]} py="2">
      <Flex
        as="header"
        w="full"
        direction="row"
        justify="space-between"
        alignSelf="center"
      >
        <Box display="flex" direction="row" gap={2}>
          <HamburgerIcon
            w={8}
            h={6}
            m="auto"
            display={{ base: "block", md: "none", lg: "none" }}
            cursor="pointer"
            onClick={onClick}
          />
          <Heading
            as="h1"
            style={{ fontFamily: "'Satoshi'", fontWeight: "bold" }}
            fontSize={["3xl", "3xl", "4xl"]}
          >
            ExpenseTrack
          </Heading>
          <Hide below="md">
            <HStack spacing={[2, 3, 5]} key={route.label} alignSelf="center">
              {route.map((route) => (
                <ChakraLink
                  as={ReactRouterLink}
                  to={route.path}
                  key={route.label}
                  fontSize={["sm", "md", "md"]}
                  fontFamily="sans-serif"
                  color={isActive === route.path ? "blue.500" : "slategray"}
                  _hover={{
                    color: "blue.500",
                  }}
                >
                  {route.label}
                </ChakraLink>
              ))}
            </HStack>
          </Hide>
        </Box>

        <Box
          display="flex"
          direction="row"
          gap={2}
          alignSelf="center"
          justifySelf="center"
          alignItems="baseline"
        >
          <BellIcon w={8} h={6} color="gray.500" m="auto" cursor="pointer" />
          <ProfileImage boxSize="35" />
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
