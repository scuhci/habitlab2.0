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
    var rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    if (!window.location.href.match(rx)) {
        hideFeed();
    } else {
        hideComments();
        //videoOverlay();
    }

}

init();
