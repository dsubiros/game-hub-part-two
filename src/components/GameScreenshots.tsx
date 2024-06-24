import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) return null;

  return (
    <SimpleGrid
      spacing={2}
      padding={5}
    //   columns={{md: 1, lg: 2}}
      columns={{base: 1, md: 2}}
    >
      {data?.results
        ?.filter((x) => !x.hidden)
        .map((x) => (
          <Image key={x.image} src={x.image} />
        ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
