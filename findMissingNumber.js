// Find missing number in array its done for 30 but will work for 100

const arr = [1, 4, 5, 6, 3, 7, 8, 9, 10, 11, 12, 27, 28, 29, 30, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 26, 24, 25]

const length = 30

let calculatedSum = 0;
for (let i = 0; i < arr.length; i += 1) {
    calculatedSum += arr[i]
}



const totalSUm = length * (length + 1) / 2;


console.log('missing number', totalSUm - calculatedSum)