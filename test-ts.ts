// 1 -------------------

class A {
  a: string = "";
  b: number = 0;
}

// Define type for B so that it only allow property key in class A
// const B = ["a", "b"]; - OK
// const B = ["c"]; - Error

// 2 -------------------

interface Animal {
  eat: (food: number) => number;
}

// Write Bird and Dog classes which should respect to Animal interface
// Eating is only half effective, which mean if an Animal eat 10 unit , then it can only store 5 unit as energy
// Bird can .fly() for half the amount of energy they currently have
// Dog can .run() for 3/4 the amount of energy they currently have
// If they have no energy then invoking fly/run should throw error.
// If Dog.fight(Bird) then it should win
// If Bird.fight(Dog) then it should lose

// 3 -----------------------
// Define type for X so that its only allow an array OF array of 2 elements, first one is string, and the second one must be number

type AccessArray<T, D> = [T, D];

const X: AccessArray<string, number>[] = [
  ["a", 3],
  ["b", 5],
];

// 4 -------------------------
// Write a delay() function which take in a number and block the code execution for that amount of time (ms)
// Example usage:  await delay(5000) - expected result delay for 5 second

// 5 --------------------------
// Define type C which only contain common property between A5 and B5
// Defined type D which contain all property of A5 and B5
interface A5 {
  a: number;
  b: string;
}

interface B5 {
  b: string;
  c: boolean;
}

// type C = ?

// type D = ?
