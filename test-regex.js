const name = "hakan"
const pattern =/^[a-z]{4,10}$/

let sonuc = pattern.test(name);
console.log(sonuc)

if(sonuc) { // otomatik true değerini alır
    console.log('Başarılı')
}
else {
    console.log('Başarısız')
}

let sonuc2 = name.search(pattern) // name nin başına pattern in içinde olmayan bir şey girersek o basamaktan sonra saymaya başlar o basamak sayısını verir.
console.log(sonuc2)