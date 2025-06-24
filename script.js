const nome = document.getElementById("nameInput");
const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");

nome.addEventListener("input", function() {
    if (valor === "j" || valor === "jo") {
        r1.style.display = "block";
        r2.style.display = "none";
        r3.style.display = "none";
    } 
    else if (valor === "c" || valor === "cl") {
        r1.style.display = "none";
        r2.style.display = "block";
        r3.style.display = "none";
    } 
    else if (valor === "m" || valor === "ma") {
        r1.style.display = "none";
        r2.style.display = "none";
        r3.style.display = "block";
    } 
    else {
        r1.style.display = "none";
        r2.style.display = "none";
        r3.style.display = "none";
    }
});