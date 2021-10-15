var sentence = 'Ann-a3?';

console.log(sentence.length);

var isPalindrome = (str) => {

    str = str.toLowerCase().replace(/\W/g, '');
console.log(str);
    console.log(str);
    console.log(str[0])
    console.log(str[str.length - 1]); 
    for(let i=0 ; i<=str.length ; i++)
    {
        if(str[i] !== str[str.length - 1 - i] )
            return false;

        else
        return true;
    }

}
console.log(isPalindrome(sentence));

