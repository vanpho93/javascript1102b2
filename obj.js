let nhanVien1 = {name: 'Khoa', age: 18};
// console.log(nhanVien1);
// console.log('Name: ' + nhanVien1.name);

function NhanVien (name, age){
  this.ten = name;
  this.tuoi = age;
  this.xinChao = function(){
    console.log('Xin chao, toi la ' + this.ten);
  }
}

// let Pho = new NhanVien('Pho', 20);
// console.log(Pho);
// console.log(Pho.ten);
// Pho.xinChao();

function TamGiac(a, b, c){
  this.canhA = a;
  this.canhB = b;
  this.canhC = c;
  this.tinhChuVi = () => this.canhA + this.canhB + this.canhC;
}

let tg = new TamGiac(3, 4, 5);
console.log(tg.tinhChuVi());
