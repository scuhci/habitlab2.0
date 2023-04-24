//Wait until we don't find current querySelector, then return


export function once_available(querySelector, callback) {
    var interval = setInterval(function () {
        if (document.querySelector(querySelector)) {
            clearInterval(interval);
            callback();
        }
    }, 100);
}

export function formatTime(seconds: number): string {
    const totalSeconds = Math.floor(seconds);
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    const paddedSeconds = remainingSeconds.toString().padStart(2, '0');
    return `${minutes}:${paddedSeconds}`;
}