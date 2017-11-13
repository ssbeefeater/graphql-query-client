require('babel-register')();
var chai = require('chai');
var sinon = require('sinon');

global.expect = chai.expect;
global.chai = chai;
global.sinon = sinon;
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// ************Chai plugins****************
// ************/Chai plugins****************
