const net = require('net');

const localPort = local-port;
const remoteHost = 'server-ip';
const remotePort = outbound-port;

const server = net.createServer((localSocket) => {
  const remoteSocket = net.createConnection({
    host: remoteHost,
    port: remotePort
  });

  localSocket.on('data', (data) => {
    remoteSocket.write(data);
  });

  remoteSocket.on('data', (data) => {
    localSocket.write(data);
  });

  localSocket.on('close', () => {
    remoteSocket.destroy();
  });

  remoteSocket.on('close', () => {
    localSocket.destroy();
  });

  localSocket.on('error', (err) => {
    console.error(`Local socket error: ${err}`);
  });

  remoteSocket.on('error', (err) => {
    console.error(`Remote socket error: ${err}`);
  });
});

server.listen(localPort, () => {
  console.log(`Server listening on port ${localPort}`);
});
