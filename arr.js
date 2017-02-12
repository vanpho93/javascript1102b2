let arr = [3, 4, 1, 5, 3];
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
// arr.forEach((element, index) =>
//   console.log('Xin chao: ' + element + ':' + index));
// console.log(arr);
// console.log(arr.join('::'));
// arr.push('Hello');
// arr.pop();
// arr.shift();
// arr.unshift('Hi');
// let removed = arr.splice(2, 2);
// console.log(arr);
// console.log(removed);

// 4, 5, 6, 8, 9
function addToIndex(array, index, value){
  let removed = array.splice(index, array.length - index);
  array.push(value);
  removed.forEach((e, i) => array.push(e));
}

arr.splice(index, 0, value)
// addToIndex(arr, 2, 0);

addToIndex(arr, 2, 100);
console.log(arr);
