// --- 1 ---

class A {
  a: string = "";
  b: number = 0;
  c: boolean = true;
}

type Typekey = keyof A;

const B: Typekey[] = ["a", "b", "c"];

// ---- 2 ----

interface Animal {
  eat: (food: number) => number;
}

class Bird implements Animal {
  energy: number = 0;

  eat(food: number) {
    this.energy = food / 2;
    console.log(this.energy);
    return this.energy;
  }

  fly() {
    if (this.energy <= 0) {
      throw new Error("don't have energy");
    } else {
      console.log(this.energy / 2);
    }
  }
  fight(animal: any) {
    if (animal === Dog) {
      console.log("lose");
    } else {
      console.log("i don't known");
    }
  }
}

class Dog implements Animal {
  energy: number = 0;

  eat(food: number) {
    this.energy = food / 2;
    console.log(this.energy);
    return this.energy;
  }

  run() {
    if (this.energy <= 0) {
      throw new Error("don't have energy");
    } else {
      console.log((this.energy * 3) / 4);
    }
  }
  fight(animal: any) {
    if (animal === Bird) {
      console.log("win");
    } else {
      console.log("i don't known");
    }
  }
}

const bird = new Bird();
const dog = new Dog();

dog.fight(Bird); // tobe return win
bird.fight(Dog); // tobe return lose

// --- 3 ---

type AccessArray = [string, number];
const X: AccessArray[] = [
  ["a", 3],
  ["b", 5],
];

// --- 4 ---

const delay = (time: number) => {
  return new Promise((res) => {
    setTimeout(() => res("result"), time);
  });
};

const run = async () => {
  const result = await delay(5000);
  console.log(result);
};

run();

// --- 5 ---

interface A5 {
  a: number;
  b: string;
}

interface B5 {
  b: string;
  c: boolean;
}

type KeyCommon = keyof A5 & keyof B5;

type C = Pick<A5, KeyCommon>;

type D = A5 & B5;
