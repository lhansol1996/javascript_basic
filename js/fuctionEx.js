//사용자 정의 함수

//전역 변수 선언
let global = '전역변수';


function sum(x , y) {
  return x+y;
}

function doTask()   {
  let some = 100;
  for (i =0; i<10 , i++;){
    console.log(i);
  }
  //return = undefind;
}

//디폴트 파라미터
function sendMessage(message= "기본메시지"){
  console.log(message+"를 서버에 전달 ");
}
sendMessage("xxxx");
sendMessage();

//레스트 파라미터(비정형 인자)
function sum(...nums){
  let result=0;
  for (const num of nums) {
    result += num;
  }
  return result;
}
sum(1);
sum(1,2);
sum(1,2,3);
const res = sum(1,2,3,4,5,6,5555);
console.log(res);


//함수 호출
let result = sum(10,5 );
console.log(result);


