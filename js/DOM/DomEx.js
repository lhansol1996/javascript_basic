//DOM

//document.firstChild  
// == 여기선 practice.html의 <!DOCTYPE html>태그를 뜻함. (practice.html을 보면서 확인해야함)
//document.firstElementChild
//== HTML태그를 뜻함.
console.dir(document.firstChild);
console.dir(document.firstElementChild); //  확인 작업
console.dir(document.firstElementChild.constructor);

// Node의 공통 속성 3개 (DOM트리 계층 구조로 검색)
console.log(document.firstElementChild.nodeType === Node.ELEMENT_NODE);
console.log(document.firstElementChild.nodeName);
console.log(document.firstElementChild.nodeValue);

/**  body 요소 접근
 *  last를 쓰는이유 : 첫 first엘리먼트차일드는 html
 * 후에 last엘리먼트차일드는 바디요소를 뜻하는데,왜 last를 쓰냐면
 * 이 html은 <head>, head의 텍스트, <body> 자식요소를 가지고 있기 때문.
*/
console.log(document.firstElementChild.lastElementChild.nodeName);

//2번째 방법 (메소드를 통해 특정요소 접근)

//1. 태그의 이름으로 찾는 메소드
let pArray = document.getElementsByTagName('p'); 
console.log(pArray.constructor);  
// 유사배열인 pArray의 타입 확인. 실제 배열이 아니라 foreach는 못씀(for in, for of 가능)
for (const element of pArray) {
  console.log(element.nodeName);
}
/*메소드 이름이 getElements인이유 : 태그는 여러번 쓰일수 있으니 메소드이름에 s들어감 
->리턴 값이 배열임. 정확히는 배열이 아니고 유사 배열임.*/

//2. Id 속성값을 통해 찾는 메소드
let pElement = document.getElementById('myP');

console.log(pElement);

//3. 클래스이름 값을 통해 찾는 메소드 
let htmlCollection = document.getElementsByClassName('container'); // 이 메소드 리턴값도 유사 배열임
console.dir(htmlCollection);


// CSS 선택자를 이용한 검색 ->리턴값이 NodeList임  getElement는 HtmlCollection(유사배열)인 것 비교 기억
//Nodelist는 for each 문
//위에 쓰이는 방법보다 이 방법이 더 대중적이고 좋음.

console.log(document.querySelector('p'));   //하나짜리(여러개있을때 이거 쓰면 맨앞에거 가져옴)
console.log(document.querySelectorAll('div'));  // 복수
let nodeList = document.querySelectorAll('div');
for (const divE of nodeList) {
  console.log(divE.nodeName);
}

let pEl = document.querySelector('#myP');
console.log(pEl.nodeName);

let textNode = pEl.firstChild;   
// 텍스트는 직접집을수가 없어서 p의 자식으로 불러와야함.

console.log(textNode.nodeName);
console.log(textNode.nodeType);
console.log(textNode.nodeValue);
alert(textNode.nodeValue);

console.log(document.querySelector('.container').firstChild.nodeValue);

console.log(document.querySelector('li:first-child').firstChild.nodeValue);
console.log(document.querySelector('li:last-child').firstChild.nodeValue);

let list = document.querySelectorAll('li:nth-child(2n+1');
list.forEach(element => {
  console.log(element.firstChild.nodeValue);
});











