// 1. Fungsi sorting array (descending)
function sortingArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// 2. Fungsi Penjumlahan maksimum array dengan jumlah maksimum input
function sumOfArray(arr, num) {
    if (arr.length < num) return null;

    let maxSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    let tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }

    return maxSum;
}

// 3. Jumlah dari angka genap dalam nested object
function nestedObjectSum(obj) {
    let sum = 0;

    function helper(o) {
        for (let key in o) {
            if (typeof o[key] === 'object' && o[key] !== null) {
                helper(o[key]);
            } else if (typeof o[key] === 'number' && o[key] % 2 === 0) {
                sum += o[key];
            }
        }
    }
    helper(obj);
    return sum;
}

// Unit tests using Jest
module.exports = { sortingArray, sumOfArray, nestedObjectSum };
