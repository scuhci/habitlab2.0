// function that injects code to a specific tab
function injectScript(tabId, url) {
    if (!url.contains("youtube.com")) {
        return;
    }
    chrome.scripting.executeScript(
        {
            target: { tabId: tabId },
            files: ['youtubeScripts.js'],
        }
    );
    console.log("injected");

}

// adds a listener to tab change
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

    // check for a URL in the changeInfo parameter (url is only added when it is changed)
    if (changeInfo.url) {

        // calls the inject function
        injectScript(tabId, changeInfo.url);

    }
});

console.log("background.js loaded");