import React, { FunctionComponent } from "react"
//function to show the div with id contents
function enableFeed() {
    const contentsDiv = document.getElementById("contents");
    const primaryDiv = document.getElementById("primary");
    const appContainer = document.getElementById("appContainer");
    if (!contentsDiv) {
        throw new Error("Cannot find contentsDiv");
    }
    contentsDiv.style.display = "block";
    primaryDiv.removeChild(appContainer);
}

export const HideFeed: FunctionComponent = () => {
    return (
        <div className="flex justify-center">
            <div className="text-center">
                <p className="normal-case dark:text-white text-3xl p-5 ...">Home feed has been Hidden</p>
                <button className="h-20 px-10 m-10 text-xl bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded "
                    onClick={enableFeed}>
                    Show Feed
                </button>
            </div>
        </div>

    )
}
