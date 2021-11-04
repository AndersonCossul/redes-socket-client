import { io, Socket } from 'socket.io-client';

let socket: Socket | null;

const connect = () => {
  socket = io('http://localhost:4000', {
    transports: ['websocket'],
  });
};

const registerEvent = (eventName: string, callback: Function) => {
  if (socket) {
    socket.on(eventName, callback as any);
  } else {
    console.error('socket not initialized');
  }
};

const emitEvent = (eventName: string, payload: any, callback: Function) => {
  if (socket) {
    socket.emit(eventName, payload, callback);
  } else {
    console.error('socket not initialized');
  }
};

const disconnect = () => {
  if (socket) {
    socket.removeAllListeners();
    socket.disconnect();
    socket = null;
  }
};

export default {
  connect,
  registerEvent,
  emitEvent,
  disconnect,
};
