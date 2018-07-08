const assert = require('assert');
const server = require('../../../index');
const io = require('socket.io-client');

const options = {
  forceNew: true
};

describe('first test', function() {
  it('first helper test', function(done) {
    const socket = io('http://localhost:8080/chat', options);

    socket.on('connect', function() {
      socket.emit('join-as-user', { roomId: 'id', name: 'David' }, status => {
        assert.equal(status, 'Waiting for the next available agent');
        // socket.disconnect();

        done();
      });
    });
  });
});
