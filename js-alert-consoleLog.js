// alert("Merhaba Dünya")

console.log("Merhaba Dünya")
console.log(15)

var x = 5;
var y = 7;

console.log(x+y)

let ad = "Hakan"
let soyad = "YıLmaz"

let adSoyad = ad + " " + soyad

console.log(adSoyad)

console.log(adSoyad[0])

console.log(adSoyad.length)

// if (adSoyad.length > 0) {
//     //içinde bir şey var mı yokmu diye bu şekilde kontrol edilebilir.
// }

//Methodlar

console.log(adSoyad.toUpperCase())
console.log(adSoyad.toLocaleLowerCase())

// let kucukadsoyad = adSoyad.toLocaleLowerCase()

let index = adSoyad.indexOf("Y")
console.log(index)

let son = adSoyad.lastIndexOf("a")
console.log(son)

let bastansona = adSoyad.slice(0,5)
console.log(bastansona)

let bastansonaSubstr = adSoyad.substr(6,6) //6 dan başlıyor ve daha sonrasında 6 harf daha ekliyor
console.log(bastansonaSubstr)

let yerdegistir = adSoyad.replace("H","Ğ") // yer değiştirme 
console.log(yerdegistir)