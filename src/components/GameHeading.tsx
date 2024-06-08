import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGenres from '../hooks/useGenres'
import usePlatforms from '../hooks/usePlatforms'

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery: {platformId, genreId} }: Props) => {
  // const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
  // const heading = `${gameQuery.platformId || ''} ${gameQuery.genreId || ''} Games`;
  
  const {data: platforms} = usePlatforms();
  const {data: genres} = useGenres();

  const platform = platforms.results.find(p => p.id === platformId);
  const genre = genres.results.find(p => p.id === genreId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default GameHeading