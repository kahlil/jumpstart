var fs = require('fs'),
    connect = require('connect'),
    port = typeof process.argv[2] !== 'undefined' ? process.argv[2] : 8080;

connect()
    .use(connect.logger('dev'))
    .use(connect.favicon('favicon.ico'))
    .use(connect.compress())
    .use(connect.static(__dirname))
    .use(function(req, res, next){
        if (req.url === '/') {
            req.url = '/index.html';
        }
    })
    .listen(port);

console.log('h5bp server on crack launched at port : ' + port);