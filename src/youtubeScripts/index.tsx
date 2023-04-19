import React from "react";
import ReactDOM from "react-dom";
import "../assets/css/tailwind.css";
import { ContentScript } from "./HideFeed";

async function init() {
    const appContainer = document.createElement("div");
    document.body.appendChild(appContainer);

    if (!appContainer) {
        throw new Error("Cannot find appContainer");
    }
    appContainer.style.zIndex = "99999";

    ReactDOM.render(<ContentScript />, appContainer);

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
