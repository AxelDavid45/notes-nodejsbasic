const http = require('http');
const port = process.env.PORT || 3000;

const router = (req, res) => {
    switch (req.url) {
        case '/hello':
            res.statusCode = 200;
            res.end('<h1>Welcome friend</h1>');
            break;
        default:
            res.statusCode = 404;
            res.end('<h1>404 Not Found</h1>');
            break;
    }

}

const server = http.createServer(router);

//Listen
server.listen(port,()=> {
    console.log(`Server listen in port ${port}`);
});