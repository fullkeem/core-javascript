/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];
console.log('extrackCharacter : ', extractCharacter);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;
message[3] = 'i';

// 부분 문자열 추출
let slice = message.slice(4, -1);
console.log('slice: ', slice);
let subString = message.substring(2, 5);
console.log('substring: ', subString);

// let subStr = message.subStr();

// 문자열 포함 여부 확인
let indexOf = message.indexOf('more');
console.log('indexOf :', indexOf);

function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf('edge') > -1:
      browserName = 'MS Edge';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Safari';
      break;
    case agent.indexOf('Chrome') > -1:
      browserName = 'Chrome';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'Firefox';
      break;
  }

  // {
  //   // 만약
  //   agent.indexOf('edge') > -1;
  //   // 이라면
  //   browserName = 'MS Edge';
  // }

  return browserName;
}

let lastIndexOf = message.lastIndexOf('s');
console.log('lastIndexOf', lastIndexOf);
let includes = message.includes('Less');
console.log('includes: ', includes);
let startsWith = message.startsWith('Less');
console.log('startsWith: ', startsWith);
let endsWith = message.endsWith('.');
console.log('endsWith: ', endsWith);

// 공백 잘라내기
let str = '   a      b           c        db    ';
let trimStart = str.trimStart();
console.log('trimStart: ', trimStart);
let trimEnd = str.trimEnd();
console.log('trimEnd: ', trimEnd);
let trim = str.trim();
console.log('trim: ', trim);

let reg = str.replace(/\s*/g, '');
console.log('reg: ', reg);

// 텍스트 반복
let repeat;

// 대소문자 변환
let toLowerCase;
let toUpperCase;

// 텍스트 이름 변환 유틸리티 함수

//ease-in-out_bounce

let toCamelCase = (string) =>
  string.replace(/(s|-|_)+./g, ($1) =>
    $1
      .trim()
      .replace(/(-|_)+/, '')
      .toUpperCase()
  );

let toPascalCase = (string) => {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
};

'string'.padStart(4, '0');
`${'이미지 순서'.padEnd(4, 0)}.jpg`;
