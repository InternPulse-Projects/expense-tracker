import { Flex, Text } from "@chakra-ui/react";

function DashboardC() {
  return (
    <Flex as="section" direction={["column", "row", "row"]}>
      <Text>Hello</Text>
      <Text>You</Text>
      <Text>Tube</Text>
    </Flex>
  );
}

export default DashboardC;
