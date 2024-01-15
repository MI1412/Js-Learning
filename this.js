// this adalah window contoh :
// console.log(this === window)

//cara create object 1 - function declaration
// function halo(){
//     console.log('halo')
// }

// this.halo();
// context this disini adalah untuk mengembalikan variabel global


// cara create object 2 - object literal
// let obj = { a : 'imron', b : '18'};
// obj.halo = function(){
//     console.log(this)
//     console.log('halo')
// }
// obj.halo();
// this mengembalikan object bersangkutan 


// cara create object 3 - constructor
function Halo(){
    console.log(this)
    console.log('halo')
}
let obj = new Halo();
let obj1 = new Halo();
//this mengembalikan object yang baru dibuat 