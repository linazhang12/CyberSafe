var young = document.getElementById("young");
var old = document.getElementById("old");

function setYoung() {
    localStorage.setItem('Age', "Under-13");
    young.style.backgroundColor = "#F9C70C";
    old.style.backgroundColor = "#FFFFFF"
}

function setOld() {
    localStorage.setItem('Age', "Over-13");
    old.style.backgroundColor = "#F9C70C";
    young.style.backgroundColor = "#FFFFFF"
}
