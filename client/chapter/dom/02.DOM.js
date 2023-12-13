/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest

/* 문서 대상 확인 */
// - matches
// - contains

function getNode(node) {
  if (typeof node !== 'string') {
    throw new Error('getNode 함수의 인수는 문자 타입 이어야 합니다');
  }
  return document.querySelector(node);
}

// if(context.nodeType !== document.ELEMENT_NODE){
// context = document.querySelector(context);
// }
