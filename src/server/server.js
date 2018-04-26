#!/usr/bin/env node

import app from './app'
import http from 'http'

const port = normalizePort(process.env.API_PORT || '3050')
app.set('port', port)

const server = http.createServer(app)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

function normalizePort(value) {
  const port = parseInt(value, 10)

  if (isNaN(port)) {
    return value
  }

  if (port > -1) {
    return port
  }

  return false
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  // debug('Listening on ' + bind);
  console.log('Webserver started on ', port)
}
