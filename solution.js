"use strict";
console.clear();

function testOne() {
  let a;
  console.log(a);
  console.log(foo());

  a = 1;
  function foo() {
    return 2;
  }
}

testOne();

/**

We get two results from the above code, one from the parent function (test), another from the inner function (foo).

The parent function (test) returns undefined, because it tries to log to the console the variable 'a', which at that point has been declared without any assigned value. Only after the execution of the console.log is that the value number '1' is passed in to the variable. Therefore, it was undefined at the execution point when it's logged to the console, and that is the result os the log.

The inner function (foo) returns 2. It is called and logged to the console from inside its parent function, also before it is declared. Since it is a function declaration, due to Hoisting, we can call it before declaring it and obtain the returned value number '2' from that function, that it is then logged to the console with that inner call from its parent function, that itself, was called from outside in order to run that log+call code.

*/

console.log("--------------------------------");
// 2 - The result of the code bellow it a nice nothing :-), because the parent function tries to return the inner function, which is never properly called in order to be executed. Therefore, the code is not executed and no output for the parent is obtained.
let a = 1;
function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  a = 5;
  return otherFunction;
}
const firstResult = someFunction(9);
const result = firstResult(2);

console.log("--------------------------------");
// 3 - The code bellow result in a TypeError for the last console.log, because it tries to call a function called 'test', when it is actually instead just a variable 'test' assigned with the value of the property getFullName (which is a function object, not its returned value). In order to call that function properly and obtain its value as an output, the proper syntax would have to be used, by adding the parenthesis after the property name, making it a call to the referred function and returning then its value.
let fullname = "John Doe";
const obj = {
  fullname: "Colin Ihrig",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};
console.log(obj.prop.getFullname());
const test = obj.prop.getFullname;
// console.log(test()); // commented out because it returns TypeError, as described above.

console.log("--------------------------------");
// 4 - The output in the console for the code bellow, will be 10. Because the variable aa is declared outside the function in the global scope, accessible inside the function where it is reassigned to the value of 10. Since the function was called, that reassignment code was executed and afterwords when we log that variable, it will be the reassigned value of 10.
let aa = 1;
function b() {
  aa = 10;
  return;
  function a() {}
}
b();
console.log(aa);
