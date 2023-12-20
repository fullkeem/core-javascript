import { getNode } from '../dom/getNode.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(() => {
//   first.style.top = '-100px';

//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     delay(() => {
//       first.style.top = '0px';
//     });
//   });
// });

// Promise API

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '아싸 성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};

function delayP() {
  const config = { ...defaultOptions };
  const { shouldReject, timeout, data, errorMessage } = config;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data);
      } else {
        reject(errorMessage);
      }
    }, timeout);
  });
}

delayP(false)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(delayP());
