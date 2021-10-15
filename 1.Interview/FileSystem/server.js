var fs = require('fs');

fs.writeFile('newfile.txt', 'Learn', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
});

fs.readFile('newfile.text')