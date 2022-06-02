// Kullanıcı tarafından aldığımız 2 tane sayının
// s1-) Bu sayılardan en küçüğü nedir ?
// s2-) Bu sayılardan en büyüğü nedir ?
// s3-) Bu sayılardan en büyüğü karekökü nedir ?
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ?
// s5-) Bu sayılardan en küçüğü mutlak nedir ?
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım

let firstAnswer = prompt("Lütfen ilk sayınızı giriniz")
let secondAnswer = prompt("Lütfen ikinci sayınızı giriniz")

alert(`
En Büyük Sayı ==> ${Math.max(firstAnswer,secondAnswer)}

En Küçük Sayı ==> ${Math.min(firstAnswer,secondAnswer)}

En Büyük Sayının karekökü ==> ${Math.sqrt(Math.abs(Math.max(firstAnswer,secondAnswer)))}

En Büyük Sayının karekökünün yukarı Yuvarlanmış Hali ==> ${Math.ceil(Math.sqrt(Math.abs(Math.max(firstAnswer,secondAnswer))))}

En Küçük Sayının Mutlak Değeri ==> ${Math.abs(Math.min(firstAnswer,secondAnswer))}

Küçük Sayı ^ Büyük Sayı ==> ${Math.pow(Math.min(firstAnswer,secondAnswer),Math.max(firstAnswer,secondAnswer))}

`)