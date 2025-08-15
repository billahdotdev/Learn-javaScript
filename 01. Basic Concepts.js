#Variables
---------
  
  • Declaration: 

In JavaScript, variables are declared using the var, let, or const keywords.
  
  ◦ var (function-scoped variable): Historically used for variable declaration but is now 
    considered less preferable compared to let and const.
  
  ◦ let (block-scoped variable): Introduced in ES6 (ECMAScript 2015), preferred over var in most cases 
    due to its block-level scoping.
  
  ◦ const (constant): Also introduced in ES6, used to declare variables whose value cannot be reassigned.

• Initialization: Variables can be declared and assigned a value simultaneously.
  let x = 10;

• Scopes:
• Global Scope: Variables declared outside of any function or block have global scope and can be 
  accessed from anywhere in the code.
  var globalVar = 5;
  console.log(globalVar); // Output: 5

• Function Scope: Variables declared inside a function have function scope and can only be accessed within that function.
  function myFunction() {
     var localVar = 10;
     console.log(localVar); // Output: 10
  }
  myFunction();

// console.log(localVar); // Error: localVar is not defined
• Block Scope: Variables declared with let and const are block-scoped, meaning they are only accessible within 
the block (enclosed by {}) in which they are defined.
if (true) {
    let blockVar = 20;
    console.log(blockVar); // Output: 20
}
// console.log(blockVar); // Error: blockVar is not defined

• Hoisting:
JavaScript hoists variable declarations to the top of their scope during compilation, 
regardless of where the actual declaration is made.
 console.log(myVar); // Output: undefined
 var myVar = 10;
 This code is interpreted as:
 var myVar;
 console.log(myVar); // Output: undefined
 myVar = 10;
 Mutable vs. Immutable (const):
 Variables declared with const are not immutable, but their binding (reference) cannot be changed. 
For primitive data types (like numbers, strings), the value itself cannot be changed. However, 
for objects and arrays, properties and elements can be modified.
const PI = 3.14;
// PI = 3; // Error: Assignment to constant variable.

const person = {
    name: 'John',
    age: 30
};
person.age = 35; // Valid

                                                       Data Types:
Primitive Data Types:
1. Number:
• Represents numeric data.
• Can be integers, floating-point numbers, or special numeric values like Infinity, -Infinity, and NaN (Not-a-Number).
• Examples:
let integer = 10;
let float = 3.14;
let infinity = Infinity;
let nan = NaN;
2. String:
• Represents textual data.
• Enclosed in single (') or double (") quotes.
• Can contain any Unicode character, including escape sequences.
• Examples:
let str1 = 'hello';
let str2 = "JavaScript";
let escapedStr = 'This is a \'string\'';
3. Boolean:
• Represents a logical value indicating true or false.
• Used in control structures and conditional statements.
• Examples:
let isTrue = true;
let isFalse = false;
4. Undefined:
• Represents a variable that has been declared but not assigned a value.
• It's the default value of uninitialized variables.
• Example:
let x;
console.log(x); // Output: undefined
5. Null:
• Represents the intentional absence of any object value.
• Often used to indicate that a variable has no value.
• Example:
let y = null;
Object Data Types:
6. Symbol:
• Introduced in ES6 (ECMAScript 2015).
• Represents a unique identifier.
• Used mainly as object property keys to prevent name clashes.
• Example:
const symbol1 = Symbol('symbol1');
const symbol2 = Symbol('symbol2');
7. Object:
• Represents a collection of key-value pairs (properties).
• Used to store various data and functionalities.
• Examples:
let person = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'cooking']
};
8. Array:
• Represents a list-like collection of elements.
• Can hold elements of any data type, including other arrays and objects.
• Example:
let numbers = [1, 2, 3, 4, 5];
let mixedArray = [1, 'two', true];

Special Data Types:
• Function: Functions are first-class citizens in JavaScript. They can be assigned to variables, 
passed as arguments, and returned from other functions.
const add = function(a, b) {
    return a + b;
};
Type Conversion:
JavaScript performs implicit and explicit type conversion:
• Implicit: Automatically converts data types during operations.
const result = 10 + '5'; // '105'
• Explicit: Manually converts data types using functions like parseInt(), parseFloat(), String(), Boolean(), etc.
const num = parseInt('10'); // 10
const bool = Boolean(0); // false

                                                    Operators:

1. Arithmetic Operators:
Arithmetic operators are used to perform arithmetic calculations.
• Addition (+): Adds two operands.
• Subtraction (-): Subtracts the second operand from the first.
• Multiplication (*): Multiplies two operands.
• Division (/): Divides the first operand by the second.
• Modulus (%): Returns the remainder of the division.
• Exponentiation () (ES2016 and later)**: Raises the first operand to the power of the second.
let x = 10;
let y = 5;
console.log(x + y); // 15
console.log(x - y); // 5
console.log(x * y); // 50
console.log(x / y); // 2
console.log(x % y); // 0
console.log(x ** y); // 100000

2. Assignment Operators:
Assignment operators are used to assign values to variables.
• Assignment (=): Assigns the value of the right operand to the left operand.
• Compound Assignment (+=, -=, *=, /=, %=): Performs arithmetic operation and assigns the result to the left operand.
let a = 10;
a += 5; // equivalent to a = a + 5;
console.log(a); // 15

3. Comparison Operators:
Comparison operators are used to compare values.
• Equality (==): Returns true if the operands are equal.
• Identity (===): Returns true if the operands are equal and of the same type.
• Inequality (!=): Returns true if the operands are not equal.
• Strict Inequality (!==): Returns true if the operands are not equal or not of the same type.
• Greater Than (>) and Greater Than or Equal To (>=): Return true if the left operand is 
greater than (or equal to) the right operand.
• Less Than (<) and Less Than or Equal To (<=): Return true if the left operand is less than 
(or equal to) the right operand.
console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(5 != "5"); // false
console.log(5 !== "5"); // true

4. Logical Operators:
Logical operators are used to combine or invert boolean values.
• Logical AND (&&): Returns true if both operands are true.
• Logical OR (||): Returns true if at least one operand is true.
• Logical NOT (!): Returns true if the operand is false and vice versa.
let x = 5;
let y = 10;
console.log(x < 10 && y > 5); // true
console.log(x < 10 || y < 5); // true
console.log(!(x == 5)); // false

5. Unary Operators:
Unary operators work with a single operand.
• Unary Plus (+): Converts its operand to a number.
• Unary Negation (-): Converts its operand to a number and negates it.
• Increment (++) and Decrement (--): Increase or decrease the value of the operand by 1.
let x = "10";
console.log(+x); // 10 (converted to number)
console.log(-x); // -10 (converted to number and negated)

let y = 5;
y++;
console.log(y); // 6

6. Conditional (Ternary) Operator:
The conditional operator (ternary operator) is the only JavaScript operator that takes three operands. 
It's often used as a shorthand for the if-else statement.
let age = 20;
let status = (age >= 18) ? "adult" : "minor";
console.log(status); // "adult"

