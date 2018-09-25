var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
 it('respond with hello codebasetn to expressy', function(done) {

 //navigate to root and check the the response is "hello world"
 request(app).get('/').expect('hello codebasetn to ci-cd expressy!', done);
 });
});
