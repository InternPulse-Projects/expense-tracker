import { Box, Flex } from "@chakra-ui/react";
import DashboardContent from "../components/DashboardSection/DashboardContent";
import Stat from "../components/StatSection/Stat";
import QuickActions from "../components/QuickActionSection/QuickActions";

function Dashboard() {
  return (
    <Box
      as="section"
      h="100dvh"
      bg="#F9FAFB"
      w="full"
      px={[2, 4, 10]}
      pt={{ base: "4" }}
    >
      <DashboardContent>
        <Stat />
        <QuickActions />
      </DashboardContent>
    </Box>
  );
}

export default Dashboard;
