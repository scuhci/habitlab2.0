// function that injects code to a specific tab
function injectScript(tabId, url) {
    if (!url.includes("youtube.com")) {
        console.log("not a youtube url");
        return;
    }
    chrome.scripting.executeScript(
        {
            target: { tabId: tabId },
            files: ["youtubeScripts.js"],
        }
    );
    console.log("injected script after url changed");

}

// adds a listener to tab change
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

    // check for a URL in the changeInfo parameter (url is only added when it is changed)
    if (changeInfo.url) {
        console.log("URL changed to " + changeInfo.url);
        // calls the inject function
        injectScript(tabId, changeInfo.url);

    }
});