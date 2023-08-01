//전역 함수 선언
function doTask () {
  console.log('어떤일을 함');
  console.dir(this);
  console.log(`이름 : ${this.name} , 나이 : ${this.age}`);
  /**  만들어져 있는 함수를 객체에 포함시키기위해 쓴다고 보면됨.
        call을 통해 이 함수를 객체에 메소드화 시키면 이 전역함수의 this는 객체의 속성을 받게됨.*/
}


// function prototype은 자바스크립트의 모든 함수의 부모 객체임. call 메소드는 function prototype의
// 메소드로, 아래 예시는 doTask를 function prototype의 메소드로 간접호출하는것임.

//객체 생성
let person = {
  name : '이한솔',
  age : 30,
  doTeach : function () {
    console.log('프로그래밍을 강의합니다');
  }
}

//함수 직접 호출 
doTask();

//함수 간접 호출 (동적 호출)
doTask.call(person);

// 위 간접 호출은 전역함수 doTask를 person 객체 안의 메소드로 변경시켜서 실행.



/**함수안에서의 this와 객체안에서의 this는 차이점이 있음
 * 함수안에서의 this는 window 객체를 받게되고 
 * 객체안에서의 this는 객체 자체의 속성값을 받는 자기자신인 객체를 받는 this를 뜻함.
 */


// 연습

//특정객체에 동적 속성 추가 기능
function addAttribute (key, value) {
  this[key] = value;
}

addAttribute('name', '이한솔')  //이런식으로 다이렉트로 호출하여 값을 넣으면 window객체에 추가됨.
addAttribute('age', 27)         //그렇기에 간접호출을 해주어야하는 것임
console.dir(window);

let user = {};
addAttribute.call(user, 'key값', 'valuer값');
addAttribute.call(user, 'age', '27');
console.dir(user);

//apply는 배열로 추가 / bind는 묶어서 추가

let user2 = {};
addAttribute.apply(user2, ['name', '이한솔']);
addAttribute.apply(user2, ['age', '28']);
console.dir(user2);

let user3 = {};
let addProperty = addAttribute.bind(user3)
addProperty('name', '이한솔');
addProperty('age', '29');
console.dir(user3);

