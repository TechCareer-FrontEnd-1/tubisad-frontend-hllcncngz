let result = []
let x = prompt("Lütfen bir isim giriniz")

function data(userData) {
    for (let i = 0; i < userData.length; i++) {
        if (i == 0 || i == userData.length - 1) {
            result.push(userData[i])
        }
        else {
            result.push("*")
        }
    }
    return result.join("");
}

console.log(data(x));