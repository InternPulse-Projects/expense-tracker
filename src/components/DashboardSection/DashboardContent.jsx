import { Box, Icon, Progress, Stack, Text } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { bills } from "./dashboardData";
import { FaChartLine, FaFileInvoiceDollar, FaWallet } from "react-icons/fa6";

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
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              mb="3"
            >
              <Text
                color="gray.600"
                fontSize="sm"
                fontWeight="normal"
                fontFamily="sans-serif"
              >
                {bill.title}
              </Text>
              {bill.title === "Total Expenses" && (
                <Icon as={FaChartLine} color="blue" />
              )}
              {bill.title === "Monthly Budget" && (
                <Icon as={FaWallet} color="purple" />
              )}
              {bill.title === "Outstanding Bills" && (
                <Icon as={FaFileInvoiceDollar} color="red" />
              )}
            </Box>

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
                aria-label="Loading progress"
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
