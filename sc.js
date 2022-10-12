//kullanıcı ismini prompt ile alıyoruz ve spana yazdırıyoruz.
let isim = prompt("İsminizi giriniz: ");
document.querySelector("#name").innerHTML = isim[0].toUpperCase() + isim.slice(1).toLowerCase(); 


function tarihSaat() {
    var date = new Date().toLocaleString('tr-TR'); // tarih saati al
    document.getElementById("zaman").innerHTML = date; // zaman id'li elemente yazdır
}

setInterval(tarihSaat, 1000); // her 1 saniyede bir tarihSaat fonksiyonunu çalıştır

//günü alıyoruz ve yazdırıyoruz.
var d = new Date();
var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
document.querySelector("#gun").innerHTML = gunler[d.getDay()];