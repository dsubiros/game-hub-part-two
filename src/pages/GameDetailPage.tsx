import {
  Box,
  Button,
  Heading,
  HStack,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
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
  const { description_raw: text, name } = game;

  return (
    <>
      <Heading>{name}</Heading>
      <ExpandableText max={300}>
        {text}
      </ExpandableText>
    </>
  );
};

export default GameDetailPage;
