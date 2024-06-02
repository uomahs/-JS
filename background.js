const images = [
    "0.jpg", "1.jpg", "3.jpg", "4.jpg"
]
const chosenImage = images[Math.floor(Math.random() * images.length)];
//절대 images.length 만큼의 길이가 나오지 않음!! images.length가 5라고 치면 4까지만 나옴
const image = document.createElement("img");
image.src =`img/${chosenImage}`; //html에 img태그 추가한거랑 같음
image.classList.add('img'); // 클래스를 추가
document.body.appendChild(image); //body 태그 안에 넣기

