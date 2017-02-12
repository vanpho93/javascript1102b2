function Diem(x, y){
  this.x = x;
  this.y = y;
}

function TamGiac(a, b, c){
  this.a = a;
  this.b = b;
  this.c = c;
  this.tinhChuVi = function(){
    return tinhChieuDai(a, b) + tinhChieuDai(a, c) + tinhChieuDai(b, c)
  }
  function tinhChieuDai(diemA, diemB){
    let canh1 = diemA.x - diemB.x;
    let canh2 = diemA.y - diemB.y;
    let canhHuyen = Math.sqrt (canh1 * canh1 + canh2 * canh2)
    return canhHuyen;
  }
}

let dA = new Diem (0, 0)
let dB = new Diem (0, 1)
let dC = new Diem (1, 0)

let tamGiacABC = new TamGiac(dA, dB, dC);
console.log(tamGiacABC.tinhChuVi());
