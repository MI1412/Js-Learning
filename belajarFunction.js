let hitung1 = prompt ('masukkan nilai :');

function kategoriRapot(){
    let hasil;
    hasil = hitung1 / 4 ;
    
    if (hasil >= 22){
        alert("Hebat !!")
    } else if (hasil >= 17){
        alert("tingkatkan lagi")
    } else {
        alert("belajar woi")
    }
    return hasil;
}

alert("Hasil Bagi : " +kategoriRapot());