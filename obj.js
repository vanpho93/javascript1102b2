let nhanVien1 = {name: 'Khoa', age: 18};
// console.log(nhanVien1);
// console.log('Name: ' + nhanVien1.name);

function NhanVien (name, age){
  this.ten = name;
  this.tuoi = age;
}

let Pho = new NhanVien('Pho', 20);
console.log(Pho);
console.log(Pho.ten);
