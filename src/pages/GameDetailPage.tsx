import {
  Box,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
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
      <Link to="/">Go Back</Link>

      <SimpleGrid spacing={2} padding={5} columns={{ base: 1, md: 2 }}>
        <GridItem>
          <Heading marginY={5}>{game.name}</Heading>
          <ExpandableText max={300}>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
