// Array Spilce
// sum of array = 10
let array = [2, 4, 5, 1, 7, 5, 2, 1];
let newArray = array.splice(2, 2);
console.log(array, newArray);

// array splice -- Add
let num = [10, 11, 12, 12, 15];
let newNum = num.splice(3, 1, 'Amar', 'Tariq');
console.log(num, newNum);

// array slice
let array2 = [10, 11, 12, 13, 14];
let arraySlice = array2.slice(2, 5); // start - end
console.log(array2, arraySlice);

// indexOf returns index if found
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
console.log(fruits.indexOf('dates'));
console.log(fruits.indexOf('oranges'));
console.log(fruits.indexOf('pears'));

// deepest array
let nestedArray = [['deep'], [['deeper'], ['deeper']], [[['deepest'], ['deepest']], [[['deepest-est?']]]]];
console.log(nestedArray[2][1][0][0][0]);

const input = [
  {
    title: 'some title',
    channel_id: '123we',
    options: [
      {
        channel_id: 'abc',
        image: 'http://asdasd.com/all-inclusive-block-img.jpg',
        title: 'All-Inclusive',
        options: [
          {
            channel_id: 'dsa2',
            title: 'Some Recommends',
            options: [
              {
                image: 'http://www.asdasd.com',
                title: 'Sandals',
                id: '1',
                content: {},
              },
            ],
          },
        ],
      },
    ],
  },
];

console.log(findNestedObj(input, 'id', '1'));

function findNestedObj(entireObj, keyToFind, valToFind) {
  let foundObj;
  JSON.stringify(entireObj, (_, nestedValue) => {
    if (nestedValue && nestedValue[keyToFind] === valToFind) {
      foundObj = nestedValue;
    }
    return nestedValue;
  });
  return foundObj;
}

// factorial
function factorialize(num) {
  return num < 2 ? 1 : num * factorialize(num - 1);
}
console.log(factorialize(3));

// ends with 'sub string'
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}
console.log(confirmEnding('Bastian', 'an'));

// repeat string NUM times
function repeatStringNumTimes(str, num) {
  return num === 0 ? '' : str + repeatStringNumTimes(str, num - 1);
}
console.log(repeatStringNumTimes('*', 3));
console.log(repeatStringNumTimes('abc', 0));

// 'truth Test' returns ture if test is passed else false
function findElement(arr, fn) {
  return arr.some((num) => {
    if (fn(num)) {
      return num;
    }
  });
}
console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

// Title Case a Sentence
function titleCase(str) {
  let newStr = str.split(' ').map((val) => {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return newStr.join(' ');
}
console.log(titleCase("I'm a little tea pot"));

// Prototype Example
Array.prototype.myUcase = function () {
  const UArray = [];
  for (let fruit of this) {
    UArray.push(fruit.toUpperCase());
  }
  return UArray;
};

const myFruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(myFruits.myUcase());

// Prototype MAP function
Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let num of this) {
    newArray.push(callback(num));
  }
  return newArray;
};
const arr = [1, 2, 3].myMap((num, i, myNum) => num * 2);
console.log(arr);

// Copy each element of  the first array into the second array, in order.
function frankenSplice(arr1, arr2, n) {
  let newArr = [...arr2];
  newArr.splice(n, 0, ...arr1);
  return newArr;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// Remove all falsy values from an array.

function bouncer(arr) {
  return arr.filter(Boolean);
}
console.log(bouncer([7, 'ate', '', false, 9]));

// get the Index

function getIndexToIns(arr, num) {
  let newArr = [...arr];
  let getIndex = newArr
    .sort((a, b) => a - b)
    .indexOf((element, index) => {
      if (element > num) {
        return index;
      }
    });
  return getIndex;
}
console.log(getIndexToIns([60, 40, 20, 70], 60));

// split array in 2D

function chunkArrayInGroups(arr, size) {
  let newArr = [];

  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2));

// concat adds easily

let arr3 = [1, 2, 3];
console.log(arr3.concat([1, 2, 4]));

// sort alpha

function reverseAlpha(arr) {
  return arr.sort((a, b) => {
    return a > b ? 1 : -1;
  });
}
console.log(reverseAlpha(['c', 'b', 'a', 'd', 'e']));

// Currying function

function curried(x) {
  return function (y) {
    return x + y;
  };
}

let cur = curried(1);
console.log(cur(3));
console.log(curried(1)(2));

// Sum All Numbers in a Range

function sumAll(arr) {
  let sum = 0;
  let newArr = [...arr].sort((a, b) => a - b);
  for (let i = newArr[0]; i <= newArr[1]; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([5, 10]));

// difference of 2 arrays

function diffArray(arr1, arr2) {
  function check(a, b) {
    return a.filter((item) => b.indexOf(item) === -1);
  }
  return [...check(arr1, arr2), ...check(arr2, arr1)];
}

console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]));

// remove arguments
function destroyer(arr, ...args) {
  console.log(Object.values(arguments));
  console.log(Object.values(arguments).slice(1));
  return arr.filter((item) => args.indexOf(item) === -1);
}

console.log(destroyer([1, 2, 3, 1, 2, 3, 4], 2, 3, 1));

// replace string

function myReplace(str, before, after) {
  return str.replace(before, after);
}

console.log(myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped'));

// DNA paring AT TA GC CG

function pairElement(str) {
  let pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };
  var arr = str.split('');
  return arr.map((x) => [x, pairs[x]]);
}
console.log(pairElement('GCAT'));

// Find the missing letter in the passed letter range and return it.

function fearNotLetter(str) {
  console.log('a'.charCodeAt());
  console.log(String.fromCharCode(97));
}
console.log(fearNotLetter('abcdefghjklmno'));

// Union of unique Array

function uniteUnique(...arr) {
  return [...new Set([].concat(...arr))];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// calculate tips and total

billCalculator = (billArray) => {
  const tipArray = [];
  const totalBill = [];
  let tip = 0;
  billArray.forEach((bill) => {
    if (bill <= 50) {
      tip = bill * 0.2;
      tipArray.push(tip);
    }
    if (bill > 50 && bill <= 100) {
      tip = bill * 0.15;
      tipArray.push(tip);
    }
    if (bill > 100) {
      tip = bill * 0.1;
      tipArray.push(tip);
    }
  });
  for (let i = 0; i < billArray.length; i++) {
    totalBill[i] = tipArray[i] + billArray[i];
  }
  console.log(tipArray);
  console.log(totalBill);
};

const bills = [25, 55, 255];

billCalculator(bills);

// Interface

var car = new Vehicle('Honda', 'white', '2010', 'UK');
console.log(car, car.model);

function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}

// TALLY

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

const count1 = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1;
  return tally;
}, []);

console.log(count1);

// Tally with REDUCE

const fruitBasket2 = ['banana', 'banana', 'cherry'];

const count2 = fruitBasket2.reduce((tally, fruit) => {
  console.log(tally, fruit, tally[fruit]);
  if (!tally[fruit]) {
    tally[fruit] = 1;
  } else {
    tally[fruit] = tally[fruit] + 1;
  }
  return tally;
}, {});

console.log(count2);
