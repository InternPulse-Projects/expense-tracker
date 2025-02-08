import { Box, Progress, Stack, Text } from "@chakra-ui/react";
import { bills } from "./dashboardData";
import { ArrowUpIcon } from "@chakra-ui/icons";

function DashboardContent({ children }) {
  return (
    <Box display="flex" flexDirection="column" gap="4">
      <Stack direction={["column", "row", "row"]} spacing="4">
        {bills.map((bill) => (
          <Box
            key={bill.id}
            bg="white"
            w="full"
            rounded="lg"
            p={3}
            mt={{ md: "4", lg: "4" }}
            shadow="md"
          >
            <Text
              color="slategray"
              fontSize="sm"
              fontWeight="normal"
              fontFamily="sans-serif"
              py="4"
            >
              {bill.title}
            </Text>

            <Text as="h1" fontSize={["xl", "xl", "3xl"]} fontWeight="bold">
              {bill.amount}
            </Text>

            <Text
              color={bill.color === "green" ? "green.500" : "red.500"}
              fontSize="xs"
              fontWeight="semibold"
            >
              {bill.color === "green" && <ArrowUpIcon color="green.500" />}
              {bill.stat}
            </Text>

            {bill.title === "Monthly Budget" && (
              <Progress
                value={80}
                max={100}
                colorScheme="purple"
                rounded="full"
                mb="4"
              />
            )}
          </Box>
        ))}
      </Stack>
      {children}
    </Box>
  );
}

export default DashboardContent;
