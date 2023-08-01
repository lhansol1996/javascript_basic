//생성자 함수를 이용한 객체 틀 생성

function Dog(name, age, kind) {
  // this();  this와 return 이 기본적으로 포함되어있음.
  //속성 추가
  this.name = name;
  this.age = age;
  this.kind = kind;

  //기능 추가
  this.cry = function(){
    console.log(`${this.name}강아지가 웁니다..`);
  }


  // return this;

}
// 객체생성 당시 new를 빼면 위 함수에서 this와 리턴을 뺌 : new의 역할은 this와 return을 넣으라는 의미임.


//객체 생성
let dog = new Dog ('루니', 8, '배송');
console.log(dog);
dog.cry();

let dog2 = new Dog('냥이',9,'스트릿');
console.log(dog2);  
dog2.cry();


//javascript 표준 객체 (생성자 함수)를 사용하는 예제

  let string = new String("넣을 문자열");
  const count = string.length;
  console.log(count);
  let ssn = "123456-1234567";
  let ch = ssn.charAt(7);
  switch (ch) {
    case '1': console.log('남');
      break;
    case '2': console.log('여');
      break;
  }

//표준 데이터
  let number = new Number(10);
  console.log(number);
  let bool = new Boolean(true);
  console.log(bool);
  let today =new Date();
  console.log(today.toLocaleString());

//js 배열 

//자바의 List , Set, Queue, Stack 기능이 들어있는 배열임.
  let array = new Array();
















