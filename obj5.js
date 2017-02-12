function Person(ten, tuoi, soDu) {
  this.name = ten;
  this.age = tuoi;
  let soDuTaiKhoan = soDu;
  this.getSoDu = function(){
    return soDuTaiKhoan;
  }
  this.setSoDu = function(soDuMoi){
    soDuTaiKhoan = soDuMoi
  }

  function abc(){
    
  }
}

let ps = new Person ('Huong', 18, 1000);

console.log(ps);
console.log(ps.name);
console.log(ps.age);
console.log(ps.getSoDu());
ps.setSoDu(1200);
console.log(ps.getSoDu());
