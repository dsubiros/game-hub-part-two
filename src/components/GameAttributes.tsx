import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  const {
    genres,
    parent_platforms: platforms,
    publishers,
    metacritic,
  } = game;

  return (
    <SimpleGrid as="dl" marginTop={5} spacing={6} columns={2}>
      <DefinitionItem term="Platforms">
        {platforms?.map(({ platform: { id, name } }) => (
          <Text key={id}>{name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Metascore">
        <CriticScore score={metacritic} />
      </DefinitionItem>

      <DefinitionItem term="Genres">
        {genres?.map(({ id, name }) => (
          <Text key={id}>{name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Publishers">
        {publishers?.map(({ id, name }) => (
          <Text key={id}>{name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
