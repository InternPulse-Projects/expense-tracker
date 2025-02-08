import { Box, Text } from "@chakra-ui/react";

function RecentTransactions({ title, data }) {
  return (
    <Box display="flex" flexDirection="column" gap="3">
      {title === "Recent Transactions" &&
        data.map(({ type, amount, date }) => (
          <Box
            key={type}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            bg="#F9FAFB"
            px="4"
            py="2"
          >
            <Box>
              <Text>{type}</Text>
              <Text fontSize="x-small">{date}</Text>
            </Box>
            <Text alignSelf="center">{amount}</Text>
          </Box>
        ))}
    </Box>
  );
}

export default RecentTransactions;
