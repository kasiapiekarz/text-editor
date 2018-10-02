var textInput = document.getElementById("textInput");
var textOutput = document.getElementById("textOutput");
var btnAdd = document.querySelector(".add");
var btnDel = document.querySelector(".del");
btnAdd.addEventListener("click", function () {
    textOutput.innerHTML += " "+textInput.value;
    textInput.value = "";
    localStorage.setItem("textBox", textOutput.innerHTML);
});
var isSaved = localStorage.getItem("textBox");
if (isSaved) {
    textOutput.innerHTML = isSaved;
}
btnDel.addEventListener("click", function () {
    localStorage.removeItem("textBox");
    textOutput.innerHTML = "";
});