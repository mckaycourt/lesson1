const assert = require('assert');
const {lessonOneA, lessonOneB, lessonOneC} = require('./lesson1');

describe('LESSON ONE A', function () {
    describe('Testing the value of the hello variable', function () {
        it('Should return Hello World!', function () {
            assert.equal(lessonOneA(), 'Hello World!');
        });
    });
});

describe('LESSON ONE B', function () {
    describe('Testing the value of each variable', function () {
        let {myString, myInt, myDouble, myBool} = lessonOneB();
        it('myString should be a string', function () {
            assert.equal(typeof (myString), 'string');
        });
        it('myInt should be an Integer', function () {
            assert.equal(Number.isInteger(myInt), true);
        });
        it('myDouble should be a double', function () {
            assert.equal(Number(myDouble) === myDouble && myDouble % 1 !== 0, true);
        });
        it('myBool should be a boolean', function () {
            assert.equal(typeof (myBool), 'boolean');
        });
    });
});

describe('LESSON ONE C', function () {
    describe('Checking each variable equals 25', function () {
        let {test1, test2} = lessonOneC();
        it('test1 should equal 25', function () {
            assert.equal(test1, 25);
        });
        it('test2 should equal 25', function () {
            assert.equal(test2, 25);
        });
    });
});