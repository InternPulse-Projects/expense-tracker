import { Box, Flex, Heading } from "@chakra-ui/react";
import { quickActions } from "../DashboardSection/dashboardData";

function QuickActions() {
  return (
    <Box bg="white" w="full" rounded="lg" p={3} shadow="md">
      <Heading
        as="h1"
        style={{ fontFamily: "'Satoshi'", fontWeight: "bold" }}
        fontSize="lg"
      >
        Quick Actions
      </Heading>

      <Flex
        as="section"
        py="4"
        w="full"
        direction={{ base: "column", lg: "row" }}
        justify="space-between"
        gap="4"
      >
        {quickActions.map(({ title, color, background }) => (
          <Box
            key={title}
            bg={background}
            w="full"
            color={color}
            p="4"
            textAlign="center"
            rounded="md"
            cursor="pointer"
          >
            {title}
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default QuickActions;
