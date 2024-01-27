// event pada js merepresentasikan sebuah kejadian yang terjadi didalam dom
// kejadian tersebut dilakukan oleh user contoh mouse event, keyboard event, dll
// ataupun bisa dilakukan otomatis oleh API contoh ketika menjalankan animasi menggunakan css saat selesai dijalankan, halaman selesai di load, dll ; summber : https://developer.mozilla.org/eng-US/docs/Web/API/Event

// daftar event : mouse event, keyboar event, resources event, focus event, view event, form event, css animation & transition event, drag & drop event, dll ; Selengkapnya disini https://developer.mozilla.org/eng-US/docs/Web/Events

// cara 'menjalankan' event :
// 1. event handler : inline HTML attribute, Element method
// 2. addEventListener()

// 1. ini menggunakan event handler  
// panggil keyword pada html on<event>  
// contoh :

// ini menggunakan element method
const p3 = document.querySelector('.p3')
p3.onclick = ubahWarnaP3
function ubahWarnaP2(){
    p2.style.backgroundColor = 'aqua'
}
function ubahWarnaP3(){
    p3.style.backgroundColor = 'aqua'
}

const p2 = document.querySelector('.p2')
p2.onclick = ubahWarnaP2

// ini menggunakan addEventListener

const p4 = document.querySelector('section#b p')
p4.addEventListener('click', function (){
    const ul = document.querySelector('section#b ul')
    const li = document.createElement('li')
    const teks = document.createTextNode('item baru')
    li.appendChild(teks)
    ul.appendChild(li)

})





