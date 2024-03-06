import React, { useState } from "react";
import { Box, Heading, Link, Text, Flex, Spacer, VStack, HStack, IconButton } from "@chakra-ui/react";
import { FaHeart, FaComment } from "react-icons/fa";

const stories = [
  {
    id: 1,
    title: "Show HN: My New Project",
    url: "https://example.com",
    points: 42,
    author: "johndoe",
    numComments: 5,
  },
  {
    id: 2,
    title: "Ask HN: How to Learn React?",
    url: "https://example.com",
    points: 28,
    author: "janedoe",
    numComments: 12,
  },
  // Add more sample stories...
];

const Index = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (storyId) => {
    if (favorites.includes(storyId)) {
      setFavorites(favorites.filter((id) => id !== storyId));
    } else {
      setFavorites([...favorites, storyId]);
    }
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={4}>
      <Flex alignItems="center" marginBottom={4}>
        <Heading size="xl" color="orange.500">
          Hacker News
        </Heading>
        <Spacer />
        <Link href="#" fontWeight="bold">
          new
        </Link>{" "}
        |{" "}
        <Link href="#" fontWeight="bold">
          comments
        </Link>{" "}
        |{" "}
        <Link href="#" fontWeight="bold">
          show
        </Link>{" "}
        |{" "}
        <Link href="#" fontWeight="bold">
          ask
        </Link>{" "}
        |{" "}
        <Link href="#" fontWeight="bold">
          jobs
        </Link>
      </Flex>

      <VStack spacing={4} align="stretch">
        {stories.map((story) => (
          <Box key={story.id} borderWidth={1} borderRadius="md" padding={4}>
            <Flex alignItems="baseline">
              <Heading size="md">
                <Link href={story.url}>{story.title}</Link>
              </Heading>
              <Spacer />
              <Text fontSize="sm" color="gray.500">
                {story.points} points by {story.author}
              </Text>
            </Flex>
            <HStack spacing={4} marginTop={2}>
              <IconButton icon={<FaHeart />} variant="ghost" colorScheme={favorites.includes(story.id) ? "red" : "gray"} onClick={() => toggleFavorite(story.id)} size="sm" />
              <Link href="#" fontSize="sm">
                <HStack>
                  <FaComment />
                  <Text>{story.numComments} comments</Text>
                </HStack>
              </Link>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
