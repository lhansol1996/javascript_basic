//DOM

//속성 제어하기

let aElement = document.querySelector('a');
aElement.getAttribute('href');
console.log(value);
aElement.setAttribute('href', 'https://www.google.com'); // 속성 바꾸기

//노드 생성및 연결

let liE = document.createElement('li');
let text = document.creatTextNode(']i');
lie.appendChild(text); //removeChild : 삭제 
document.querySelector('ol').appendChild(lie);
document.querySelector('ol').innerHTML='<b>졸지마</b>';


function show() {
  let div = '<div>댓글 내용</div>'; 
  let body = document.querySelector('article');
  article.innerHTML = div;
}
