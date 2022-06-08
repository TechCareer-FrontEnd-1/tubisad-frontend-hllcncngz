//ÖDEV-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül:(x*9/5)+32


let celsiusDegree = Number(prompt("Lütfen Fahrenhayt a çevirmek istediğiniz dereceyi giriniz"));

let fahrenhaytDegree = ((celsiusDegree*(9/5))+32);

document.writeln(`${celsiusDegree}° = ${fahrenhaytDegree} F`)
