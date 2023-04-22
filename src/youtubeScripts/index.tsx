import React from "react";
import ReactDOM from "react-dom";
import "../assets/css/tailwind.css";
import { hideFeed } from "./HideFeed";
import { getFromStorage } from "../utils/useChromeStorage";
import { hideComments } from "./HideComments";

async function init() {
    const interventionsEnabled = await getFromStorage('youtube-interventions');
    if (!interventionsEnabled) {
        return;
    }
    console.log("interventions enabled");
    hideFeed();
    console.log("feed hidden");
    hideComments();

}

init();
