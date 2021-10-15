var checkNumbers = (a,b) => {

    if(a===100 || b === 100 || (a+b) === 100) 
    {
        return true;
    }
    else{
        return false;

    }

}
//console.log(checkNumbers(100,0));
//console.log(checkNumbers(20,80));

/* ------------------------------------------------------------ */

var urlExt = (url) => {

    return url.slice( url.lastIndexOf('.'));
}
// console.log(urlExt('index.co.html'));

/* ------------------------------------------------------------ */

changeChar = (str) => 
    str.split('')
    .map( char => String.fromCharCode( char.charCodeAt(0) + 1 ))
    .join('');


// console.log(changeChar("abcdef"));

/* ------------------------------------------------------------ */

var NewString = (str) => str.length < 3 ? str 
: str.slice(0,3) + str.slice(-3);

// console.log(NewString("Quick brown fox"));
// console.log(NewString("Ok"));

/* ------------------------------------------------------------ */

var close = ( a,b ) => (100 - a) < (100 - b) ? a : b;

//onsole.log(close(99,98));
//console.log(close(1,2));

/* ------------------------------------------------------------ */

var even = (array) => array.filter( num => num % 2 === 0 ).length;

// console.log(even([2,3,4,3,5,6,7,4,4]));

/* ------------------------------------------------------------ */
// leap year?

var leapyear = (year) => year % 4 === 0;

// console.log(leapyear(2012));

/* ------------------------------------------------------------ */
// change CSV file into an 2D array.

var str = `amar,murad,tariq
saqib,nawaz
rabia,toor`;

var convertCSV = (csv) => 
    csv.split('\n').map( row => row.split(','));

//console.log(convertCSV(str));

/* ------------------------------------------------------------ */

var RandomNumber = () => Math.floor(Math.random() * 16).toString(16);

var RandomHexColor = () => '#' + Array.from({length:6})

.map(RandomNumber).join('');
 

// console.log(RandomHexColor());

/* ------------------------------------------------------------ */

//var str = "amar";
//aamr

var Aplha = (name) => 

name.split('').sort((a,b) => a < b ? -1 : 1 ).join('');

/* ------------------------------------------------------------ */

var instance = (str) => [... new Set(str.split(''))];

// console.log(instance('aaabbcc'));

document.getElementById('demo').innerHTML = instance();

/* ------------------------------------------------------------ */


// setnce. 2 palardim, longest palar
