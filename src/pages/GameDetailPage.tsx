import { Heading, HStack, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameDetailList from "../components/GameDetailList";
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
  console.log(game);
  const {
    description_raw: text,
    name,
    genres,
    parent_platforms: platforms,
    publishers,
    metacritic
  } = game;

  return (
    <>
      <Heading>{name}</Heading>
      <ExpandableText max={300}>{text}</ExpandableText>

      <SimpleGrid
        marginTop={5}
        spacing={6}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      >
        <GameDetailList
          title="Platforms"
          items={platforms.map((x) => x.platform.name)}
        />

        <GameDetailList title="Genres" items={genres.map((x) => x.name)} />

        <GameDetailList
          title="Publishers"
          items={publishers.map((x) => x.name)}
        />
        
        <GameDetailList
          title="Meta Score"
          items={[metacritic]}
        />

      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
