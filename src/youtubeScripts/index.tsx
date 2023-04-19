import React from "react";
import ReactDOM from "react-dom";
import "../assets/css/tailwind.css";
import { HideFeed } from "./HideFeed";
import { getFromStorage } from "../utils/useChromeStorage";

async function init() {
    const value = await getFromStorage('youtube-interventions');
    if (!value) {
        return;
    }
    const appContainer = document.createElement("div");
    document.body.appendChild(appContainer);

    if (!appContainer) {
        throw new Error("Cannot find appContainer");
    }
    appContainer.style.zIndex = "99999";

    ReactDOM.render(<HideFeed />, appContainer);

    // Find the div with id "contents"
    const contentsDiv = document.getElementById("contents");
    const primaryDiv = document.getElementById("primary");

    if (!contentsDiv) {
        throw new Error("Cannot find contentsDiv");
    }

    // Replace the contents of the div with the new content
    contentsDiv.style.display = "none";
    primaryDiv.append(appContainer);
}

init();
