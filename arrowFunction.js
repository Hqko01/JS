/* const alan = (kenar) => { //bir değere alınıyorsa paranteze gerek yok ama bir den fazla değer varsa parantez gerekli
    return kenar **2;
}

const sonuc = alan(8)

console.log(sonuc) */

const alan = kenar => kenar ** 2

const sonuc = alan(4)
console.log(sonuc)

const hqkko = function () {
    return 'Hakan'
}

const cikti = hqkko()
console.log(cikti)


const faturaa = function (urunler, vergi) {
    let toplam = 0
    for (let i = 0; i < urunler.length; i++) {
        toplam += urunler[i] + urunler[i] * vergi;
    }
    return toplam
}

console.log(faturaa([10,20,30],0.25))
 





