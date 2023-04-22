import { Box, Button, ChakraProvider, Heading, Text } from "@chakra-ui/react";
import React, { FunctionComponent } from "react"
import ReactDOM from "react-dom";

function enableComments() {
    const commentsDiv = document.getElementById('comments');
    if (commentsDiv) {
        commentsDiv.style.display = 'block';
    }
    else {
        console.log('commentsDiv not found');
    }

    const primaryDiv = document.getElementById('primary-inner');
    const appContainer = document.getElementById("habitlab-hide-comments");
    primaryDiv.removeChild(appContainer);
}

export function hideComments() {
    const appContainer = document.createElement("div");
    appContainer.id = "habitlab-hide-comments";

    if (!appContainer) {
        throw new Error("Cannot find appContainer");
    }
    appContainer.style.zIndex = "99999";

    ReactDOM.render(<HideComments />, appContainer);

    var primaryDiv, commentsDiv;

    setTimeout(() => {
        commentsDiv = document.getElementById('comments');
        if (commentsDiv) {
            console.log('commentsDiv found');
            commentsDiv.style.display = 'none';
        }
        else {
            console.log('commentsDiv not found');
        }
    }, 2000);
    setTimeout(() => {
        primaryDiv = document.getElementById('primary-inner');
        if (primaryDiv) {
            console.log('primaryDiv found');
            primaryDiv.append(appContainer);
        } else {
            console.log('got nowehre to append comments cheat button');
        }
    }, 2000);


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
                    Page Not Found
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