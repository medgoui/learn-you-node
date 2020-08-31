const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(dir, (err, list) => {
    if(err){
        console.log(err);
    }
    list.forEach(file => {
        if(path.extname(file) === extension){
            console.log(file);
        }
    })
})