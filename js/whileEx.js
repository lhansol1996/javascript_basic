//while 문
let i = 1 
let result = 0;

while( i <= 100) {
    result += i;
    i++;
}
console.log(result);

//for 문
result=0;
for(let i = 1; i<= 100; i++) {
  result += i;
}
console.log(result);

//구구단 예시
document.write('<h2>for문을 이용한 구구단</h2>')
document.write('<table border=1>');


for (let i = 2; i<=9; i++){
  document.write('<tr>')

  for(let j = 1; j<=9; j++){
  document.write(`<td> ${i} * ${j} = ${i*j} </td>`)  
  }


  document.write('</tr>')
}

document.write('</table>');