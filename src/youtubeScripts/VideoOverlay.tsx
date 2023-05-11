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

export function videoOverlay() {
    if (document.getElementById("habitlab-video-overlay")) {
        return;
    }
    once_available('.video-stream.html5-main-video', () => {
        console.log('main video found!');

        const video = document.querySelector('.video-stream.html5-main-video') as HTMLVideoElement;
        video.pause();

        //Insert overlay
        const length = video.duration;
        const appContainer = document.createElement("div");
        appContainer.id = "habitlab-video-overlay";
        appContainer.style.position = "absolute";
        appContainer.style.top = `${video.offsetTop}px`;
        appContainer.style.left = `${video.offsetLeft}px`;
        appContainer.style.width = `${video.offsetWidth}px`;
        appContainer.style.height = `${video.offsetHeight}px`;
        appContainer.style.zIndex = "99999";
        ReactDOM.render(
            <VideoOverlay length={formatTime(length)} />,
            appContainer
        );
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

