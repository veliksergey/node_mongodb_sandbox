const app = require('../app');
const http = require('http');
const PORT = 3000;

app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Running on http://localhost/${PORT}`);
});
