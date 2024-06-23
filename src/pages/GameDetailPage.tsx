import { Box, Heading, HStack, Spinner, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  console.log(slug);

  // if (!slug) throw new Error("Oops: Game not found");
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading)
    return (
      <HStack marginY={5} spacing={5}>
        <Spinner />
        <Text>Loading...</Text>
      </HStack>
    );

  if (error || !game) throw error;
  console.log(game);
  const { description_raw, name } = game;

  return (
    <>
      {/* <Heading fontSize="6xl">{name}</Heading> */}
      <Heading>{name}</Heading> 
      <Text>{description_raw}</Text>
    </>
  );
  // return (
  //   <VStack padding={5} spacing={5} alignItems="start">
  //     <Heading fontSize="6xl">{name}</Heading>
  //     <Text>{description_raw}</Text>
  //   </VStack>
  // );
};

export default GameDetailPage;
