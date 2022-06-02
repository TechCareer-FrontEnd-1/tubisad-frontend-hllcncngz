let tahminHakkı = 5;
let randomNumber = Math.round(Math.random() * 10)
let deneme = 0;

while (tahminHakkı > 0) {
    console.log(randomNumber);
    let userAnswer = prompt("Lütfen 0-10 arasında tahmininiz olan sayıyı giriniz ")
    deneme++;
    if (userAnswer == randomNumber) {
        alert(`Tebrikler ${deneme}. denemede bildiniz `)
    }
    else {
        alert("Bilemediniz Tekrar Deneyin")
        tahminHakkı--
    }
    if (tahminHakkı == 0) {
        alert("Üzgünüz Tahmin Hakkınız Bitti")
        break
    }
    else{
        if(userAnswer > randomNumber){
            alert("Daha Küçük Bir Tahminde Bulunun")
        }
        else if (userAnswer == randomNumber){
            alert("Sayfayı Yenileyerek Yeni Oyuna Başlayabilirsiniz")
            break;
        }
        else{
            alert("Daha Büyük Bir Tahminde Bulunun")
        }
    }
}