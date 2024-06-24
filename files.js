const fs = require('fs');

// Reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
if (err) {
    console.log(err);
}
    console.log(data.toString());
})

console.log('last line');

// Writing files
fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
    console.log('file was written');
})

// Directories

// Deleting files