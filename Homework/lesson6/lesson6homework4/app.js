
while (true) {
    let userPassword = prompt("Lütfen Parolanızı Giriniz")
    let userRePassword = prompt("Lütfen Parolanızı Tekrar Giriniz")
    if (userPassword == userRePassword) {
        alert(`
            Password ${userPassword}
            Repassword ${userRePassword}
            Girdiğiniz Değerler Eşleşti Giriş Yapılıyor
        `)
        break;
    }
    else {
        alert(`
            Password ${userPassword}
            Repassword ${userRePassword}
            Girdiğiniz Değerler Eşleşmedi Tekrar Giriniz
        `)
    }
}
