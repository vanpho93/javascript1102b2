let arr = [3, 4, 1, 5, 3];
// let arr2 = new Array(3);
//
// //length
//
// console.log(arr2.length);
// console.log(arr2);
//
// console.log(arr.length);
// console.log(arr);
// console.log(arr[-1]);

// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }
arr.forEach(function(element, index){
  console.log('Xin chao: ' + element + ':' + index);
});
