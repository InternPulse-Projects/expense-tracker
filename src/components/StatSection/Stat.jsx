import { Box, Flex, Progress, Stack, Text } from "@chakra-ui/react";
import { statData } from "../DashboardSection/dashboardData";
import Expense from "./Expense";
import RecentTransactions from "./RecentTransactions";

function Stat() {
  return (
    <Flex
      as="section"
      w="full"
      direction={{ base: "column", lg: "row" }}
      justify="space-between"
      gap="4"
    >
      {statData.map((stat) => (
        <Box
          display="flex"
          flexDirection="column"
          key={stat.title}
          bg="white"
          w="full"
          rounded="lg"
          p="3"
          shadow="md"
          gap="4"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Text
              style={{ fontFamily: "'Satoshi'", fontWeight: "bold" }}
              fontSize="lg"
            >
              {stat.title}
            </Text>
            {stat.title === "Recent Transactions" && (
              <Text
                color="blue"
                fontSize="xs"
                alignSelf="center"
                cursor="pointer"
              >
                View All
              </Text>
            )}
          </Box>

          <Stack
            direction="column"
            fontSize="sm"
            color="slategray"
            fontWeight="normal"
            fontFamily="sans-serif"
            mb="4"
          >
            <Expense title={stat.title} data={stat.data} />
            <RecentTransactions title={stat.title} data={stat.data} />
          </Stack>
        </Box>
      ))}
    </Flex>
  );
}

export default Stat;
