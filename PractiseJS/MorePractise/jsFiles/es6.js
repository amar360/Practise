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
 13) How many time maximum number comes.
 14) Convert '09:30AM' to 24 hours format
 15) print out [1-100], multiple of 3 as fizz, multiple of 5 as buzz 3x5 as fizzbuzz
 16) greatest common diviser of 4 , 6 // 2
 17) n kids, y toys, i start position... who gets the last TOY

*/
const x = {
    a:1,
    b:2
}

const completeObject = Object.entries(x);
const objVal = Object.values(x);
const objKeys =  Object.keys(x);

console.log('1) '+ completeObject + ' ' + objVal + ' ' +objKeys + '-----------------------------------');


const x1 = 'man';

const reverseString = x1.split('').reverse().join('');

console.log(`2) ${reverseString}
-----------------------------------`);

const obj = {
    a: {
        b: {
            c: 1
        }
    }
};

const cloneObj = JSON.parse(JSON.stringify(obj));
const cloneObj_2 = Object.assign({}, a);

console.log(`3) ${cloneObj.a.b.c}
-----------------------------------`);


const arr1 = [1,2,5,4,5];
const arr2 = [4,5,6,7,8,9];

const arr3 = [...arr1, ...arr2];
const uniqueArray = [...new Set(arr3)];
console.log(uniqueArray);
console.log(arr3)
console.log(`${arr3.sort().reverse()}
-----------------------------------`);

const obj1 = {
    x2:1,
    getX(){
        // const that = this;  2nd Solution
        const innner = () => { // function(){ 
            console.log(this.x2);
        }
        innner(); // innner.bind(this)(); 3rd Sol
    }
};
obj1.getX();
console.log('-----------------------------------');


function add(number) {
   return number + 2
}
console.log(add(2));

const addd = num => num + 2;
console.log(addd(2));
console.log('-----------------------------------');



/* let array2 = [1,2,3,4,5];
// add

const result =  array2.reduce(  ) 
 */

const arr = [1,2,3,4];

const plus5 = arr.map((val, i, arr) => {
    return val + 5;
})
console.log(plus5);
console.log('-----------------------------------');

let arr5 =  arr.map((val, i , arr) => {

    return {
        value: val,
        index: i
    };
})
console.log(arr5);
console.log('-----------------------------------');

let evenArr = arr.map((v,i,a) =>  v % 2 === 0 ? v*2 : v
)
console.log(evenArr);
console.log('-----------------------------------');


let data = [
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

const data50 = data.filter(v => v.population > 524459463);
console.log(data50);
console.log('-----------------------------------');

let data1 = [
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

console.log(data1);
console.log('-----------------------------------');

let sumData = data1.filter(a => a.type === 'dog').map(b => b.age * 7 );

console.log(sumData);
console.log('-----------------------------------');

let ages1 = data1
.filter( a => 
    a.type === 'dog'
).map( a => 
    a.age * 7
).reduce( (a , b)  => a + b );

console.log(ages1);

console.log('-----------------------------------');

let isDog = a => a.type === 'dog';
let dogYears = a => a.age * 7;
let sumOfAges = (a , b) => a + b;

let ages2 = data1
            .filter(isDog)
            .map(dogYears)
            .reduce(sumOfAges);


console.log(ages2);

console.log('-----------------------------------');

let adding = x => y => x + y;

console.log(adding(2)(3));

console.log('-----------------------------------');

let array3 = [1,2,3,4,5];
console.log(Math.min(...array3), Math.max(...array3));

console.log('-----------------------------------');

let array4 = [4,5,2,1,6,7,8,9,10];

let arraySort = array4.sort((a , b) => a - b);
 console.log(arraySort);

for (let i = 1; i < arraySort.length; i++)
{
    if( arraySort[i - 1] !== i ) {
        console.log(i);
        break;
    }
}
console.log('-----------------------------------');

let xx = 1234;

console.log(`12) ${xx.toString().length}`);

console.log('-----------------------------------');

let array5 = [3,2,2,2,4,2,4];

let count = 0;

let maxNumber = Math.max(...array5);

array5.forEach(x => {
    if (x === maxNumber)
    {
        count = count + 1;
    }
})

console.log('13) ' + count);

console.log('-----------------------------------');

let time = '9:30PM';

let splitTime = time.split(':');

let hours = parseInt(splitTime[0]);
let minutes = splitTime[1].includes('AM') ? splitTime[1].replace('AM','') : 
              splitTime[1].replace('PM','');

splitTime[1].includes('AM') ? console.log(`Time is 0${hours}:${minutes}`) :
console.log(`14) Time is ${hours + 12}${minutes}
-----------------------------------`)

const toHex = num => (num).toString(16).toUpperCase();

console.log(`${toHex(2)}
-----------------------------------`)

function fizzBuzz() {
for( let i = 1; i <= 15; i++)
{
    if( i%3 === 0 ) {
        console.log('fizz');
    }
    if (i%5 === 0) {
        console.log('buzz');
    }
    else {
        console.log(i);
    }
}
};

fizzBuzz();

console.log('-----------------------------------');

const greatestDivisor = ( a ,b ) => {
    console.log(a , b);

    let divisors = [];

    let min = Math.min(a , b);
    let max = a < min ? a : b;

console.log(`min is: ${min}
max is: ${max}`);

    for (let i = 1; i <= max ; i ++)
    {
        if ( min % i === 0 && max % i === 0) {
            divisors.push(i);
        }
    }
    console.log(divisors);
    console.log('17) ' + Math.max(...divisors));

}

greatestDivisor(12 , 24);
console.log('-----------------------------------');

/* // 5 , 3 , 2...

let kids = [1,2,3,4,5];
let toys = ['a','a','a','a','a','a'];
let position = 0;

let lastKid = (k, y, index) => {
    let kidsToy = [];
       for (let j = 0; j < y.length; j++) {
            kidsToy.push(y[j])
       }
    console.log(kidsToy);
}

lastKid(kids, toys, position); */

average = input => input.reduce( (a,b) => a + b )/input.length

const input = [3, 5, 9, 15];
let total = 0;
input.forEach( element => {
    total += element;
})
// console.log(total/input.length);
console.log(`18) ${average(input)} `);

// -----------------------------
function getActiveItems(obj) {
  
    const activeItems = obj.items.filter((item) => item.active === true);
    const effectiveDate = obj.effectiveDate; 
    
    activeItems.forEach((element) => {
      element.effectiveDate = effectiveDate;
    });
    return activeItems;
  }
  
  const dataaa = {
    items: [
      {
        name: "Item One",
        active: true,
      },
      {
        name: "Item Two",
        active: false,
      },
      {
        name: "Item Three",
        active: true,
      },
    ],
    effectiveDate: "6/21/2017",
  };
  
  console.log(getActiveItems(dataaa));
  
