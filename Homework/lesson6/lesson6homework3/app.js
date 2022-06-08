let userNumber = Number(prompt("Lütfen Bir Sayı giriniz"))

if (userNumber > 0) {
    alert(`${userNumber} sayısı pozitif sayıdır`)
}
else if (userNumber == 0) {
    alert(`${userNumber} sayısı Nötr sayıdır`)
}
else {
    alert(`${userNumber} sayısı negatif sayıdır`)
}