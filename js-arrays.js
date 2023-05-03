let isimler = ["Hakan","Zeynep"]
console.log(isimler[1])
console.log(isimler.length)

isimler[1] = "Suat"
console.log(isimler[1])

let tireli = isimler.join("-")
console.log(tireli)

let sira = isimler.indexOf("Hakan")
console.log(sira)

let ekle = isimler.concat(["Zehra"]) // ekle içerisinde isimlere ekledi
console.log(ekle)
console.log(isimler)

isimler.push("Yılmaz") // direkt isimler array ına ekledi
console.log(isimler)

isimler.pop() //en son ekleneni çıkarıyor
console.log(isimler)
