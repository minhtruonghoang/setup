// Senior FE

//1 Write an infinite number generator from an integer input:
// const g = infiniteGenerator(3);
// g.next() -> 1; g.next() -> 2; g.next() -> 3; g.next() -> 1; ...etc

//2 Write a simple mechanism to capture modification access to instace of class A below:

class A {
  name: string = "";
}

const a = new A();
a.name = "John"; // Expect some function capture() to be called with value "John"

// complete below functions
// As the function named, serial and parallel handle the input promises and return the results after all is done
function serial<A>(promise: Promise<A>[]): Promise<A[]> {}

function parallel<A>(promise: Promise<A>[]): Promise<A[]> {}

//3 What's the difference between using map and for loop.
// What's required to use [for of] on an object

//4 What's symbol in JavaScript

//5 What's enum type in Typescript. What's it purpose and what's the equivalent in Javascript ?

//6 What's a sound typesystem and what's it characteristic.

//7 What's Reflect API and what's the purpose of it.

//8 What do decorator do in JavaScript ? Explain how it work. How many kind of decorator are there ?
