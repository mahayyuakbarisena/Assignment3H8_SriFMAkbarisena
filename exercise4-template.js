/**
Diberikan satu buah input berupa array a.
Dari semua kemungkinan subarray yang berasal dari a, subarray manakah yang akan memberikan jumlah/sum terbesar apabila semua anggota subarray tersebut dijumlahkan?

Input:
a = [-2, -3, 4, -1, -2, 1, 5, -3]

Expected Output:
[[ 4, -1, -2, 1, 5] , 7]

Explanation:
Diantara semua kemungkinan subarray, [ 4, -1, -2, 1, 5]  merupakan subarray yang akan memberikan jumlah terbesar

Nilai 7  merupakan jumlah atau sum dari subarray  [ 4, -1, -2, 1, 5]
 */

function subArray(arr) {
    // your code here
    let max = 0;
    let checkMax = 0;
    let arrMax = [];
    let arrCheck = [];
    for (let index = 0; index < arr.length-1; index++) {
        for (let index2 = index+1; index2 < arr.length; index2++) {
            let cloneArr = arr.slice(0);
            arrCheck = cloneArr.splice(index, index2+1);
            checkMax = countSumArr(arrCheck);
            if (checkMax > max) {
                max = checkMax;
                arrMax = arrCheck;
            }
        }
    }
    return [arrMax, max];
}

function countSumArr(arr){
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    return sum;
}

// Test Case
let input = [-2, -3, 4, -1, -2, 1, 5, -3]
console.log(subArray(input)) // output:[ [ 4, -1, -2, 1, 5 ], 7 ]
