function Diem(x, y){
  this.x = x;
  this.y = y;
}

function TamGiac(a, b, c){
  this.a = a;
  this.b = b;
  this.c = c;
  this.tinhChuVi = function(){
    let ab = new DoanThang(this.a, this.b);
    let ac = new DoanThang(this.a, this.c);
    let bc = new DoanThang(this.b, this.c);
    return ab.tinhChieuDai() + ac.tinhChieuDai() + bc.tinhChieuDai()
  }
}

function DoanThang(diemA, diemB){
  this.diemA = diemA;
  this.diemB = diemB;
  this.tinhChieuDai = function (){
    let canh1 = this.diemA.x - this.diemB.x;
    let canh2 = this.diemA.y - this.diemB.y;
    let canhHuyen = Math.sqrt (canh1 * canh1 + canh2 * canh2)
    return canhHuyen;
  }
}

let dA = new Diem (0, 0)
let dB = new Diem (0, 1)
let dC = new Diem (1, 0)

let tamGiacABC = new TamGiac(dA, dB, dC);
console.log(tamGiacABC.tinhChuVi());
