const express = require('express');
const http = require('http');
const assert = require('assert');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);

const wss = require('../../src/chat/server');

describe('Chat server', function () {
    before(function () {
        server.listen(1337);
        wss(server);
        this.websocket1 = new WebSocket('ws://localhost:1337/', 'json');
        this.websocket2 = new WebSocket('ws://localhost:1337/', 'json');
    });

    it('Connect and join', function (done) {
        this.websocket1.on('open', () => {
            this.websocket1.send('/join test1');
        });

        this.websocket2.onmessage = (event) => {
            let data = JSON.parse(event.data);

            assert.equal(data.username, 'Server');
            done();
        };
    });

    it('Send message', function (done) {
        this.websocket1.send('hej');

        this.websocket2.onmessage = (event) => {
            let data = JSON.parse(event.data);

            assert.equal(data.username, 'test1');
            done();
        };
    });

    it('Client quit', function (done) {
        this.websocket1.close();

        this.websocket2.onmessage = (event) => {
            let data = JSON.parse(event.data);

            assert.equal(data.message, 'test1 lämnade');
            done();
        };
    });

    after(function () {
        server.close();
    });
});
