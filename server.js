const http = require('http');
const fs = require('fs');
const PORT = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Error reading file');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(`<h1>${data}</h1>`); 
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});