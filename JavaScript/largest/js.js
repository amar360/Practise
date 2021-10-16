const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.';


var textArray = text.split(' ');


var sortArray = textArray.sort((StrA , StrB ) => {
    return StrB.length - StrA.length;


})


//console.log('1. '+text);

//console.log('2. '+textArray);

console.log(sortArray[0]);
console.log(sortArray[0].length);


document.getElementById('p1').innerText = sortArray[0];

    