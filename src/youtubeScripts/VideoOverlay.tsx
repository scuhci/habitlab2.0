import { FunctionComponent } from "react";
import { formatTime, once_available } from "../utils/frontend-utils";
import { ChakraProvider, Heading, Box, Text } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";

interface VideoOverlayProps {
    length: string;
}

const VideoOverlay: FunctionComponent<VideoOverlayProps> = ({ length }) => {
    return (
        <ChakraProvider>
            <Box textAlign="center" py={10} px={6} onClick={playVideo} cursor={"pointer"}>
                <Heading
                    display="inline-block"
                    as="h2"
                    size="2xl"
                    fontWeight="bold"
                    color="white"
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                >
                    Video is {length} seconds long. You sure you want to watch it?
                </Heading>
            </Box>
        </ChakraProvider>
    );
};

export function videoOverlay() {
    var video = document.querySelector('video');
    if (video) {
        video.style.opacity = '0.4';
        video.pause();
        const length = video.duration;
        console.log('videoOverlay');
        const appContainer = document.createElement("div");
        appContainer.id = "habitlab-video-overlay";
        appContainer.style.zIndex = "99999";
        ReactDOM.render(
            <VideoOverlay length={formatTime(length)} />,
            appContainer
        );
        once_available('ytd-watch-flexy #player-container-outer', () => {
            const playerContainerOuter = document.getElementById('player-container-outer');
            playerContainerOuter?.append(appContainer);
        });
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
