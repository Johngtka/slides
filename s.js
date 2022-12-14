// wywołanie metody ładującej poniższe funkcje z obsługą opóźnień wyświetlenia
window.onload = () => {
    setInterval(data, 1000)
    data()
    setInterval(zmienslajd, 5000)
    zmienslajd()
}
// definicja zmiennej randomowych numerów które pochodzą z zaokrąglonego zakresu wybierane randomowo z od 1-6
var numer = Math.floor(Math.random() * 6) + 1
// funkcja zmieniająca slajd
function zmienslajd() {
    // inkrementacja 
    numer++
    // warunek sprawdzający czy wygenerowany numer jest > od 6 jeśli tak to przewinięcie slajdów do początku
    if (numer > 6) numer = 1
    // definicja zmiennej z zawartością znacznika html + numer slajdu (konkatenowano)
    var plik = '<img src="slajdy/slajd' + numer + '.png" />'
    // uchwyt do div gdzie ma się pojawić slajd i wyświetlenie zmiennej ze slajdem i numerem w elemencie uchwytu 
    document.querySelector('#sl').innerHTML = plik
}
// funkcja do obsługi daty
function data() {
    // inicjalizacja zmiennej time przechowującej obiekt
    var time = new Date()
    // window.time = new Date()
    // zmienna przechowująca metode dnia zmiennej globalnej time 
    var day = time.getDate()
    // zmienna przechowująca metode miesiąca zmiennej globalnej time
    var mon = time.getMonth() + 1
    // zmienna przechowująca metode roku zmiennej globalnej time
    var year = time.getFullYear()
    var h = time.getHours()
    // warunek obsługi 1 cyfrowego wyświetlania
    if (h < 10) h = "0" + h
    // zmienna przechowywująca metodę minut zmiennej globalnej time
    var m = time.getMinutes()
    // warunek obsługi 1 cyfrowego wyświetlania
    if (m < 10) m = "0" + m
    // zmienna przechowywująca metodę sekund zmiennej globalnej time
    var s = time.getSeconds()
    // warunek obsługi 1 cyfrowego wyświetlania
    if (s < 10) s = "0" + s
    // żarcik
    if (time.getHours() === 21 && time.getMinutes() === 37) {
        console.log("kremówki")
    }
    // uchwyt do div gdzie ma się pojawić data i wyświetlenie tam tych danych
    document.querySelector('#data').innerHTML = day + "." + mon + "." + year + '<br>' + h + ":" + m + ":" + s
}