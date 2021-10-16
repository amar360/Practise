/* 
 1) Convert Object into Array and Print out its Values
 2) Reserve String
 3) clone an Object and print Clone_Object.a.b.c
 4) Merge 2 Array and sort in Descending Order
 5) add elements in an array
 6) Double the even number in an array
 7) filter out cities with more than 50M population.
 8) Select only the dogs
    Translate their ages into dog years (multiply them by seven)
    Sum the results
 9) Make this work adding(2)(3)
 10) Math.min , Math.max
 11) find missing number in array [1-100]
 12) find length of string/integer
 13) How many times maximum number comes.
 14) Convert '09:30AM' to 24 hours format
 15) print out [1-100], multiple of 3 as fizz, multiple of 5 as buzz 3x5 as fizzbuzz
 16) greatest common diviser of 4 , 6 // 2
 17) n kids, y toys, i start position... who gets the last TOY
 18) Average of an array
 
*/


const obj = {
    a: 1,
    b: 3
}

const objArray = Object.entries(obj);
const values = Object.values(obj);
console.log(objArray);
console.log(values);
console.log('---------------------------------');

const string1 = 'i am a good boy';

const reverseString = string1.split('').reverse().join('');
console.log(reverseString);
console.log('---------------------------------');

cloneObj = (obj) => {
    const cloneObj = obj;
    console.log(cloneObj);
    return cloneObj.a.b.c;
}

const obj_1 = {
    a: {
        b: {
            c: 1
        }
    }
};

console.log(cloneObj(obj_1));
console.log('---------------------------------');

const array1 = [1,2,5,4,5];
const array2 = [4,5,6,7,8,9];

const array3 = [...new Set([...array1, ...array2])].sort((a,b) => b - a);

const array1Object = { ...array1 }
console.log(array1Object)
console.log(array3);

console.log('---------------------------------');

sumSquaresOfValuesDivisibleBy3 = (arr) => {
    let newArr = [];
    
    for(let i = 0 ; i< arr.length ; i++){
        if (arr[i] % 3 === 0)
        newArr.push(arr[i]*arr[i]) 
    }

    console.log(newArr);

    return newArr.reduce((a,b) => a + b )
}

const input_array = [6, 7, 9, 11, 14, 18, 27];
console.log(sumSquaresOfValuesDivisibleBy3(input_array));
console.log('---------------------------------');

let dataPop = [
    {
      country: 'China',
      population: 1409517397,
    },
    {
      country: 'India',
      population: 1339180127,
    },
    {
      country: 'USA',
      population: 324459463,
    },
    {
      country: 'Indonesia',
      population: 263991379,
    }
];

const filteredPop = dataPop.filter( pop => pop.population > 524459463 )
console.log(filteredPop);

console.log('---------------------------------');


let dataAnimal = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
  ];
const sumOfAges = dataAnimal
                .filter( animal => animal.type ==='dog' )
                .map(animal => animal.age*7)
                .reduce((a,b) => a + b)
console.log(sumOfAges);

console.log('---------------------------------');

addingNum = x => y => x + y
    


console.log(addingNum(2)(3));

console.log('---------------------------------');

const arrayNumbers = [1,2,5,4,5];

console.log(Math.min(...arrayNumbers))

console.log('---------------------------------');

const numbers = 1234567;

console.log(numbers.toString().length)
console.log('---------------------------------');


let arrayOneTo11 = [1,4,5,6,8,9,10,2,11,3];

const sumOfSorted = arrayOneTo11.sort((a,b) => a - b).reduce((a,b) => a+b);
const sumOfNumbers = (arrayOneTo11.length + 1) * ( ( arrayOneTo11.length + 1 ) + 1) / 2
const missingNumber = sumOfNumbers - sumOfSorted
console.log(sumOfSorted);
console.log(sumOfNumbers);
console.log(missingNumber);


console.log('---------------------------------');

let arr_number = [1,2,3,4,5,6,6,6,6,6,7,8,9,9];

const findMax = Math.max(...arr_number);
console.log(findMax);

let count = 0;

arr_number.forEach(num => {
    if(num === findMax) {
        count = count + 1;
    }
})

console.log(count);

console.log('---------------------------------');

for(let i = 1; i <=100 ; i++)
{
   if(i % 3 === 0) {
       console.log('fizz')
   }if(i % 5 === 0) {
    console.log('buzz')
}
else {
    console.log(i)

}

}

console.log('---------------------------------');

greaterNumberDivisor = (a , b) => {
    if(!a) return b;
    if(!b) return a;
    
    return greaterNumberDivisor(b , a % b)
}

console.log(greaterNumberDivisor(4, 8));

console.log('---------------------------------');

function lastPosition(k, t, p) {
    // t > k
    if (t <= k - p + 1) 
    return t + p - 1; 
    // k > t
    t = t - (k - p + 1); 

    return (t % k == 0) ? k : (t % k); 
}

let k = 4;
let t = 3;
let p = 4;

console.log(lastPosition(k,t,p));
console.log('---------------------------------');
