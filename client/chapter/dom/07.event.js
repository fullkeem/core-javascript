/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

const first = getNode('.first');

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
function handler() {
  console.log('클릭 발생!');
}

// first.onclick = handler;

// 3. 메서드 : element.addEventListener(event, handler[, phase])
function handleClick() {
  console.log('클릭했습니다.!');
}

// first.addEventListener('mouseleave', handleClick);
// first.addEventListener('click', handleClick);

// getNode('.second').addEventListener('click', () => {
//   first.removeEventListener('click', handleClick);
// });

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

function bindEvent(node, type, handler) {
  if (typeof node === 'string') node = getNode(node);
  node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);
}

// const remove = bindEvent('.first', 'click', handleClick);

// getNode('.second').addEventListener('click', remove);

const ground = getNode('.ground');
const ball = getNode('#ball');

function handClickBall({ offsetX: x, offsetY: y }) {
  console.log(x, y);

  ball.style.transform = `translate(${x - ball.offsetWidth / 2}px, ${
    y - ball.offsetHeight / 2
  }px)`;
}

// 함수의 매서드
// call
// apply
// bind

// function func(a, b) {
//   console.log('this : ', this);
//   console.log('A : ', a);
//   console.log('B : ', b);
// }

// func.call('tiger', 1, 2); // 실행
// func.apply('tiger', [1, 2]); // 실행, apply은 인수를 배열로 묶어서 전달해야 된다.
// const a = func.bind('tiger', 1, 2); //bind는 함수를 실행시키지 않고 묶어만 둔다.
// a();

// 그러면 함수funcA와 함수 funcB가 있는데 funcB.apply(funcA, args)를 실행하고 funcB함수안에서 this를 사용하면 funcA로 가서 거기 있는 변수들을 사용할 수 있는건가요?

function funcA(a, b, c) {
  console.log(a, b, c);
}

function funcB(a, b, c) {
  this(a, b, c);
}

ground.addEventListener(
  'mousemove',
  debounce(() => {
    console.log(this);
  }, 2000)
);

function debounce(callback, limit = 100) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);

    debounce(() => {}, 1000);
  };
}

function throttle(callback, limit = 100) {
  let waiting = false;

  return function () {
    if (!waiting) {
      callback();
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}
