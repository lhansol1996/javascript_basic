// 중첩 함수 정의 (Helper)

function main(num) {
  console.log("주기능입니다...");

    function helper (num) {
      return Math.pow(num,2);
    }

let x = num;
let result = helper(x);
console.log(result);
}

main(8);
