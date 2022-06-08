//* ÖDEV-6
//Login userEmail,userPassword kullanıcıdan aldığımız değeri db ile karşılaştıracak eğer doğru ise adminFunction'a gönderecek 4 kalan haktan aşağı doğru düşecek eğer kalan hak sayımız 0 olursa kullanıcı bloke olsun
// dbUserEmail="deneme@gmail.com"
// dbUserPassword="root"


let db = {
    dbEmail: "deneme@gmail.com",
    dbPassword: "root",
}
let hak = 4;
for (let i = 0; i < 4; i++) {
    let userEmail = prompt("Lütfen Email Adresinizi Giriniz")
    let userPassword = prompt("Lütfen Şifrenizi Giriniz")
    if (db.dbEmail == userEmail && db.dbPassword == userPassword) {
        alert("Başarılı bir şekilde giriş Yaptınız")
        break;
    }
    else {
        alert(`Kullanıcı Adı veya Şifre Yanlış kalan hakkınız ${hak}`)
        hak--
        if (hak == 0) {
            alert("4kez yanlış girdiniz hesabınız bloke oldu")
        }
        else {
            continue
        }
    }
}