class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  xinChao(){
    console.log(this.name + ': ' + this.age);
  }
}

let Khoa = new Person('Khoa', 10);

console.log(Khoa);
Khoa.xinChao()
