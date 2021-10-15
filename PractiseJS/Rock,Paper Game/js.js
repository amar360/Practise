var str = "In this tutorial, you’ll learn how to find the longest word in a String with JavaScri This can be useful if you want to pick out or limit the size of words in a string and sometimes gets set as a coding challenge for interviews. hi";

var longestWord = (str) => {


    var textArray = str.split(' ');
    var sortArray = textArray.sort((StrA, StrB) => {
        return StrB.length - StrA.length;

    }
    )

    return sortArray[0];

}

var totalWords = (str) => {

    var total = str.split(' ');
    return total.length;
}

// document.getElementById('demo').innerHTML = longestWord(str);
// document.getElementById("demo1").innerHTML = totalWords(str);

console.log(longestWord(str));


