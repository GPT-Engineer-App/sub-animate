import React, { useState } from "react";
import { Container, VStack, Text, Button, Input, Box, Select, IconButton, HStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaStop } from "react-icons/fa";

const Index = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [subtitles, setSubtitles] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animation, setAnimation] = useState("none");
  const [fontStyle, setFontStyle] = useState("Arial");

  const handleGenerateSubtitles = () => {
    // Placeholder for subtitle generation logic
    setSubtitles([
      { time: "00:00:01", text: "Welcome to the video!" },
      { time: "00:00:05", text: "This is a subtitle generator app." },
    ]);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    setIsPlaying(false);
    // Reset video to start
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Subtitle Generator App</Text>
        <Input placeholder="Enter video URL" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
        <Button onClick={handleGenerateSubtitles}>Generate Subtitles</Button>
        <Box width="100%" height="400px" bg="gray.200" display="flex" justifyContent="center" alignItems="center">
          {videoUrl ? (
            <video src={videoUrl} width="100%" controls>
              Your browser does not support the video tag.
            </video>
          ) : (
            <Text>No video loaded</Text>
          )}
        </Box>
        <HStack spacing={4}>
          <IconButton aria-label="Play/Pause" icon={isPlaying ? <FaPause /> : <FaPlay />} onClick={handlePlayPause} />
          <IconButton aria-label="Stop" icon={<FaStop />} onClick={handleStop} />
        </HStack>
        <Select placeholder="Select Animation" value={animation} onChange={(e) => setAnimation(e.target.value)}>
          <option value="none">None</option>
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </Select>
        <Select placeholder="Select Font Style" value={fontStyle} onChange={(e) => setFontStyle(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </Select>
        <Box width="100%" bg="gray.100" p={4} borderRadius="md">
          {subtitles.map((subtitle, index) => (
            <Text key={index} fontFamily={fontStyle} animation={animation}>
              {subtitle.time} - {subtitle.text}
            </Text>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
