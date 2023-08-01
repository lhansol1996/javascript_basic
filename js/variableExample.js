//ES6 이전 변수선언

//var은 변수 재선언 가능 let은 안됨, 해당 예시들을 let으로 써서 쓰려면 java처럼 써야함.
var message = '변수에 넣을 값';
var message ='웹 프로그래밍 언어의 최강자 javascript' ;

console.log(message);


//선언 이전에도 사용 가능 log는 sysout이라 보면 편함 아래서 보듯 log이후 변수선언했는데 사용가능함.
console.log(age);
var age = 10;

//java 같은경우는 변수를 초기화해주지않으면 사용할 수 없는데 여기는 사용이 가능함
var weight = 50.6;
console.log(weight);

//동적 타이핑

message = 10;
message = 15.5;
console.log(message);

// 자바 스크립트 출력 방법 3가지
console.log(message); // 콘솔 출력.
document.write('문서에 동적 출력하는 방법 1,  근데 이거안씀');  
alert('메시지 출력');     //.을 쓰지않고 단독적으로 쓰이는 걸 함수라고 함.

// 상수 처리 (java 처럼 상수 처리할 때는 대문자 사용이 관례임)

const MAX = 100;
console.log(MAX);
