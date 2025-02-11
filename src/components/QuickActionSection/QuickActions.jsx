import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { quickActions } from "../DashboardSection/dashboardData";
import { AddIcon, SettingsIcon } from "@chakra-ui/icons";
import { FaFileInvoice, FaRegChartBar } from "react-icons/fa6";

function QuickActions() {
  return (
    <Box bg="white" w="full" rounded="lg" p={3} shadow="md" mb="4">
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
            w="full"
            p="4"
            display="flex"
            flexDirection="row"
            bg={background}
            color={color}
            rounded="md"
            cursor="pointer"
          >
            <Box
              w="full"
              display="flex"
              flexDirection="row"
              alignSelf="center"
              gap="1"
              justifyContent="center"
              alignItems="center"
            >
              {title === "Add expense" && <AddIcon color="blue" w={3} h={3} />}
              {title === "Create Invoice" && (
                <Icon as={FaFileInvoice} color="purple" w={3} h={3} />
              )}
              {title === "Generate Report" && (
                <Icon as={FaRegChartBar} color="green" w={3} h={3} />
              )}
              {title === "Settings" && (
                <SettingsIcon color="orange" w={3} h={3} />
              )}
              <Text fontWeight="normal" fontFamily="sans-serif" fontSize="sm">
                {title}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export default QuickActions;
