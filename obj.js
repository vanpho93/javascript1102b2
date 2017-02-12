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

function DoanThang(x1, y1, x2, y2){
  this.x1 = x1;
  this.x2 = x2;
  this.y1 = y1;
  this.y2 = y2;
  this.tinhChieuDai = function(){
    let canh1 = this.x1 - this.x2;
    let canh2 = this.y1 - this.y2;
    let canhHuyen = Math.sqrt (canh1 * canh1 + canh2 * canh2)
    return canhHuyen;
  }
}

// var doanThanh1 = new DoanThang(0, 0, 0, 1);
// console.log(doanThanh1.tinhChieuDai());

function Person(name, age){
  this.name = name;
  this.age = age;
  this.addAge = function(){
    this.age++;
  }
}

let khoa = new Person('Khoa', 30);
console.log(khoa);
khoa.addAge();
console.log(khoa);
