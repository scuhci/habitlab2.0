import { Box, Button, ChakraProvider, Heading, Text } from "@chakra-ui/react";
import React, { FunctionComponent } from "react"
import ReactDOM from "react-dom";
import { once_available } from "../utils/frontend-utils";

//function to show the div with id contents
function enableFeed() {
    const contentsDiv = document.querySelector('ytd-browse[role="main"][page-subtype="home"] #contents') as HTMLElement;
    const primaryDiv = document.getElementById("primary");
    const appContainer = document.getElementById("habitlab-hide-feed");
    if (!contentsDiv) {
        return
    }
    if (contentsDiv) {
        contentsDiv.style.display = "block";
    }
    primaryDiv.removeChild(appContainer);
}

export function hideFeed() {
    once_available('ytd-browse[role="main"][page-subtype="home"] #contents', () => {
        contentsDiv = document.querySelector('ytd-browse[role="main"][page-subtype="home"] #contents') as HTMLElement;
        if (contentsDiv) {
            contentsDiv.style.display = 'none';
        }
        else {
            return;
        }
    }
    );
    const appContainer = document.createElement("div");
    appContainer.id = "habitlab-hide-feed";

    if (!appContainer) {
        throw new Error("Cannot find appContainer");
    }
    appContainer.style.zIndex = "99999";

    ReactDOM.render(<HideFeed />, appContainer);

    var contentsDiv;
    once_available('#primary', () => {
        const primaryDiv = document.getElementById('primary');
        primaryDiv.append(appContainer);
    }
    );


}

const HideFeed: FunctionComponent = () => {
    return (
        <ChakraProvider>
            <Box textAlign="center" py={10} px={6}>
                <Heading
                    display="inline-block"
                    as="h2"
                    size="2xl"
                    bgGradient="linear(to-r, teal.200, teal.300)"
                    backgroundClip="text">
                    404
                </Heading>
                <Text fontSize="18px" mt={3} mb={2} color={'white'}>
                    Page Not Found
                </Text>
                <Text color={'white'} mb={6}>
                    Yo Meatbag, stop scrolling, start working!
                </Text>

                <Button
                    colorScheme="teal"
                    bgGradient="linear(to-r, teal.200, teal.300, teal.400)"
                    color="gray.900"
                    variant="solid"
                    onClick={enableFeed}>
                    Show Feed
                </Button>
            </Box>
        </ChakraProvider>

    )
}
