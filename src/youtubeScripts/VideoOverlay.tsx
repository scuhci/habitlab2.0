import { FunctionComponent } from "react";
import { formatTime, once_available } from "../utils/frontend-utils";
import { ChakraProvider, Heading, Box, Text, Button } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { getFromStorage } from "../utils/useChromeStorage";

interface VideoOverlayProps {
    length: string;
}

const VideoOverlay1: FunctionComponent<VideoOverlayProps> = ({ length }) => {
    return (
        <ChakraProvider>
            <Box
                position="fixed"
                top={0}
                left={0}
                right={0}
                bottom={0}
                zIndex="99999"
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={playVideo}
                cursor="pointer"
                bg="rgba(0, 0, 0, 0.7)"
            >
                <Heading
                    as="h2"
                    size="2xl"
                    fontWeight="bold"
                    color="white"
                    textAlign="center"
                >
                    Video is {length} seconds long. You sure you want to watch it?
                </Heading>
            </Box>
        </ChakraProvider>
    );
};

const VideoOverlay2: FunctionComponent<VideoOverlayProps> = ({ length }) => {
    return (
        <ChakraProvider>
            <Box
                position="fixed"
                top={0}
                left={0}
                right={0}
                bottom={0}
                zIndex="99999"
                display="flex"
                justifyContent="center"
                alignItems="center"
                onClick={playVideo}
                cursor="pointer"
                bg="rgba(0, 0, 0, 0.7)"
            >
                <Box textAlign="center" py={10} px={6}>
                    <Heading
                        display="inline-block"
                        as="h2"
                        size="2xl"
                        bgGradient="linear(to-r, teal.200, teal.300)"
                        backgroundClip="text">
                        404
                    </Heading>
                    <Text fontSize="30px" mt={3} mb={2} color={'white'}>
                        Productivity Not Found
                    </Text>
                    <Text color={'white'} mb={6} fontSize="25px">
                        Yo Meatbag, you're sure you wanna waste {length} of your life?
                    </Text>

                    <Button
                        colorScheme="teal"
                        bgGradient="linear(to-r, teal.200, teal.300, teal.400)"
                        color="gray.900"
                        variant="solid"
                        onClick={playVideo}>
                        Play Video
                    </Button>
                </Box>
            </Box>
        </ChakraProvider>
    );
};

export async function videoOverlay() {
    var video = document.querySelector('video');
    if (video) {
        video.style.opacity = '0.4';
        video.pause();
        const length = video.duration;
        console.log('videoOverlay');
        const appContainer = document.createElement("div");
        appContainer.id = "habitlab-video-overlay";
        appContainer.style.position = "absolute";
        appContainer.style.top = `${video.offsetTop}px`;
        appContainer.style.left = `${video.offsetLeft}px`;
        appContainer.style.width = `${video.offsetWidth}px`;
        appContainer.style.height = `${video.offsetHeight}px`;
        appContainer.style.zIndex = "99999";
        const rhetoricChoice = await getFromStorage('rhetoric-choice');
        if (rhetoricChoice == 1) {
            ReactDOM.render(
                <VideoOverlay1 length={formatTime(length)} />,
                appContainer
            );
        }
        else if (rhetoricChoice == 2) {
            ReactDOM.render(
                <VideoOverlay2 length={formatTime(length)} />,
                appContainer
            );
        }
        document.body.appendChild(appContainer);
    }
}

export function playVideo() {
    var video = document.querySelector('video');
    if (video) {
        video.style.opacity = '1';
        video.play();
        const appContainer = document.getElementById("habitlab-video-overlay");
        appContainer?.remove();
    }
}

