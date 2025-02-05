import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  Text,
  Heading,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router";
import { route } from "./route";

function Header() {
  const location = useLocation();
  const isActive = location.pathname;

  console.log(isActive);

  return (
    <Box as="section" m="auto" px={[5, 5, 5]} py={2}>
      <Flex as="header" direction="row" justify="space-between" w="full">
        <Box display="flex" direction="row" alignItems="baseline" gap={2}>
          <Heading
            as="h1"
            style={{ fontFamily: "'Satoshi'", fontWeight: "bold" }}
            fontSize={["3xl", "3xl", "4xl"]}
          >
            ExpenseTracker
          </Heading>

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
        </Box>

        <Box>
          <Text fontSize={["lg", "lg", "3xl"]}>Hello World</Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default Header;
