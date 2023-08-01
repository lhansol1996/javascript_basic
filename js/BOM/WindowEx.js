// 자바스크립트는 독립적인 함수가 있을수 없음. 생성과 동시에 window객체에 들어감
//window 객체는 브라우저 최상위 객체


//BOM의 구조 (document, history, location, navigator , screen)
console.dir(window);

let window = new function(){};
window.document =  new Document();
window.history =  new history();
window.location =  new location();

let myWindow = open('../..hello.html', '새 창');
  if (!myWindow)//myWindow 창이 열리지 않았으면이라는 조건임
    {alert('팝업이 차단되었습니다.')     }




// myWindow.close();