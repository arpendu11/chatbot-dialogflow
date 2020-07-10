const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const bodyParser = require("body-parser");
const router = require('./router');
const queryDialogflow = require('./dialogflow');

const { addUser, removeUser, getUser } = require('./users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

io.on('connection', (socket) => {
    console.log('We have a new connection!!!');

    socket.on('join', ({ name }, callback) => {
      const { error, user } = addUser({ id: socket.id, name });
    
      if(error) return callback(error);

      socket.join(user.room);
    
      socket.emit('message', { user: 'chatty', text: `${user.name}, how can I help you ?`});

      callback();
    });
    
    socket.on('sendMessage', async (message, callback) => {
      const user = getUser(socket.id);
    
      io.to(user.room).emit('message', { user: user.name, text: message });
    
      callback();
    });

    socket.on('askChatty', async (message, callback) => {
      const user = getUser(socket.id);

      const response = await queryDialogflow(message);
      
      io.to(user.room).emit('message', { user: 'Chatty', text: response });
    
      callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if(user) {
            io.to(user.room).emit('message', { user: 'Chatty', text: `${user.name} has left.` });
        }
        console.log('User had left !!');
    });
});

server.listen(port, () => console.log(`Server has started on ${port}`));