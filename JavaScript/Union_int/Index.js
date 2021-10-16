// remove duplicates

const array1 = [... new Set([1, 2, 3, 3, 4])];   // 1,2,3,4

// const SetArray1 = [... new Set(array1)];                    // 3,4

const array2 = [3, 4, 5, 6, 7, 8];             // 3,4,5,6,7,8

//Union of both Arrays
let union = [... new Set([...array1, ...array2])];

// let unionSet = [... new Set(union)];
//console.log(SetArray1);
//console.log(array2);

// console.log('Union of both Arrays : ' +union);

// console.log(unionSet);


// Intersection and Union of Both Arrays

let intersection = array1.filter(a => array2.includes(a));

// difference of 2 arrays
let diff = [...array1.filter(b => !array2.includes(b)), ...array2.filter(c => !array1.includes(c))];


// Union and intersection
console.log(union + "\n" + intersection);

// DOM statements
document.getElementById('demo').innerHTML = "Array 1: [" + array1 + "]<br />Array 2: [" + array2 + "]";

document.getElementById('UI').innerHTML = "Union is " + union +"<br />Intersection is " + intersection +"<br />Difference is: " + diff;


// button -> intersection of arrays 
const intersect = () =>
    document.getElementById('in').innerHTML = intersection;

//copy field 1 to feild 2

let CopyField1 = () =>
    document.getElementById('field2').value = document.getElementById('field1').value;




