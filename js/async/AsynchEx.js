//브라우저 환경 설명을 위한 js
console.log('1 실행');
doTask();
console.log('2 실행');


function doTask() {
  // console.log("doTask () 실행");

  setTimeout(() => {
    console.log("doTask 실행");
  }, 1000)

}

console.log('3 실행');


//순차적 실행이 되면 1 doTask 2 3 이 나와야하는데 
//결과가 1 2 3 doTask가 나옴 =>비동기 실행