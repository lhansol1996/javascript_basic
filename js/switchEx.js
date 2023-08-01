let score = prompt('점수를 입력하세요' ,0); // 입력창 불러오는 코드 (뒤에 숫자를 디폴트값으로 넣을 수 있음)
console.log(typeof score);      // 해당 함수는  값을 문자열로 받음

let number = score/10; 

number = Math.floor(number);  
// js에선 숫자형이 실수까지 포함해서 88점이런숫자는 10으로 나누면 8.8이라 정수형으로 바꿔주는 작업이 필요함.


switch (number) {
  case 10  : console.log('수');
    break;
  case 9 : console.log('수');    
    break;
  case 8 : console.log('우');    
    break;
  case 7 : console.log('미');    
    break;
  case 6 : console.log('양');    
    break;

  default:console.log('가');
    break;
}


