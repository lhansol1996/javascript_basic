
let ssn = prompt('주민번호 입력해라');
if(ssn){ // 입력했을 경우 true
  //960825-1030417
  const num = ssn.indexOf('-');
  const c = ssn.charAt(num + 1);
  // const c = ssn.charAt(ssn.indexOf('-') + 1);
  
  switch (c) {
    case '1':
    case '3': alert('남자'); break;
    case '2': 
    case '4': alert('여자'); break;
    
    default: alert('외국인'); break;
  }
}else{
  alert('제대로 입력');

}
