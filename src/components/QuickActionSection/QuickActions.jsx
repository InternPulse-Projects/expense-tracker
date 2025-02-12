import { Box, Flex, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import { quickActions } from "../DashboardSection/dashboardData";
import { AddIcon, SettingsIcon } from "@chakra-ui/icons";
import { FaFileInvoice, FaRegChartBar } from "react-icons/fa6";

function QuickActions() {
  return (
    <Box bg="white" w="full" rounded="lg" p={3} shadow="md" mb="4">
      <Heading
        as="h1"
        style={{ fontFamily: "Satoshi, sans-serif", fontWeight: "bold" }}
        fontSize="lg"
      >
        Quick Actions
      </Heading>

      <Box
        as="section"
        display={{ base: "grid", md: "grid", lg: "flex" }}
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        flexDirection={{ lg: "row" }}
        py="4"
        w="full"
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
              w="32"
              m="auto"
              display="flex"
              flexDirection="row"
              alignSelf="center"
              justifySelf="center"
              alignItems="center"
              gap="1"
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
              <Text
                w="full"
                fontWeight="normal"
                fontFamily="sans-serif"
                fontSize="sm"
              >
                {title}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default QuickActions;
