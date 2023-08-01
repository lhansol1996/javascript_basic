// 표준 내장 함수

// confirm('전달인자를 확인창으로 띄워준다.');

const yn = confirm ('확인창');
  if(yn){
    console.log('컨펌함수 참값')
  }else{
    console.log('컨펌함수 거짓값');
  }

  // setTimeout (콜백함수, 시간) 일정 시간후 콜백함수 한번실행

  setTimeout(()=>{
    console.log('2초후 실행');
  }, 2000);

  //setInterval (콜백함수, 시간) : 일정 시간마다 콜백함수 반복 실행
  let second = 1;
  let timer = setInterval(() => {
    console.log(`${second}초`);
    second++;
  }, 1000);

  //clearTimeout (time 객체) : 일정 시간 후 함수를 한번 중지
  setTimeout(() => {
    clearTimeout(timer);
  }, 10000);
  //10초후 함수 중지

  //clearInterval (time 객체) : 일정 시간마다 함수 반복을 중지


//parseInt (문자열) : 문자열에 있는 숫자만을 정수로 변환하여 반환
let money = '100원';
money = parseInt(money);
console.log(money + 100); // 타입 체크를위한 숫자 더하기

//isNaN (수식) : 수식의 결과가 NaN이면 true , 그렇지 않으면 false 반환
let result = 1000/'문자열'
  if(isNaN(result)){
    console.log('NaN 값임');
  }



