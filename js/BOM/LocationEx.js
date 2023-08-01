//BOM 구조
// 브라우저의 주소 표시줄과 관련된 정보(URL)를 제공한다.
//  Location 객체를 조작하여 다른 URL로 이동시킬 수 있다.

console.log(location.href); 

let url = 'https://www.naver.com';
location.href = url;

// location.href = '이동시킬 url'       : 대중적인 방법  
// location.assign(url);   : 속성값 직접 넣은 코드  , 히스토리가 남음
// location.replace(url);  : 해당기능으로 이동하면 히스토리가 안남아서 뒤로가기 불가능. 

location.reload();   // 새로고침 기능.