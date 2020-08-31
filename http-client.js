const http = require('http');

http.get(process.argv[2], request => {
    request.setEncoding('utf-8');
    request.on('data', data => {
        console.log(data);
    });
})