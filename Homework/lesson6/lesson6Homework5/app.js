//ÖDEV-5 (if-else for break continue)
//Fonksiyonlarla yapılsın
//Örnek-1)  kullanıcının vereceği (prompt) bitiş sayısını belirleyelim Exam 1<=X<=5
//1.adım: kaç tane sayı var ?
//2.adım: sayı toplamları var ?

//3.adım: kaç tane tek  sayı var ?
//4.adım: tek sayılar toplamı ?
//5.adım: tek sayılar gösterelim ?

//6.adım: kaç tane çift  sayı var ?
//7.adım: çift sayılar toplamı ?
//8.adım: çift sayılar gösterelim ?

//Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
//Eğer bitiş sayısı 100 fazla ise 100'e kadar olanlar toplansın  (break)
//Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim    +
//Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmayı direk durdursun  +



let oddCount = 0, evenCount = 0, oddTotal = 0, evenTotal = 0, evenArray = [], oddArray = [], countNumber = 0, totalNumber = 0


let oddAndEvenCalculate = () => {
    while (true) {
        let minNumber = Number(prompt("Lütfen minimum değeri girin"));
        let maxNumber = Number(prompt("Lütfen maksimum değeri girin"));

        if (minNumber > maxNumber || minNumber > 100) {
            alert(`
                Minumum Değer Maksimum Değerden Büyük Olamaz ve
                Minumum Değer 100 den büyük olamaz
                `

            )
        }
        else if (minNumber == 44 || maxNumber == 44) {
            alert(`Secret-key 44 sayısı Girilemez`);
            break;
        }
        else {
            for (let i = minNumber; i <= maxNumber; i++) {
                totalNumber += i
                countNumber++
                if (i % 2 == 0) {
                    evenCount++
                    evenTotal += i
                    evenArray.push(i)
                    // alert(i); uzun yol
                    // console.log(i); uzun yol
                    if (i == 100) {
                        break
                    }
                }
                else if (i % 2 != 0) {
                    if (i == 7) {
                        totalNumber -= i
                        continue
                    }
                    else {
                        oddCount++
                        oddTotal += i
                        oddArray.push(i)
                        // alert(i); uzun yol
                        // console.log(i); uzun yol
                    }
                }
            }
            return (
                alert(`
                7 Rakamı İşleme Alınmamıştır
                Sayıların Toplamı = ${totalNumber}
                ${countNumber} Adet Sayı Var
                Çift Sayıların Toplamı = ${evenTotal}
                Tek Sayıların Toplamı = ${oddTotal}
                ${oddCount} Adet Tek Sayı Var
                ${evenCount} Adet Çift Sayı Var
                Tüm Çift Sayılar ${evenArray.length == 0 ? ": Hiç Çift Sayı Yok" : evenArray}
                Tüm Tek Sayılar ${oddArray.length == 0 ? ": Hiç Tek Sayı Yok" : oddArray}
            `))
        }
    }

}

oddAndEvenCalculate()



