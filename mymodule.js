const fs = require('fs');
const path = require('path');

const mymodule = (dir, extension, callback) => {
fs.readdir(dir, (err, list) => {
    if(err){
        return callback(err);
    }
    list = list.filter(file => {
        if(path.extname(file) === '.' + extension){
            return file;
        }
    })
    callback(null, list);
});
}
module.exports = mymodule;