import { Box, List, ListItem, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";

interface Props {
  title: string;
  items: (string | number)[];
}

const GameDetailList = ({ title, items }: Props) => {
  // isNan
  return (
    <>
      <Box>
        <Text fontSize={20} fontWeight="bold" color="gray.500">
          {title}
        </Text>

        <List marginTop={1}>
          {items.map((item) =>
            isNaN(item as number) ? (
              <ListItem>
                <Text size="20px">{item}</Text>
              </ListItem>
            ) : (
              <CriticScore score={item as number} />
            )
          )}
        </List>
      </Box>
    </>
  );
};

export default GameDetailList;
