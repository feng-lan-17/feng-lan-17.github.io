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
document.querySelector('#yu').addEventListener('click', function() {
    alert('嘿嘿嘿');
});
const images = document.querySelectorAll('.slider-image');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

// 初始化显示第一张图片
showImage(currentIndex);