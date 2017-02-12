let person = {
  name: 'Khoa',
  age: 18,
  show: function(who) {
    console.log(this.name + ' chao ban ' + who)
  }
 };

console.log(person);
let sh = person.show.bind(person)
sh('Pho');
