//Q1 and Q2
function callAlert() {
    alert("Thanks for purchasing a phone from us");
}

///Q3
function deleteRow(r) {
    var i =
        r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

//Q5
var i = 0;
function buttonClickToIncrease() {
    i++;
    document.getElementById('inc').value = i;
}
function buttonClickToDecrease() {
    i--;
    document.getElementById('inc').value = i;
}