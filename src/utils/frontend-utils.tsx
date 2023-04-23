//Wait until we don't find current querySelector, then return


export function once_available(querySelector, callback) {
    var interval = setInterval(function () {
        if (document.querySelector(querySelector)) {
            clearInterval(interval);
            callback();
        }
    }, 100);
}