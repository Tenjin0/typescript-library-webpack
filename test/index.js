var expect = require('chai').expect;
var jsdom = require('mocha-jsdom')
jsdom()
var mylib = require('../lib/greeter.min.js');

// describe('Greeter', function () {
//     it('is contained within Greeter as CommonJS', function () {
//         expect(mylib).to.be.an('object');
//         expect(mylib.Greeter).to.not.be.null;
//     });

//     it('can be instantiated', function () {
//         var t = new mylib.Greeter('foo');
//         expect(t).to.be.defined;
//     });
// });