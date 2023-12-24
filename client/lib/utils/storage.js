import { isString } from './typeOf.js';

const { localStorage: storage } = window;

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      storage.setItem(key, JSON.stringify(value));
      resolve();
    } else {
      reject({ message: 'key는 문자 타입 이어야 합니다.' });
    }
  });
}

export function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (isString(key)) {
      resolve(storage.getItem(key));
    } else {
      reject({ message: 'key는 문자 타입 이어야 합니다.' });
    }
  });
}

export function deleteStorage(key) {
  return new Promise((resolve) => {
    if (!key) {
      storage.clear();
    } else {
      storage.removeItem(key);
    }
    resolve();
  });
}
