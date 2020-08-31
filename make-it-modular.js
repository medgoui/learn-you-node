const mymodule = require('./mymodule');

const dirname = process.argv[2];
const ext = process.argv[3];


mymodule(dirname, ext, (err, list) => {
    if(err){
        console.log(err);
    }
    list.forEach(file => {
        console.log(file);
    })
});