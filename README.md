# :rocket: TCP Forwarding Server

This Node.js application implements a Simple TCP forwarding server that allows forwarding of network traffic between two endpoints.

## Usage

## 1. Clone the repository:

```bash
git clone https://github.com/DarkZo0m/TCPForwarding
```

## 2. Install dependencies:
```bash
cd tcp-forwarding
npm install net
```

## 3. Configure the server
```javascript
const localPort = local-port;
const remoteHost = 'server-ip';
const remotePort = outbound-port;
```

## 4. Start the code
```bash
node index.js
```
