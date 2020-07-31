## Before you begin

Make sure you run:

`npm install`

This will get all the things we need to run your tests.

## To run your tests for yourself run:

`npm test`

## Lesson Instructions

### 1A

Below I've declared a variable called hello and set it equal to 'Hello World!' like so:
    
`let hello = 'Hello World!';`

Try to do the same

### 1B

Variables can be all kinds of things. Here are some examples:
    
#### Strings
Like what we just did in Lesson One A we set our variable hello equal to a string.
A string is text surrounded by either double quotes or quotes "" or ''.
Just simple text
Example:

`let myString = 'this is my string';`

#### Integers and Doubles
Integers and Doubles are both numbers. An Integer is a whole number: 1, 2, 3, etc
and a double is a number with a decimal point 1.2, 2.3, 3.4, etc.
Just like strings however every variable in javascript is declared with the declaration let.
Unless you don't want that variable to change then you would use const, but between you and me
I use let for everything.
Example:

`let myNum = 12;`

Or for a double:

`let myNum = 3.14;`

#### Boolean
A boolean is either true or false and you'll see why that's important later.
You literally type the word true or false without any quotes or anything.
Example:

`let myBool = true;`

### 1C

Variables can be adjusted or edited any time you want!
For example, say you wanted to set a variable equal to three and later
change it to 5 you could do that!
Example:
```
let testing = 3;
testing = 5;
```

Another Example:

```
let testing = 3;
testing = testing + 2;
```

You see there were two ways that i adjusted the testing variable.
In the first example I just set it again using the = operator.
In the second example I added 2 to the variable.

Notice how you can set a variable equal to itself with an adjustment.
The right side of the = is always processed first.

I'll declare both variables for you and you edit both using both the ways we talked about.

Make both variables equal 25;

### 1D

You are not just limited to addition. There's subtraction (-), multiplication (*), and division(/).
Repeat what you learned in the second half of 1C except with these new operators.

### Bonus 1

There are a lot of shortcuts developers have come up for themselves. You'll quickly find they must hate typing more than they have to. When you are modifying a variable based off its current value we learned earlier you could do it like this:

`test = test + 5`

Instead of typing all that you can use this short syntax:

`test += 5`

Same thing just a shortcut! Plus it works with all the operators we talked about earlier!

Try to get the variable shortCutTest to 72 by using two operators and this new method.

### Bonus 2

So far we've talked about operators that make a lot of sense. You've used all of these since elementary school. There's another operator that comes in handy for developers, it's a shortcut to find what's leftover after division. For example, 8 / 3 is two with 2 left over because 3 goes into 8 twice.

The operator for this action is % and is called modulus. The above example is represented by the following line of code:

```
let test = 8;
let remainder = test % 2;
```

For this exercise think about what 23 % 5 is and set the variable answer to it.