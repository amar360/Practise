// Session Details:

// Overall Duration of Session: 50 Minutes

// You are allowed to use any IDE (NetBeans, Eclipse, IntelliJ, Visual Studio) to develop the code for the question asked.
// Then you can copy the code to this page.

// Anywhere if you feel that you are not comfortable with the question you can update me and we can skip the question or section.

// Question:

// What is equivalent of the following using React.createElement? 

// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );

// Solution;

// React.createElement('span', )

// Question:

// Given a string, reverse each word in the sentence

// Welcome to this Javascript Guide!

// Output:

// emocleW ot siht tpircsavaJ !ediuG
/* 
let sen = 'Welcome to this JavaScript Guide!';

let str = sen.split('').reverse().join('');

let arrStr = str.split(' ')
let resverseStr = arrStr.reverse().join();
console.log(resverseStr) */

// Question:

// Write a function that would allow you to do this. 

// var addSix = createBase(6);



function addSix(num) {
    let base6 = num + 6 // convert to bi
    console.log(base6);
    return base6;
}

addSix(10); // returns 16
addSix(21); // returns 27

Question:

What can you tell me about JSX ?

    // javasxript XML 

    Why should not we update the state directly ?

        What is useState() in React ?

            // hook
            Question :

            How would you check if a number is an integer ?

                let aNum = 15;

let check = aNum.match(/\./)

Question:

Given two strings, return true if they are anagrams of one another:

Elbow and Below-- -> true
Taste and State-- -> true
Car and Arc-- -> true
Rat and Tat-- -> false

Solution:

function check(s1, s2) {
    console.log(s1, s2);
    let s1Array = s1.toLowerCase().split('');
    let s2Array = s2.toLowerCase().split('');
    let combineArr = [...s1Array, ...s2Array];
    let uniqueVal = [... new Set(combineArr)];

    return uniqueVal.length === s1.length ? true : false



}

console.log(check('Rat', 'Tat'));

Node Js Section:

Question:

How to make Post request in Node.js ?

    Solution :

    //express, app()

    app.post('./login', (req, res) => {

        try {
            req.params.body = {
                userName: userName,
                password: password
            }
            res.status(200).send();
        }
        catch {
            throw err;
        }

    })


Question:

Can you create HTTP Server in Nodejs, explain the code used for it ?

    server.js =>

        // express, app

        app.listen(prcoess.env.PORT);

    // NESTJS => expiress by default..

    // wellamrk http server

    wellmark.http.get()






















