// 함수 리터럴 표현식 
// 변수의 값이 함수식인 것을 말하는데 , hoisting 시 평가단계에서 함수식이 값의 형태이므로 초기화되지않음.
// 자바의 익명 함수

let myFunction = function (message) {
  console.log(message);
}

function doTask(fn) {
// fn : 함수에서 변수 값을 함수로 가져와서 나중에 호출되는 함수임. : 콜백함수 
  fn();
}


//함수 호출
myFunction('실험용 메세지');

doTask(myFunction);