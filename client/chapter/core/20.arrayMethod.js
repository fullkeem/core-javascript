/* -------------------- */
/* Array Type           */
/* -------------------- */

//Array.isArray

const isArray = (data) => {
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
};

function normalIsArray(data) {
  // return Array.isArray(data)
  return (
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array'
  );
}

const arr = [10, 100, 1000, 10_000];

const people = [
  {
    id: 0,
    name: '김다영',
    job: '프론트엔드 개발자',
    age: 25,
    imageSrc: 'ASdkl31',
  },
  {
    id: 1,
    name: '김충만',
    job: '치킨집사장',
    age: 51,
    imageSrc: 'asFkzo23',
  },
  {
    id: 2,
    name: '조윤주',
    job: '화가',
    age: 12,
    imageSrc: 'Gzoskq13',
  },
  {
    id: 3,
    name: '송현규',
    job: '마델',
    age: 25,
    imageSrc: 'aabaq23',
  },
];

//forEach
// arr.forEach((item, index) => {
//    console.log(item, index);
// });

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i], i);
// }

people.forEach((item) => {
  console.log(item.job);
});
const span = document.querySelectorAll('span');

span.forEach((item) => {
  item.addEventListener('click', function () {
    this.style.color = 'red';
  });
});

/* 원형 파괴 ------------------------------------------------------------ */
//push
//pop
//unshift
//shift
//reverse
//splice
//sort

// const reverseArray = arr.reverse();
// const reverseArray = arr.toReversed(); // 원형 파괴x  2023ver

// const spliceArray =(arr.splice(1, 2, 'javascript', 'css', 'react'));
// const spliceArray =(arr.toSpliced(1, 2, 'javascript', 'css', 'react')); // 원형 파괴x  2023ver

// const aa = arr.sort((a, b) => {
//   return b - a;
// });

// const bb = arr.toSorted((a, b) => {
//   return b - a;
// });

/*새로운 배열 반환 ---------------------------------------------------  */
//concat
//slice
//toSorted
//toReversed
//toSpliced
//map

//
const card = people.map((item, index) => {
  return /* html */ `
    <div class='userCard card${index}'>
      <div class="imageField">
        <img alt="${item.alt}" />
      </div>
      <span>이름 : ${item.name}</span>
      <span>나이 : ${item.age}</span>
      <span>직업 : ${item.job}</span>
    </div>
  `;
});

// console.log(card);

card.forEach((item) => {
  document.body.insertAdjacentHTML('beforeend', item);
});

const newAge = people.map((item) => item.age - 2);
console.log(newAge);

/* 요소 포함 여부 확인 ------------------------------------------------- */

//indexOf
//lastIndexOf
//includes

/* 요소 찾기 ------------------------------------------------------------- */

//find
// const find = people.find((item) => {
//   return item.name === '송현규';
// });
// // 이름이 송현규

// //findIndex
// const find = people.findIndex((item) => {
//   return item.name === '송현규';
// });

/*요소 걸러내기 ------------------------------------------------------- */

const 젊은이들 = people.filter((item) => {
  return item.age < 30;
});

/* 요소별 리듀서(reducer) 실행 -------------------------------- */
//reduce
/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc, cur) => acc + cur.age, 0);

const template = people.reduce(
  (htmlCode, cur) => htmlCode + `<div>${cur.name} : ${cur.age} 살</div>`,
  ''
);

// console.log( template );

document.body.insertAdjacentHTML('beforeend', template);

// 객체(Object) : 키(key)를 사용해 식별할 수 있는 값을 담은 집합 - `키:값의 집합`
// 배열(Array) : 순서(index)가 있는 집합 - `값의 집합`

// ※ 배열은 특별한 종류의 객체로 대괄호를 사용해 요소에 접근하는 방식은 객체 문법을 사용.
//   배열은 키(key)가 숫자(index)라는 점이 다름. 즉, 본질은 객체.
//   순서에 따른 제어가 가능하도록 다양한 메서드와 length 프로퍼티를 언어에서 제공.

// 배열 선언

// 배열 요소의 총 갯수

// 배열 요소 변경

// 배열 요소 추가
let unshift;
let push;

// 배열 요소 제거
let shift;
let pop;

// 큐(queue) vs. 스택(stack)
// 큐 FIFO (먼저 들어온 것이 먼저 나간다) ← queue ←
// 스택 LIFO (나중에 들어온 것이 먼저 나간다) ↓ stack ↑

// 배열 요소 순환(loop)
// for 문, for ~ of문

// 배열 복사
let copiedArray;

// 다차원 배열
// 행렬을 저장하는 용도

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 행렬의 정중앙에 위치한 요소를 찾으려면?
