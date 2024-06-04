import {
  Box,
  Button,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fetchedItemsCount =
    data?.pages.reduce((acc, page) => acc + page.results?.length ?? 0, 0) || 0;

  const loader = (
    <HStack marginY={3} spacing={4}>
      <Spinner />
      <Text>Loading more, please wait...</Text>
    </HStack>
  );

  return (
    <InfiniteScroll
      dataLength={fetchedItemsCount}
      hasMore={!!hasNextPage}
      next={fetchNextPage}
      loader={loader}
    >
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, idx) => (
          <React.Fragment key={idx}>
            {page?.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
        {/* {data?.results.map((game) => (
          <GameCardContainer key={game.id}>
          <GameCard game={game} />
          </GameCardContainer>
        ))} */}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

{
  /* <Button
        onClick={() => fetchNextPage()}
        disabled={hasNextPage}
        marginY={5}
      >
        {isFetchingNextPage ? "Loading..." : "Load more"}
      </Button> */
}

export default GameGrid;
