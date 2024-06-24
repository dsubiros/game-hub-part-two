import { Heading, HStack, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  console.log(slug);

  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading)
    return (
      <HStack marginY={5} spacing={5}>
        <Spinner />
        <Text>Loading...</Text>
      </HStack>
    );

  if (error || !game) throw error;
   
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText max={300}>{game.description_raw}</ExpandableText>
      <GameAttributes game={game}/>
    </>
  );
};

export default GameDetailPage;
