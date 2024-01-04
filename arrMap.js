// map dalam array adalah mengembalikan array sedangkan forEach tidak 
// contoh :
//let angka = [1,2,3,4,5,6,7,8];
//angka.forEach(function(e){
//console.log(e)})
//jika dirubah ke map maka jadi begini
let angka = [1,2,3,4,5,6,7,8];
let angka2 = angka.map(function(e){
return e * 2})
console.log(angka2.join('|'))
//perlu diingat method forEach dengan map berbeda forEach tidak dapat mengganti nilai pada array sedangkan map dapat menggantikan nilai pada array
