import React from "react";
import ReactDOM from "react-dom";
import "../assets/css/tailwind.css";
import { hideFeed } from "./HideFeed";
import { getFromStorage } from "../utils/useChromeStorage";

async function init() {
    const interventionsEnabled = await getFromStorage('youtube-interventions');
    console.log(interventionsEnabled);
    if (!interventionsEnabled) {
        return;
    }
    hideFeed();

}

init();
