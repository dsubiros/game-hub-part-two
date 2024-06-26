import { Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useGameMovies";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video poster={first.preview} src={first.data[480]} controls={true} />
  ) : null;
};

export default GameTrailer;
