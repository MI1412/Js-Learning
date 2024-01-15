 // object pada js adalah kumpulan nilai yang memiliki nama
// https://www.w3school.com/js/js_object_definition.asp
// contoh sederhana : 

let siswa = {
nama : "muhammad imron",
kelas : 1,
jurusan : "Rpl",
alamat : {
	kota : "surabaya",
	jalan :"jalan abc",
	nomer : "90",
	provinsi : "Jawa timur"
}

}
console.log('ini adalah contoh membuat object secara literal :',siswa.nama)
// membuat object pada JS
// 1. object literal 
// 2. function declaration 
// 3. constructor function (memakai keyword new)
// 4. object.create()

// contoh object 1 literal.
// let kel = {
// 	nama : "imron, rido, rafi, rayhan",
// 	absen : [1, 2, 3, 4],
// 	jurusan : "RPL"
// }

// contoh object 2 function declaration.

function buatObject(nama, absen, jurusan){
	let kel = {}
	kel.nama = nama;
	kel.absen = absen;
	kel.jurusan = jurusan;
	return kel;
}

console.log('contoh pembuatan object menggunakan function declaration :',buatObject('imron', '12', 'RPL'))

// contoh object 3 constructor function.

function Kel(nama, absen, jurusan){
	// var this = {} 
	this.nama = nama
	this.absen = absen
	this.jurusan = jurusan
	// return this
}  
console.log('contoh pembuatan object menggunakan constructor function : ',new Kel('imron', '12', 'RPL'))