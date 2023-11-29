/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

let age = 91;

if (age >= 14 && age <= 90) {
  console.log('사람입니다');
}

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log(AandB);

// a = a && b;
// a &&= b;

// 논리합(또는) 연산자
let AorB = a || b;
console.log(AorB);

// logical Or Assignment 논리곱 할당 연산자
a ||= b;

// 부정 연산자
let reverseValue;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && '' && [] && { thisIsFalsy: false };
console.log(whichFalsy);

// 첫번째 Truthy를 찾는 연산 (||)
// let whichTruthy = ;

// 취소 버튼과 ESC 누르면 null이 뜸.
// 어던 값도 입력하지 않았을 경우 => 빈문자 ''

function login() {
  let userName = prompt("Who's there?");

  if (!userName) return;

  if (userName.toLowerCase() === 'admin') {
    console.log('환영합니다!');
    let userPw = prompt('Password?');
    if (userPw === 'TheMaster') {
      console.log('Welcome!');
    } else if (userPw === null || userPw === '') {
      console.log('Canceled');
    } else {
      console.log('Wrong password!');
    }
  } else if (userName === null || userName.replace(/\s*/g, '') === '') {
    console.log('취소됐습니다.');
  } else {
    console.log("I don't know you");
  }
}

login();
