// manipulasi array


// contoh : 
// 1. menambah isi array 
// var arr = [];
// arr[0] = "imron"
// arr[1] = "musa"
// arr[2] = "p"
// arr[4] = "m"

// // hati hati jika ingin melakukan teknik seperi ini dibrowser maka harus hafal indeksnya jika ada terlewat 1 angka maka akan langsung otomatis diisi undefine
// console.log(arr[4]);
// menghapus isi array
// let arr = ['imron', 'musa', 'caca']
// arr[1] = undefined
// console.log(arr)

// menampilkan isi array
// let arr = ['imron', 'musa', 'caca', 'mama']

// for(let i = 0; i < arr.length; i++ ){
//     console.log('namanya ke ',(i+1), 'adalah ', arr[i])
// }

// method pada array di javascript 
// 1. length
// 2. join
// 3. push, pop, shift, unshift

// method pada array
// 1. join
let arr = ['imron', 'musa', 'caca']
// console.log(arr.join('.'))

// 2. push & pop
// arr.push('mama') digunakan untuk menambah isi pada elemen array ke terakhir
// arr.pop() // digunakan untuk menghapus pada elemen array terakhir

// 3. unshift & shift
// arr.unshift('mama') // digunakan untuk menambah isi elemen array pada indeks pertama
arr.shift(); //digunakan untuk menghapus elemen pada array pada indeks pertama
arr.shift();
console.log(arr.join('/'))

