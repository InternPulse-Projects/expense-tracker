import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  Text,
  Heading,
  Hide,
  Image,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router";
import { route } from "./route";
import { BellIcon } from "@chakra-ui/icons";

function Header() {
  const location = useLocation();
  const isActive = location.pathname;

  console.log(isActive);

  return (
    <Box as="section" px={[5, 5, 5]} py={2}>
      <Flex as="header" direction="row" justify="space-between" w="full">
        <Box display="flex" direction="row" alignItems="baseline" gap={2}>
          <Heading
            as="h1"
            style={{ fontFamily: "'Satoshi'", fontWeight: "bold" }}
            fontSize={["3xl", "3xl", "4xl"]}
          >
            ExpenseTracker
          </Heading>
          <Hide below="sm">
            <HStack spacing={[2, 3, 5]} key={route.label}>
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
          alignItems="baseline"
        >
          <BellIcon w={8} h={6} color="gray.500" m="auto" />
          <Image
            src="https://bit.ly/dan-abramov"
            alt="profile-image"
            boxSize="35px"
            objectFit="contain"
            rounded="full"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
