//! JavaScript de Modül yapısı üzerinde duruyoruz ve Import - Export kavramlarını detaylıca açıkladım.

//? Import ve Export bir script dosyasını aslında başka bir script üzerinde kullanmamıza yarar.
//? Fayfaları oldukça iyidir. Daha performanslı ve optimize çalışabiliriz. Bellek kullanımını düşürmekte etkili olabilir.
//? Bir script ya da herhangi bir json dosyası işimize ne zaman yarıyorsa o zaman çağırarak kullanabiliriz.

//todo: Export ----> Bir javascript dosyasını dışa aktarmak için kullanırız.
//todo : Import ---> Bir javascript dosyasını içe aktarmak için kullananırız.

export function newFunc(parametre){
   console.log(parametre);
}

//Yukardaki kod parçacıgında export ile bir fonksiyonu dışarıya aktarmak istediğimizi bildirdik.
//şimdi "specialScript.js" isimli js dosyamıza bir göz atın.

//! Temel hatları ile export ve import bu işe yarar.


//! export default.... 

export default function Func2(parametres){
  console.log(parametres)
}

//! Bütün exportları tek çatı altında toplayarak kod düzenini sağlayabilir ve daha düzenlenebilir edebiliriz.

// export let bilgi1 = ["Mehmet","Elif","Cansu","Irmak"] 

// export class MyClass{
//     constructor(deger1,deger2,deger3){
//      this.deger1=deger1;
//      this.deger2=deger2;
//      this.deger3=deger3;
//     }

//     degeleriGöster(){
//         console.log(`Değerlerin : ${this.deger1},${this.deger2},${this.deger3},`)
//     }
// }

// export function VeriAl(gelenveri){
//     console.log(gelenveri);
// };


//! Birçok export yaptığımızda hepsini tek tek yazmak istemeyebiliriz bu durumda aşağıdaki yolu kullanmak iyi olabilir.


let bilgi1 = ["Mehmet","Elif","Cansu","Irmak"] 

class MyClass{
    constructor(deger1,deger2,deger3){
     this.deger1=deger1;
     this.deger2=deger2;
     this.deger3=deger3;
    }

    degeleriGöster(){
        console.log(`Değerlerin : ${this.deger1},${this.deger2},${this.deger3},`)
    }
}

function VeriAl(gelenveri){
    console.log(gelenveri);
};

export{
    bilgi1 as Info1, //! bilgi1 'i artık Info1 olarak isimlendirdim.
    MyClass,
    VeriAl 
}

// Bu şekilde hepsini tek çatı altında toplarız ve şimdi yukarda tanımladıgımız exportları silebiliriz.
// Haydi Export içinde tanımladıgımız bileşenleri specialScript içinde kullanalım.


//! Kullanım örneği - Pratik
//! Butonumuza basınca specialScript'e burada tanımladıgımız fonksiyonumuzu gönderelim ve specialScripte input içerisine bir takım şeyler yazdıralım.



