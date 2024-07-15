/**
  Diberikan function yang menerima 2 parameter, yaitu :
    parameter 1: array of integer (unsorted) 
    parameter 2: integer. 
  Function tersebut akan mengembalikan array 2 dimensi.
  Masing-masing dimensi array terdiri 2 angka yang jika dijumlahkan mempunyai nilai yang sama dengan parameter 2.
 */

function sumArray(arr, int) {
    // your code here
    let angka = 0
    let sum = 0;
    let returnArr = [];
    for (let index = 0; index < arr.length; index++) {
      for (let index2 = index+1; index2 < arr.length; index2++) {
        if (arr[index] + arr[index2] === int){
          returnArr.push([arr[index], arr[index2]]);
          arr[index] = 'Checked';
        }
      }
    }
    return returnArr;
}

// Test Cases
console.log(sumArray([2, 1, 4, 3], 5)); // [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // [[1, 10], [8, 3]]
console.log(sumArray([1, -1, 2, -2, 3, -3], 0)); // [[1, -1], [2, -2], [3, -3]]
console.log(sumArray([1, 1, 1, 1], 2)); // [[1, 1], [1, 1], [1, 1]]
console.log(sumArray([1, 2, 3, 4, 5], 10)); // []


