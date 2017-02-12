class Diem {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class TamGiac {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  tinhChuVi(){
    function tinhChieuDai(diemA, diemB){
      let canh1 = diemA.x - diemB.x;
      let canh2 = diemA.y - diemB.y;
      let canhHuyen = Math.sqrt (canh1 * canh1 + canh2 * canh2)
      return canhHuyen;
    }
    
    return tinhChieuDai(this.a, this.b) + tinhChieuDai(this.a, this.c) + tinhChieuDai(this.b, this.c)

  }
}
let dA = new Diem(0, 0);
let dB = new Diem(1, 0);
let dC = new Diem(0, 1);

let tg = new TamGiac(dA, dB, dC);
console.log(tg.tinhChuVi());
