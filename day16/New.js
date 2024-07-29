//Activity 1
//task 1
function factorial(n) {
    if (n < 0) {
        return null;
    }
    if (n == 0 || n == 1) {
        return n;

    }
    return n * factorial(n - 1);
}
console.log(factorial(5))
console.log(factorial(0))
console.log(factorial(-2))

//task 2
function febb(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    return febb(n - 2) + febb(n - 1);
}
console.log(febb(5))
console.log(febb(1))
console.log(febb(2))

//Activity 2
//task 3
let arr = [1, 2, 3, 4, 5];
function SumInArr(arr, i) {
    if (i == arr.length) {
        return 0
    }
    return arr[i] + SumInArr(arr, i + 1);
}
console.log(SumInArr(arr, 0));
let arr2 = [2, 58, 92, -48, 8, 0, -1, 61, 2, -46]
console.log(SumInArr(arr2, 0));
console.log(SumInArr([0, 0, 0, 0], 0));


//task4
function maxinArr(arr, i, max) {
    if (i == arr.length) {
        return max;

    }
    if (max < arr[i]) {
        max = arr[i];
    }
    return maxinArr(arr, i + 1, max);

}
console.log(maxinArr(arr2, 0, arr[0]));
console.log(maxinArr([5, 5, 5, 5, 5], 0, 0))
console.log(maxinArr([-34, -57, -84, -24], 0, Number.NEGATIVE_INFINITY));

//task5
function reverseString(str, i = str.length) {
    if (i == -1) {
        return "";
    }
    return str.charAt(i) + reverseString(str, i - 1);

}
let str = "String";
console.log(reverseString(str))
console.log(reverseString("palindromes"))
console.log(reverseString("madam"))


//task 6
function palindrome(str, i = 0) {
    if (i == str.length) {
        return true;
    }


    return (str.charAt(i) == str.charAt(str.length - 1 - i)) && palindrome(str, i + 1);

}


console.log(palindrome("racecar"))
console.log(palindrome("madam"))
console.log(palindrome("system"))
console.log(palindrome("public"))


//task 7
function binarySearch(arr, target, start = 0, end = arr.length - 1) {


    if (end >= start) {
        let mid = start + Math.floor((end - start) / 2);
        if (target == arr[mid]) {

            return mid;
        }
        if (target > arr[mid]) {
            return binarySearch(arr, target, mid + 1, end)

        }
        if (target < arr[mid]) {
            return binarySearch(arr, target, start, mid - 1)
        }
    }
    return -1
}
let arr3 = [2, 3, 4, 10, 40]
console.log(binarySearch(arr3, 4));
console.log(binarySearch(arr3, 5));
console.log(binarySearch(arr3, 40));

//task 8
function occurrence(arr, target, count=0, i=0) {
    if (i == arr.length) {
        return count;
    }

    if (arr[i] == target) {
        count++
    }
    return occurrence(arr, target, count, i + 1);


}
console.log(occurrence([1, 2, 3, 4, 2, 5, 2, 3, 6,], 2))
console.log(occurrence([1, 2, 3, 4, 2, 5, 2, 3, 6,], 3))
console.log(occurrence([1, 2, 3, 4, 2, 5, 2, 3, 6,], 7))