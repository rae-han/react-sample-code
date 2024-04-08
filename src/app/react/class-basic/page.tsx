"use client"

import React from 'react';

class Car {
  name: string;
  carAge: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hook() {
    console.log(`${this.name}이 경적을 울립니다. 빵빵!!`);
  }

  static hello () {
    console.log('자동차 입니다.');
  }

  set age(value: number) {
    this.carAge = value;
  }

  get age(): number | undefined {
    return this.carAge;
  }
}

const myCar = new Car('KIA');

myCar.hook();

Car.hello();

myCar.age = 10;

console.log(myCar.age, myCar.name);

const ClassBasicPage = () => {
  return (
    <div>
      <div>
        class
      </div>
    </div>
  );
};

export default ClassBasicPage;