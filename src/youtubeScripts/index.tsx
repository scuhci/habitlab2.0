// content_script.js

import "../assets/css/tailwind.css";
import { hideFeed } from "./HideFeed";
import { getFromStorage } from "../utils/useChromeStorage";
import { hideComments } from "./HideComments";
import { videoOverlay } from "./VideoOverlay";
import { once_available } from "../utils/frontend-utils";

async function init() {
    const interventionsEnabled = await getFromStorage('youtube-interventions');
    if (!interventionsEnabled) {
        return;
    }
    // console.log("interventions enabled");
    // if (!window.location.href.includes("watch")) {
    //     hideFeed();
    //     console.log("feed hidden");
    // }
    // hideComments();
    // console.log("comments hidden");
    var url = window.location.href;
    if (window.location.href.includes("watch")) {
        videoOverlay();
        console.log("video overlay added");
    }
    //update url every 1 second and check if it cointains 'watch'
    setInterval(function () {
        if (url != window.location.href) {
            url = window.location.href;
            if (window.location.href.includes("watch")) {
                videoOverlay();
                console.log("video overlay added");
            }
        }
    }, 1000);
}

init();
