## 1. Jira nedir?

Jira, proje ve süreç yönetimi dendiği zaman aklımıza gelen bir araçtır. Proje
yönetiminde kullanım kolaylığı ve esnek olması nedeniyle sektörde sık olarak kullanılan bir iş takibi uygulamasıdır diyebiliriz.
Bu aracın temel kullanımı, yazılımınız ve Mobil uygulamalarınızla ilgili sorunları ve hataları takip
etmektir. Aynı zamanda proje yönetimi için kullanılır. JIRA panosu, sorunların ele alınmasını kolaylaştıran
birçok kullanışlı işlev ve özellikten oluşur.

## 2. ASCII ve Unicode nedir ? ASCII ve Unicode Farkları Nelerdir ?

### 2.a) ASCII nedir?

ASCII Latin alfabesi üzerine kurulu 7 bitlik bir karakter kümesidir. İlk kez 1963 yılında ANSI tarafından standart olarak sunulmuştur. ASCII'de 33 tane basılmayan kontrol karakteri ve 95 tane basılan karakter bulunur. Kontrol karakterleri metnin akışını kontrol eden, ekranda çıkmayan karakterlerdir.

### 2.b) Unicode nedir?

Unicode Unicode Consortium organizasyonu tarafından geliştirilen ve her karaktere bir sayı değeri karşılığı atayan bir endüstri standardıdır.

- ASCII yalnızca Latin alfabesi için kullanılabilir ve Latin alfabelerinde bile çoğu zaman yeteri kadar
  verimli değildir. Unicode ise evrensel olarak tüm dillerin kullanımına uygun şekilde tasarlanmıştır.
- ASCII’nin kullanımına 1963 yılında başlanırken ASCII’nin yerini alan Unicode’un geliştirilmesine 1980
  yılında başlanmıştır.
- Unicode hala Unicode Konsoriyum’u tarafından kar amacı gütmeden geliştirilmeye devam edilmektedir.
- ASCII’nin geliştirilmesi yıllar önce durdurulmuştur.
- Unicode’un geliştirilmesinin amacı evrensel olması ve platformlar arası yaşanan karmaşaların ortadan
  kaldırılmasıdır.
- ASCII tam olarak bir standart değilken Unicode tüm dünyada kabül görmeyi başaran bir standarttır.

## 3. Semantic ve Non-semantic Etiketler nelerdir ?

### 3.a) Semantic Etiketler

HTML5 semantik etiketler ile sayfanın farklı bölümlerini tanımlamak, daha anlaşılır ve okunaklı sayfa yapısı için gelmiştir. SEO için çok önemlidir.

- `<article>`
- `<aside>`
- `<details>`
- `<figcaption>`
- `<figure>`
- `<footer>`
- `<header>`
- `<main>`
- `<mark>`
- `<nav>`
- `<section>`
- `<summary>`
- `<time>`

### 3.b) Non-Semantic Etiketler

Semantic etiketler dışında kalan tüm etiketler non-semantic etiketlerdir. Non-semantic etiketler içeriği hakkında bilgi vermeyen etiketlerdir.

## 4. Position Relative ve Absolute Farkı ?

` position:relative;` verildiği zaman, kutunun boşluğunu ayarladğımızda eski olan konumu yer kaplamaya devam eder.

```
.box1{
    position:relative;
    left:300px;
}
```

![Position-relative](./researchimage/p-relative.png)

`position:absolute` verildiği zaman ise yeni konum neredeyse sadece orası web sayfası üzerinde yer kaplar. Örnek vermek gerekirse...
Eski alana başka elementler gelebilir.

```
.box1{
    position:absolute;
    left:300px;
}
```

![Position-relative](./researchimage/p-absolute.png)

## 5. Box-sizing nedir?

`box-sizing:border-box` elementin genişlik ve yüksekliğine border ve padding değerleri dahildir.

```
.box{
   width:"100px;
   padding:"10px";
   border:"5px solid red";
}

```

böyle bir kod yapısında normalde padding ve border değerlerini de dahil ettiğimizde genişliğin 130px olması gerekirdi.

Ama ` box-sizing:"border-box"` sayesinde toplam genişlik 100px olarak kalmaktadır. Ve değerler otomatik ayarlanır toplamda 100px olacak şekilde.

`box-sizing:content-box` ise tam tersidir padding ve border değerleri genişliğin üstüne eklenir ve 130px olur.

## 6. Visibility:hidden ve display:none Arasındaki fark nedir?

`visibility:hidden` kodunu kullandığımız zaman web sayfasında görünmez ama yer kaplamaya devam eder.

`display:none` kodunu kullandığımız zaman web sayfasında görünmez ve yer de kaplamaz.

Örnek olarak başlangıçta yine 3 tane kutumuz olsun

![Position-relative](./researchimage/3-box.png)

```
.box{
   visibility:hidden;
}

```

![Position-relative](./researchimage/visibility-hidden.png)

```
.box{
   display:none;
}

```

![Position-relative](./researchimage/display-none.png)
