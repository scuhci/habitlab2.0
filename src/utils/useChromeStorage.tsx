import { useState, useEffect } from 'react';

export function useChromeStorage(key: string, defaultValue: any) {
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        chrome.storage.local.get(key, (data) => {
            if (data[key] !== undefined) {
                setValue(data[key]);
            }
        });
    }, [key]);

    useEffect(() => {
        chrome.storage.local.set({ [key]: value });
    }, [key, value]);

    return [value, setValue];
}

export function getFromStorage(key: string): Promise<any> {
    return new Promise((resolve) => {
        chrome.storage.local.get(key, (result) => {
            resolve(result[key]);
        });
    });
}
