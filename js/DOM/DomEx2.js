//DOM

//동적 스타일 적용하기

let h2Element = document.querySelector('h2'); //하나만 적용

h2Element.style.backgroundColor = 'blue';
//== h2Element.style['background-Color']= 'blue';
h2Element.style.color = 'white';

/*
let list = document.querySelectorAll('h2');  //전체적용
list.forEach(element =>{
  element.style.backgroundColor = 'blue';
  element.style.color = 'white';
})
*/
//위 코드를 줄여쓰기
// html에서 style 태그에 적용할 내용을 적고 해당 코드 작성
// let list = document.querySelectorAll('h2');  
// list.forEach(element =>{
//   element.className = 'head';
// })

let list = document.querySelectorAll('h2');  
list.forEach(element =>{
  element.classList.add('head');   //h2에 있는 클래스에 head라는 속성을 추가
  element.classList.remove('assalom');//h2에 있는 클래스에 assalom 속성 제거
})

setInterval(() => {
  element.classList.toggle('head');
}, 1000);