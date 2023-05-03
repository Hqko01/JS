const notlar = [15, 34, 23, 54, 12, 45, 57]

for (let i = 0; i < notlar.length; i++) {

    if(notlar[i] === 23) {
        continue;// 23 ü atlamasını sağladı
    }

    console.log(notlar[i])

    if(notlar[i] === 54) {
        console.log('ulaşıldı!')
        break; // break 54 e ulaşıldığında çıktıyı durduruyor
    }
}