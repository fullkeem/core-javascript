/* global gsap */

import { getNode, getStorage, setStorage } from './lib/index.js';

// 1. textField의 value 값을 로컬스토리지에 저장해주세요.

// 2. 새로고침 시 (DOMContentLoaded) 로컬 스토리지에 저장된 textField의 값을 가져와 뿌려줍니다.
const textField = getNode('#textField');

function saveText() {
  const value = this.value;
  setStorage('text', value);
}

function init() {
  getStorage('text').then((result) => {
    textField.value = result;
  });
}

textField.addEventListener('input', saveText);
window.addEventListener('DOMContentLoaded', init);
