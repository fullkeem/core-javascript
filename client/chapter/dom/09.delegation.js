/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */
const nav = getNode('nav');

function handleClick(e) {
  let target = e.target;
  let li = target.closest('li');

  if (!li) return;

  let dataName = attr(li, 'data-name');

  if (e.target.dataset.name === 'about') {
    li.style.background = 'hotpink';
  }
  if (e.target.dataset.name === 'home') {
    li.style.background = 'greenyellow';
  }
  if (e.target.dataset.name === 'contact') {
    li.style.background = 'dodgerblue';
  }
}

// nav.addEventListener('click', handleClick);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */

function outer() {
  let value = 0;
  return function () {
    value++;
    return function () {
      value++;
    };
  };
}

const f1 = outer();
const f2 = f1();

console.log(f2());
