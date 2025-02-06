import { Box, Flex } from "@chakra-ui/react";
import DashboardC from "../components/DashboardSection/DashboardC";

function Dashboard() {
  return (
    <Box as="section" h="100dvh" bg="#F9FAFB" w="full" px={[2, 4, 10]}>
      <DashboardC />
    </Box>
  );
}

export default Dashboard;
