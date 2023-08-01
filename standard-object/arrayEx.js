
let nums = [5,3,2,7,8];

nums.sort((n1,n2) => {
  return n1 - n2 ; //오름차순 
});

nums.forEach((num) => {
  console.log(num);
})