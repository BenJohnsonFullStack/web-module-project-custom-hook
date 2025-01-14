import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if(window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        } else {
            window.localStorage.setItem(key, JSON.stringify(initialValue));
            return initialValue;
        }
    });

    const setLocalValue = value => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    };

    return [storedValue, setLocalValue];

};