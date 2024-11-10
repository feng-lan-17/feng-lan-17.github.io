let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
alert("hello!welcome to nuyoah's world! ");
let myButton = document.querySelector("#lan");
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
        myHeading.textContent = `So glad to me you! ${myName}`;
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `So glad to meet you!! ${storedName}`;
}
myButton.onclick = function () {
    setUserName();
};