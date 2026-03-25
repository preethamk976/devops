const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Jenkins CI/CD Demo is Running!');
});
server.listen(3000, () => console.log('Server on port 3000'));
