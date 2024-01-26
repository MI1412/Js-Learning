// Dom Manipulation method
// 1. manipulasi element
// macam macam method = element.innerHtml,element.style.<propertyCss>, element.setAttribute(), element.classList, dll 
// 2. manipulasi node
// macam macam method = document.createElemet(), document.createTextNode(), node.appendChild(), node.insertBefore(), parenNode.removedChild(), parentNode.replaceChild(), dll

// manipulasi element

// const judul = document.getElementById('judul')
// judul.innerHTML = '<em><b>M.Imron'

// method innerHtml 
// const sectionA = document.querySelector('section#a')
// sectionA.innerHTML = ' tes '

// method element.style
// const judul = document.querySelector('#judul')
// judul.style.color = 'blue'
// judul.style.backgroundColor = 'red'

// method setAttribute, removeAttribute, getAttribute
const judul = document.getElementsByTagName('h1')[0]
judul.setAttribute('name','imron')
const a = document.querySelector('a')
a.removeAttribute('href')
a.getAttribute('')

// method classList 
//function classList = add(), remove(), toggle(), item(), contains(), replace() 
const p2 =  document.querySelector('.p2')
const addCLass = p2.classList.add('label') // digunakan untuk menambahkan class
const removeClass = p2.classList.remove('label') // digunakan untuk menghapus class
const toggleClass = p2.classList.toggle('label') // digunakan untuk menambahkan class dan menghapus class
const itemClassList = p2.classList.item(1) // digunakan untuk mencari class yang tersedia
const replaceClass = p2.classList.replace('label','satu') // digunakan untuk mereplace class sebelumnya menjadi class baru

// dom manipulation

// createElement digunakan untuk menambahkan elemen baru kedalam body
// createTextNode digunakan untuk menambahkan text kedalam elemen
// appendChild adalah menambahkan elemen sebelum induknya
// buat element baru 
const pBaru = document.createElement('p')
const teksPBaru = document.createTextNode('Paragraf baru')
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru)
// simpan pBaru diakhir section a
const sectionA = document.getElementById('a')
sectionA.appendChild(pBaru)

const li = document.createElement('li')
const teksLiBaru = document.createTextNode('item baru')

li.appendChild(teksLiBaru)
const ul = document.querySelector('section#b ul')
const li2 = ul.querySelector('li:nth-child(2)')

ul.insertBefore(li, li2) // digunakan untuk menyimpan diantara element html


const link = document.getElementsByTagName('a')[0]
sectionA.removeChild(link)

const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p')

const h2 = document.createElement('h2')
const teksH2 = document.createTextNode('judul baru !!')

h2.appendChild(teksH2)
sectionB.replaceChild(h2, p4)

pBaru.style.backgroundColor = 'aqua'
li.style.backgroundColor = 'aqua'
h2.style.backgroundColor = 'aqua'