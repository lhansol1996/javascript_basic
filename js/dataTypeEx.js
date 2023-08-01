// 템플릿  스트링 (templete string) ``;
let name = '이한솔';
let message = `템플릿 스트링 ${name}`;  // +연산자 안쓰고 문자열 연결을 이렇게 합칠 수 있음.
console.log(message);

//type of 연산자 : 데이터 타입이 동적으로 생성되는데, 이 타입을 확인 하기위한 연산자임
let age = 10;
console.log(typeof age);
console.log(typeof message);

//특수 숫자 리터럴 (키워드) 데이터타입이 동적으로 생성되다보니 해당 타입들이 정의되어 있음.
console.log(10/0);  //자바의 무한대 에러 :  Infinity 타입
console.log(-10/0); // 마이너스 무한대 :   -Infinty 타입
console.log('문자열을 나눌때'/0);  // Not a Number : NaN 타입

//논리형 타입 (js는 타입에 빡빡하지않아서 논리형인데도 다른 타입이 들어올 수 있음)
let flag = false;
let flag2 = 1;  // 0이면 false 그외 숫자는 true로 받음.
//let flag2 = '문자열'    // 문자열은 무조건 값이 존재하면 true 값으로 받음.

if(flag2) {
  console.log('true값임');
}
// 특수값인 null undefind infinity -infinity 다 넣을 수 있음 나중에 확인

// js 는 자동 형변환이 기본적으로 많이 일어남 (동적 데이터타입)
console.log(1000*'10');       //'10'은 문자열인데 숫자형 10으로 바뀌어서 1000곱하기 10으로 변환되어서 출력함.
console.log('1000'*'10');    // 이 예시도 자동으로 숫자형으로 바꿔서 출력 : js는 문자열보다 숫자열이 우위에 있음.