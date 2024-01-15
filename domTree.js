// dom tree adalah representasi dari elemen html sehingga membentuk tree / pohon
// node / simpul pada dom tree banyak tipenya 
// tipe tipe node : elemen, attribute, text, cdata section, entity reference, entity, processing instruction, comment, document, document type, document fragment, notation
// 2 istilah yang harus dipahami : nodeList VS htmlCollection
// nodeList adalah memilih lebih dari 1 node sehingga tidak perlu diperhatikan tipe nodenya
// htmlCollection adalah tipenya node tetapi khusus untuk node tipe element saja

// nodeList vs htmlCollection 
// . keduanya merupakan kumpulan node
// . struktur datanya mirip array
// . nodeList dapat berisi node apapapun, sedangkan htmlCollection harus berisi elemen html
// . htmlCollection bersifat live sedangkan nodeList tidak 

// struktur hierarki dom tree
// . root node adalah node yang menjadi sumber dari semua node lain didalam dom
// . parent node adalah node yang berada 1 tingkat diatas yang lainnya, contoh : body adalah parent dari h1, p, div, dan a
// . child node adalah node yang berada 1 tingkat dibawah node yang lain, contoh : h1 adalah child dari body
