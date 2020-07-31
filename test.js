const assert = require('assert');
const {lessonOneA, lessonOneB, lessonOneC, lessonOneD, bonusLessonOne, bonusLessonTwo} = require('./lesson1');

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

describe('LESSON ONE D', function () {
    describe('Checking each variable equals 20', function () {
        let {multiplicationTest, divisionTest, subtractionTest} = lessonOneD();
        it('multiplicationTest should equal 20', function () {
            assert.equal(multiplicationTest, 20);
        });
        it('divisionTest should equal 20', function () {
            assert.equal(divisionTest, 20);
        });
        it('subtractionTest should equal 20', function () {
            assert.equal(subtractionTest, 20);
        });
    });
});

describe('Bonus One', function () {
    describe('Get 15 to 72 using two of the shortcut methods discussed', function () {
        let result = bonusLessonOne();
        it('shortCutTest should equal 72', function () {
            assert.equal(result, 72);
        });
    });
});

describe('Bonus Two', function () {
    describe('What is 23 mod 5??', function () {
        let result = bonusLessonTwo();
        it('What is the answer??', function () {
            if (result !== 3) {
                console.log('Who knows??');
                assert.equal(true, false);
            } else {
                assert.equal(result, 3);
            }
        });
    });
});