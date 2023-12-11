/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

class Animal {
  constructor(name) {
    this.name;
    this.stomach = [];
    this.legs = 4;
    this.tail = true;
  }

  get eat() {
    return this.stomach;
  }

  set eat(value) {
    this.prey = value;
    this.stomach.push(value);
  }
}

// const animal = new Animal({ name: '포동이', age: 15 });

class Tiger extends Animal {
  constructor(name) {
    super(name);
    this.pattern = '호랑의무늬';
  }

  static options = {
    version: '1.0.0',
    company: 'like-lion',
    ceo: '---',
  };

  static bark() {
    return '어흥!';
  }

  hunt(target) {
    this.prey = target;
    return `${target}에게 스무스하게 접근한다`;
  }
}

const 뱅갈호랑이 = new Tiger('포동이');

class Array {
  constructor() {}

  static isArray() {}

  forEach() {}

  reduce() {}

  map() {}
}

// react   class vs function (hooks)

// class Tab extends React.Component {

//   render(){
//     return (
//       <div> {value} </div>
//     )
//   }
// }

// function Tab(){

//   return (
//     <div>{value}</div>
//   )
// }

// model, view, control

// model (데이터)
// view (랜더링)
// control (이벤트)
// 패턴

class Todo {
  target = null;
  registerButton = null;
  list = null;

  constructor({ input, button, renderPlace }) {
    this.target = document.querySelector(input);
    this.registerButton = document.querySelector(button);
    this.list = document.querySelector(renderPlace);
    this.todoListArray = [];
    this.data;

    this.registerEvent();

    this.target.addEventListener('input', () => {
      this.data = this.currentInputTodoData;
    });
  }

  get currentInputTodoData() {
    return this.target.value;
  }

  set currentInputTodoData(value) {
    this.target.value = value;
  }

  get todoList() {
    return this.todoListArray;
  }

  set todoList(value) {
    this.todoList.push(value);
  }

  #createList() {
    let template = `
      <li>${this.data}</li>
    `;
    return template;
  }

  render() {
    this.list.insertAdjacentHTML('beforeend', this.#createList());
    this.target.value = '';
  }

  addTodoData() {
    this.todoList = this.data;
  }

  registerEvent() {
    this.registerButton.addEventListener('click', () => {
      this.addTodoData();
      this.render();
    });
  }
}

const button = new Todo({
  input: '#todo',
  button: '.register',
  renderPlace: '.todoList',
});
