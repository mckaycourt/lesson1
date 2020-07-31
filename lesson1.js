const lessonOneA = () => {
    //Below I've declared a variable called hello set it equal to 'Hello World!' like so:
    //let hello = 'Hello World!';

    //Code here:
    let hello;

    //Don't worry about what's below this yet
    return hello;
};

const lessonOneB = () => {
    /*
    Variables can be all kinds of things. Here are some examples:

    Strings
        Like what we just did in Lesson One A we set our variable hello equal to a string.
        A string is text surrounded by either double quotes or quotes "" or ''.
        Just simple text
        Example:
            let myString = 'this is my string';

    Integers and Doubles
        Integers and Doubles are both numbers. An Integer is a whole number: 1, 2, 3, etc
        and a double is a number with a decimal point 1.2, 2.3, 3.4, etc.
        Just like strings however every variable in javascript is declared with the declaration let.
        Unless you don't want that variable to change then you would use const, but between you and me
        I use let for everything.
        Example:
            let myNum = 12;
            let myNum = 3.14;

    Boolean
        A boolean is either true or false and you'll see why that's important later.
        You literally type the word true or false without any quotes or anything.
        Example:
            let myBool = true;

    */
    //Code here, dont' edit the variable names:

    let myString;
    let myInt;
    let myDouble;
    let myBool;

    //Don't worry about what's below this yet
    return {
        myString,
        myInt,
        myDouble,
        myBool
    };
};

const lessonOneC = () => {
    /*
    Variables can be adjusted or edited any time you want!
    For example, say you wanted to set a variable equal to three and later
    change it to 5 you could do that!
    Example:
        let testing = 3;
        testing = 5;
    Another Example:
        let testing = 3;
        testing = testing + 2;

    You see there were two ways that i adjusted the testing variable.
    In the first example I just set it again using the = operator.
    In the second example I added 2 to the variable.

    Notice how you can set a variable equal to itself with an adjustment.
    The right side of the = is always processed first.
     */
    //I'll declare both variables for you and you edit both using both the ways
    //we talked about. Make both variables equal 25;
    let test1 = 6;
    let test2 = 8;
    //Give it a try both ways:



    //Don't worry about what's below this yet
    return {
        test1, test2
    }
};

module.exports = {
    lessonOneA,
    lessonOneB,
    lessonOneC,
};