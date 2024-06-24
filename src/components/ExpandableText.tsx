import { Button, Text } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";

interface Props {
  children: string;
  max: number;
}

const ExpandableText = ({ children, max }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;
  
  if (children.length <= max) return <Text>{children}</Text>;

  // const isLongText = text.length > max;
  // const aText = expanded || !isLongText ? text : text.substring(0, max);

  const summary = expanded ? children : children.substring(0, max) + "...";

  return (
    <>
      {summary}
      {
        <Button
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          marginLeft={1}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      }
    </>
  );
};

export default ExpandableText;
