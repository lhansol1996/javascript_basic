//함수를 만드는 법 3가지
// #1. 함수선언식
// #2. 함수표현식
// #3. Function 생성자 함수를 이용한 동적 함수 생성 **

function Function (){}


//스트립트 준비단계에서 하는 동장 - > 동적으로 만듬-

// function Function(){
//   //---
// }
// let object = new Function();
// let String = new Function();
// let Date = new Function();
// let Number = new Function();
// let doolean = new Function();
// 자바스크립트 표준 내장 객체는 Function 생성자 함수에 의해 동적 생산된다.



let sum = new Function('x','y','return x + y');
let result = sum(10, 20);
console.log(result);

let array = [4,5,6]
