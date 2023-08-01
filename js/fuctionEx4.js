// 콜 백 함수 

//콜 백 함수를 쓰는 이유 (사칙연산을 예시로)

function calculate(fn, a, b) {
  //데이터 처리를 여기서 고정하는 것이 아니라 데이터 처리함수로 만드는것임
  
  return fn(a, b);
}
  let num1 = 300, num2 = 500;

let result = calculate(function (x, y) {
  return x + y;
}, num1, num2);
console.log(result);

result = calculate(function (x, y) {
  return x * y;
}, num1, num2);
console.log(result);

// 람다식 표현
result = calculate((x,y)=> x+y, num1, num2);
console.log(result);


//셀프 즉시 호출 (메모리관리 측면에서 좋음)
// 만든 함수 전체를 ()로 묶고 (); 써줌됨
  (function doTask() {
    console.log('집에 가고싶다(즉시호출)');
  })();