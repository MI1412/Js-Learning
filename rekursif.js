// rekursif adalah progrm yang memanggil dirinya sendiri
// contoh

function tes(n){
    if(n === 0 ){
        return 1;   // <== ini adalah basecase
    }
    console.log(n);

    return tes(n-1);
}
tes(10);

// basecase adalah kondisi akhir dari rekursif yang menghasilkan nilai
// implementasi Rekursif : menggantikan looping, membuat deret fibonacci dan faktorial, pencarian dan penulusuran pada struktur data list dan tree, bahasa pemrograman yang tidak memiliki pengulangan / looping, dll