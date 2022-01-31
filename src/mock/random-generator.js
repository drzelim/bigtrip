export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomArrayElement = (arr) => arr[getRandomInt(0, arr.length - 1)];

export const getRandomArrayLength = (arr, min = 0, max = arr.length - 1) => arr.slice(getRandomInt(min, max));
