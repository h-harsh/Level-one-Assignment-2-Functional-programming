const sampleArray = [1,2,3,4,5,6]
// Question 1
// Function which return odd and even
const isEven = input => input % 2 === 0 ? true : false;

//(a) function to find out sum of odd numbers
const oddNumberSum = (numbers) => {
return numbers.reduce((acc, curr) => isEven(curr) === false ? acc + curr : acc ,0)
};

console.log(oddNumberSum(sampleArray))

//(b) sum of all number at odd indices
const oddIndicesNumberSum = (numbers) => {
  const indicesFilter = numbers.filter((number, index) => {
    return index % 2 !== 0
  } )
  let sum = indicesFilter.reduce(function (acc, cur) {
  return acc + cur
  }, 0)
  return sum;
}
console.log(oddIndicesNumberSum(sampleArray))

//(c) Find biggest number in array
const biggestNumInArray = (param) => {
  let big = 0
  param.map(item => {
    if(item > big){
      big = item 
    } 
  })
return big
}

console.log(biggestNumInArray(sampleArray))

//(d) find the number divisible by any number or Not
const divisibleTest = (number, divider) => number % divider === 0 ? 'Divisible' : 'Not Divisible';


//(e) in an array odd numbers are incremented by one and even are less by one
const oddEvenSwap = (array = [ ]) => {
  const newArray = array.map(item =>{
    if(isEven(item)){
      return item - 1
    } else {
      return item + 1
    }
  })
  return newArray
}

console.log(oddEvenSwap(sampleArray))

//(f) Object with sum of all odd and even numbers
const oddEvenSum = (numbers) => {
  let oddSum = 0;
  let evenSum = 0;
  numbers.map(number => {
    if(isEven(number)){
      evenSum += number
    } else {
      oddSum += number
    }
  })
  return { "OddSum" : oddSum, "EvenSum" : evenSum}
}
console.log(oddEvenSum(sampleArray))

console.log("Question 2 will start now")

// Question 2
// (a) 
const strLengCategory = (arr) => {
  let obj = {}
  arr.map(a => {
    if(obj[a.length]){
      obj[a.length] = obj[a.length] + 1 
    }  else {
      obj[a.length] = 1
     }
  })
  return obj
}

console.log(strLengCategory(['apple','harsh','papaya','salmalllla','ladyfinger']))


// (b) strings which have vowels

const vowels = ['a','e','i','o','u'];
const list = ['apple','harsh','papaya','watermelon','ladyfinger','bcfgkl']

const handlers = str => {
  const arrayString  = str.split('');
  let temp = false;
  arrayString.some(a => vowels.forEach(b => {if(a === b) {temp = true} } ))
  return temp;
}

const vowelFinder = (inputs) => {
  return resultArray = inputs.filter(item => {
    return handlers(item) === true;
  })
}

console.log(vowelFinder(list))


// (c) return an array of objs key = item name and value as no. of char
const arrange = (...params) => {
  let outputArray = params.map(item => {
    return  { [item] : item.length}
  })
  return outputArray
}


//// The one homeWork Question
console.log("The one homework")
const increment = num => num + 1;
const multiply = multi => multi * multi;

const reducer = (num, func) => {
  return func(num)
}

const compose = (...param) => n => param.reduce(reducer, n)

const incrementMultiply = compose(increment, multiply, increment)  

console.log(incrementMultiply(2))
