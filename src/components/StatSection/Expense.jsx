import { Box, Progress, Text } from "@chakra-ui/react";

function Expense({ title, data }) {
  return (
    <Box>
      {title === "Expense Category" &&
        data.map(({ type, amount, prog, color }) => (
          <Box key={type} py="1.5">
            <Box display="flex" justifyContent="space-between">
              <Text>{type}</Text>
              <Text>{amount}</Text>
            </Box>
            <Progress
              value={prog}
              max={30000}
              aria-label="Loading progress"
              colorScheme={color}
              rounded="full"
            />
          </Box>
        ))}
    </Box>
  );
}

export default Expense;
