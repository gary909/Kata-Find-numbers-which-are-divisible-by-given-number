function divisibleBy(numbers, divisor){
 let myArr = [];
 for (let i = 0; i < numbers.length; i++){
     if(numbers[i] % divisor == 0) {
        myArr.push(numbers[i])
     }
 }
 return myArr;
}

console.log(divisibleBy([1,2,3,4,5,6], 2)); // Return [2, 4, 6]
console.log(divisibleBy([1,2,3,4,5,6], 3)); // Return [3, 6]
console.log(divisibleBy([0,1,2,3,4,5,6], 4)); // Return [0, 4]
console.log(divisibleBy([0], 4)); // Return [0]
console.log(divisibleBy([1,3,5], 2)); // Return []