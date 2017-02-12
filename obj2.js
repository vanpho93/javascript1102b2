function Diem(x, y){
  this.x = x;
  this.y = y;
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

var a = new Diem(0, 0);
var b = new Diem(0, 1);

var ab = new DoanThang(a, b);

console.log(ab.tinhChieuDai());
