// array adalah tipe data yang digunakan untuk mendeskripsikan kumpulan elemen (nilai atau variabel), yang tiap-tiap elemennya memiliki index / array adalah variabel bisa menampung banyak nilai.Contoh : 
let hari = ['senin','selasa','rabu','kamis','jum\'at','sabtu','minggu'];
// kenapa array?
// mempermudah pengelolaan nilai / value / data ; contohnya : penulusuran dan pencarian, manajemen memori
// array
// variabel jamak, yang mempunyai banyak elemen dan diacu dengan nama yang sama, kumpulan pasangan key dan nilai /key and value pair, key adalah index pada array dengan tipe integer yang dimulai dari 0, array pada javascript bertipe object, array pada javascript memiliki fungsi / method lenght untuk menghitung jumlah elemen didalamnya, elemen pada javascript array boleh memiliki tipe data yang berbeda  

// key and value pair - membuat array
// penghitungan array pada javascript dimulai dari 0
// contoh :
let nomorAbsen = [1,2,3,4,5,6,7,8,9,10];
console.log(nomorAbsen[3]);
// maka yang ditampilkan : 4

// array itu bertipe object - memiliki method length
// contoh :
console.log(hari.length);
// maka yang ditampilkan jumlah elemen pada hari 
// cara untuk membuktikannya array bertipe object cukup tulis : 
console.log(typeof(hari));
// maka yang ditampilkan adalah object

//elemen pada array boleh berbeda tipe data
// contoh : 
let namaHari = ['senin','selasa'] 
let absen = [1,2]
let myArr = [namaHari[1],absen[1]]
console.log(myArr) 
// maka yang ditampilkan adalah selasa dan 2