/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = DINNER;

switch (thisTime) {
  case MORNING:
    console.log('디스코드를 켠다.');
    break;

  case LUNCH:
    console.log('점심식사');
    break;

  case DINNER:
    console.log('저녁식사');
    break;

  case NIGHT:
    console.log('야식');
    break;

  case LATE_NIGHT:
    console.log('유튭');
    break;

  case DAWN:
    console.log('잔다');
    break;
}

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */
if (thisTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다');
} else if (thisTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (thisTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (thisTime === NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}

/* switch vs. if -------------------------------------------------------- */
function getRandom(number) {
  return Math.floor(Math.random() * number);
}

console.log(getRandom(56));

function getDay(num) {
  switch (num) {
    case 0:
      return '월';
    case 1:
      return '화';
    case 2:
      return '수';
    case 3:
      return '목';
    case 4:
      return '금';
    case 5:
      return '토';
    case 6:
      return '일';
  }
}
const today = getDay(getRandom(7));
console.log(today);

function weekend() {
  const today = getDay(getRandom(7));
  // console.log(today);

  // if (today.includes('토')) {
  //   return '토요일';
  // } else if (today.includes('일')) {
  //   return '일요일';
  // } else {
  //   return '평일';
  // }

  return today.includes('토')
    ? '토요일'
    : today.includes('일')
      ? '일요일'
      : '평일';
}

const todayIs = weekend();

console.log(todayIs);
