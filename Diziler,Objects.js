//const DersBaşarı = [
//    { ders: 'Python', Başarı: 'AA' },
//    { ders: 'Veri Yapıları', Başarı: 'AB' },
//    { ders: 'WEB', Başarı: 'BB' },
//]


let Ogrenci = {
    ad: 'Hakan',
    yas: 18,
    Email: 'hakan34yilmaz01@gmail.com',
    sınıf: 'UNIVERSITE - 1',
    dersler: [
        { ders: 'Python', Başarı: 'AA' },
        { ders: 'Veri Yapıları', Başarı: 'AB' },
        { ders: 'WEB', Başarı: 'BB' },
    ],

    /* login() {
        console.log('Öğrenci Giriş Yaptı.')
    },
    logout() {
        console.log('Öğrenci Çıkış yaptı.')
    }, */

    printLesson() {
        this.dersler.forEach(Çıktı => {
            console.log(Çıktı.ders, Çıktı.Başarı)
        })
    }
}

/* Ogrenci.login()
Ogrenci.logout() */
Ogrenci.printLesson()

