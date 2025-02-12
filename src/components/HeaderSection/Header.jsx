import { Box, Flex, Link as ChakraLink, Heading, Hide } from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation } from "react-router";
import { BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import ProfileImage from "../ProfileImage";

function Header({ onClick }) {
  const location = useLocation();
  const isActive = location.pathname;

  return (
    <Box as="section" px={[5, 5, 5]} py="2">
      <Flex
        as="header"
        w="full"
        direction="row"
        justify="space-between"
        alignSelf="center"
      >
        <Box w={{ lg: "80" }} display="flex" direction="row" gap={2}>
          <HamburgerIcon
            w={8}
            h={6}
            m="auto"
            display={{ base: "block", md: "none", lg: "none" }}
            cursor="pointer"
            onClick={onClick}
          />
          <Heading
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: "2rem",
              fontWeight: "700",
            }}
          >
            ExpenseTrack
          </Heading>
          <Hide below="md">
            <Box m="auto">
              <ChakraLink
                as={ReactRouterLink}
                mt="8"
                to="/dashboard"
                fontSize={["sm", "md", "md"]}
                fontFamily="sans-serif"
                color={isActive && "blue.500"}
                _hover={{
                  color: "blue.500",
                }}
              >
                Dashboard
              </ChakraLink>
              {isActive && (
                <Box
                  w="8"
                  m="auto"
                  borderBottom="2px"
                  borderBottomColor="blue.500"
                ></Box>
              )}
            </Box>
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
