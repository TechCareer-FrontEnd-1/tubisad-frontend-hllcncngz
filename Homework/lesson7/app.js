
let numbers = []
let sum = 0
function randomNumber() {
    for (let i = 0; i < 5; i++) {
        let random = Math.round(Math.random() * 10)
        numbers.push(random)
    }
    for (let j = 0; j < numbers.length; j++) {
        sum += numbers[j]
    }
    let newArr = numbers.sort()

    alert(
        `sayılar ${numbers}
         sayıların toplamı ${sum}
         sayıların ortalaması ${sum / 5}
         en küçük sayi ${newArr[0]}
         en büyük sayi ${newArr[newArr.length - 1]}

        `)
}
// randomNumber()

let obj = {
    object: {
        name: "Halil",
        surname: "Cengiz"
    }
}
console.log();