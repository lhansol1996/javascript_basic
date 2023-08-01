//이벤트 소시에 이벤트 리스너 , 핸들러 등록 

function eventListener() {
  console.log('클릭이벤트');
}

document.querySelector('button').addEventListener('click', (event) => {
  console.dir(event);
  
  if(event.ctrlKey){event.target.style.backgroundColor = 'blue';
  console.log('클릭이벤트');}
});


document.querySelector('button').addEventListener('mouseenter',function (event)  {
  this.style.backgroundColor = 'yellow';
} )
//이벤트 처리하는 함수에서 this는 event target을 지칭함.즉 , 여기선 버튼을 뜻하게됨. 
// (단, 화살표 함수로 쓰면안됨)



let input = document.querySelector('[type=text]');
input.addEventListener('keypress', event => {
  if(event.keyCode ===13 ){
    const message = input.value;
  }
});
// name 속성으로 select 태그 접근 : document.form네임속성.select네임속성
// console.dir(document.frm.search)
document.frm.search.addEventListener('change', event => {
  console.dir(event.target.options);
  let options = event.target.options;
  let selectValue = event.target.options[options.selectedIndex].value;
  console.log(selectValue);
});

// 위와 같은 다른방법.
document.frm.search.addEventListener('change', event => {
  let options = document.querySelectorAll('option');
  options.forEach(function (element) {
    if(element.selected){
      console.log(element.value);
    }    
  });
});








