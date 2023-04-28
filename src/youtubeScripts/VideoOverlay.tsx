import { FunctionComponent } from "react";
import { formatTime, once_available } from "../utils/frontend-utils";
import { ChakraProvider, Heading, Box, Text, Button, Spacer } from "@chakra-ui/react";
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
                bg="rgba(0, 0, 0, 0.9)"
            >
                <Box textAlign="center" py={10} px={6}>
                    <Heading
                        as="h1"
                        size="4xl"
                        fontWeight="bold"
                        color="white"
                        textAlign="center"
                    >
                        🙌
                    </Heading>
                    <Heading
                        as="h2"
                        size="2xl"
                        fontWeight="bold"
                        color="white"
                        textAlign="center"
                    >
                        You have been great so far! Are you sure this video is worth your time?
                    </Heading>
                    <Heading
                        as="h2"
                        size="2xl"
                        fontWeight="bold"
                        color="white"
                        textAlign="center"
                    >
                        I know you can spend {length} minutes doing something more productive!
                    </Heading>
                </Box>
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
                bg="rgba(0, 0, 0, 0.9)"
            >
                <Box textAlign="center" py={10} px={6}>
                    <Heading
                        display="inline-block"
                        as="h2"
                        size="2xl"
                        bgGradient="linear(to-r, teal.200, teal.300)"
                        backgroundClip="text">
                        Error: 404
                    </Heading>
                    <Heading
                        as="h2"
                        size="2xl"
                        fontWeight="bold"
                        color="white"
                        textAlign="center"
                    >
                        Productivity Not Found
                    </Heading>
                    <Heading
                        as="h2"
                        size="2xl"
                        fontWeight="bold"
                        color="white"
                        textAlign="center"
                    >
                        This video is definitely worth your time! 🙄
                    </Heading>
                </Box>
            </Box>
        </ChakraProvider >
    );
};

const VideoOverlay3: FunctionComponent<VideoOverlayProps> = ({ length }) => {
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
                bg="rgba(0, 0, 0, 0.9)"
            >
                <Box textAlign="center" py={10} px={6}>
                    <Text fontSize="50px">
                        🤡
                    </Text>
                    <Heading
                        as="h2"
                        size="2xl"
                        fontWeight="bold"
                        color="white"
                        textAlign="center"
                    >
                        Do you really need to spend {length} f---ing minutes watching this?
                    </Heading>
                    <Heading
                        as="h2"
                        size="2xl"
                        fontWeight="bold"
                        color="white"
                        textAlign="center"
                    >
                        Get oustide and do something productive you meatbag!
                    </Heading>
                </Box>
            </Box>
        </ChakraProvider>
    );
};

export async function videoOverlay() {
    once_available('.html5-video-player video:not(#rewardvideo)', async () => {
        if (document.getElementById("habitlab-video-overlay")) {
            return;
        }
        var video = document.querySelector('.html5-video-player video:not(#rewardvideo)') as HTMLVideoElement;
        video.pause();
        video.style.opacity = '0.4';
        video.pause();
        const length = video.duration;
        console.log('length: ', length);
        const appContainer = document.createElement("div");
        appContainer.id = "habitlab-video-overlay";
        appContainer.style.position = "absolute";
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
        else {
            ReactDOM.render(
                <VideoOverlay3 length={formatTime(length)} />,
                appContainer
            );
        }
        document.body.appendChild(appContainer);
    });
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

