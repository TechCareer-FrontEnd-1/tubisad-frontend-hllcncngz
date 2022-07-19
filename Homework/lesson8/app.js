/*HTML
    <button onclick="showDate()">Date</button>
    <p id="dateValue">Tarih</p>
*/


let showDate = () => {
    let dateValueDOM = document.getElementById("dateValue")
    dateValueDOM.innerHTML = `${new Date()}`
    dateValueDOM.style.backgroundColor ="blue"
    dateValueDOM.style.color ="white"
}
