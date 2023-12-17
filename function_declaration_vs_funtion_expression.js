// rumus function declaration
// function identifier(parameter opt){function body}
// kelebihan : lebih fleksibel (dapat ditulis dimanapun) karena dijavascript ada konsep hoisting, mudah dipahami untuk pemula
// contoh : 
function tampilPesan(nama){
    alert('halo ' +nama);
}
tampilPesan('imron')
// contoh konsep hoisting :
tampilPesan('imron')

function tampilPesan(nama){

    alert('halo' +nama);
}

// rumus function expression
// function identifier opt(parameter opt){function body}
// kelebihan function expression : harus didefinisikan terlebih dahulu sebelum dipanggil, lebih power full bisa dibuat sebagai closure, sebagai argumen untuk function lain, bisa dibuat IIFE (Immediately Invoked Function Expression)
// contoh
let tampilPesan = function (nama){
                    alert('halo ' +nama);
                    }
                    tampilPesan('imron')
                    
// functional programming tingkat advance , function expression bisa digunakan saat menggunakan framework / library