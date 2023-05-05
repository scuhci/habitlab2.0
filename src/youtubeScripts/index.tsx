// content_script.js

import "../assets/css/tailwind.css";
import { hideFeed } from "./HideFeed";
import { getFromStorage } from "../utils/useChromeStorage";
import { hideComments } from "./HideComments";
import { videoOverlay } from "./VideoOverlay";

async function init() {
    const interventionsEnabled = await getFromStorage('youtube-interventions');
    if (!interventionsEnabled) {
        return;
    }
    console.log("interventions enabled");
    if (!window.location.href.includes("watch")) {
        hideFeed();
        console.log("feed hidden");
    } else {
        hideComments();
        console.log("comments hidden");
        videoOverlay();
        console.log("video overlay");
    }

}

init();
