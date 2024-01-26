// method / fungsi pada dom selection 
// 1. document.getElementById() hasil = element
// 2. getElementsByTagName() hasil = htmlCollection
// 3. getElementsByClassName() hasil = htmlCollection
// 4. querySelector() hasil = element
// 5. querySelectorAll() hasil = nodeList

// contoh :
// 1.
const judul = document.getElementById('judul');
judul.style.color = ('aquamarine')
judul.style.backgroundColor = ('brown')
judul.innerHTML = "imron"
// 2. 
const p = document.getElementsByTagName('p')
for(const element of p){
    element.style.color = ('aquamarine')
    element.style.backgroundColor = ('red')
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = ('100px')
// 3.
const p1 = document.getElementsByClassName('p1')
for(const element of p1){
    element.style.backgroundColor = ('green')
    element.style.color = ('white')
}

// 4. 
const p4 = document.querySelector('#b p')
p4.style.color = 'blue'
const li2 = document.querySelector('section#b ul li:nth-child(2)')
li2.style.backgroundColor = 'blue'
li2.style.color = 'white'
const paragraf = document.querySelector('p')
paragraf.innerHTML = 'ini diubah menggunakan javascript'
// query selector hanya mengembalikan 1 elemen saja pada awal menyeleksi


// 5.
const prgf = document.querySelectorAll('p')

for(const element of prgf){
    element.style.color = 'blue'
}

const sectionB = document.querySelector('section#b')
const P4 = sectionB.getElementsByTagName('p')[0]
P4.style.backgroundColor = 'blue'