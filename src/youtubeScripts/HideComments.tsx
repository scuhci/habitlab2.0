import { Box, Button, ChakraProvider, Heading, Text } from "@chakra-ui/react";
import React, { FunctionComponent } from "react"
import ReactDOM from "react-dom";
import { once_available } from "../utils/frontend-utils";

function enableComments() {
    const commentsDiv = document.getElementById('comments');
    if (commentsDiv) {
        commentsDiv.style.display = 'block';
    }
    else {
    }

    const primaryDiv = document.getElementById('primary-inner');
    const appContainer = document.getElementById("habitlab-hide-comments");
    primaryDiv.removeChild(appContainer);
}

export function hideComments() {
    if (document.getElementById('habitlab-hide-comments')) {
        return;
    }
    const appContainer = document.createElement("div");
    appContainer.id = "habitlab-hide-comments";

    if (!appContainer) {
        throw new Error("Cannot find appContainer");
    }
    appContainer.style.zIndex = "99999";

    ReactDOM.render(<HideComments />, appContainer);

    var primaryDiv, commentsDiv;

    once_available('#comments', () => {
        commentsDiv = document.getElementById('comments');
        if (commentsDiv) {
            commentsDiv.style.display = 'none';
        }
        else {
        }
    });
    once_available('#primary-inner', () => {
        primaryDiv = document.getElementById('primary-inner');
        primaryDiv.append(appContainer);
    }
    );
}

const HideComments: FunctionComponent = () => {
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
                    Productivity not found
                </Text>
                <Button
                    colorScheme="teal"
                    bgGradient="linear(to-r, teal.200, teal.300, teal.400)"
                    color="gray.900"
                    variant="solid"
                    onClick={enableComments}>
                    Show Comments
                </Button>
            </Box>
        </ChakraProvider>
    );
};