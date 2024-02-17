require('dotenv').config();
import { createServer } from './server';

const port = process.env.PORT;
const server = createServer();

// Check if the server is running
server.listen(port, () => {
  console.log(`api running on http://localhost:${port}/`);
});
