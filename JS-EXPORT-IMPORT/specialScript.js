import {newFunc} from "./main.js"; //!--> main.js de export ettiğimiz yani dışarıya paylaştığımız fonksiyonumuzu
// buraya import("İçe aktardık") yalnız export kullanımda köşeli parantezler ile tanımlanmış ismi yazmalıyız.

newFunc("Hamza");

// ve sanki bu script içinde tanımlanmış gibi dilediğimizce kullanabiliriz.
//todo: Tekrar main.js dosyamıza dönün.


//! Export default olan fonksiyonu yakalayalım.

import HerhangiBirİsim from './main.js';  //---> Default olarak tanımlanan bir veri import edilirken herhangi bir isim alabilir.

HerhangiBirİsim("Ali"); // main.js dosyamızdaki func2 fonksiyonuna ali değerini gönderdik ve orada gerekli işlemi yaptı.






import * as Moduller from './main.js'; //--> Bütün Exportları Moduller adı altında topladım ve içinden istediğimi çekerek kullanabilirim.

const gelenBilgilerim = Moduller.Info1;

gelenBilgilerim.forEach(isim => {
    console.log(isim);
});


const gelenSinif = new Moduller.MyClass("Elma","Muz","Kivi");
gelenSinif.degeleriGöster();

Moduller.VeriAl("JavaScript Modül yapısı");

// main.js den aldığımız bileşenleri Moduller adı altında import ettik yani içe aktardık ve main.js üzerindekileri kullandık.


//! Örnek 

//Pratic.js dosyamıza bakın.

document.querySelector("#btn").addEventListener("click", async()=>{ //butona tıklandığında;
 const gelenScript = await import('./pratic.js');  //---> pratic.js den fonkisyonu burada içe aktardık.

 gelenScript.data("Hamza"); //--> Dilediğimiz gibi kullandık yani Data Fonksiyonuna bir parametre gönderdik ve şimdi Pratic.js dosyasına göz at.

})







