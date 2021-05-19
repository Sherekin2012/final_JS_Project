const name = document.getElementById("name");
const height = document.getElementById("height");
const gender = document.getElementById("gender");
const hair_color = document.getElementById("haircolor");
const eye_color = document.getElementById("eyecolor");
const skin_color = document.getElementById("skincolor");
const button = document.querySelector(".getRandomCharacter");

button.addEventListener('click', (e) =>{
    e.preventDefault()

    const randomNumber = Math.ceil(Math.random() * 83)
    fetch(`https://swapi.dev/api/people/ ${randomNumber}/`)
    .then(response => response.json())
    .then(character => {
        name.innerHTML = character['name'];
        height.innerHTML = character['height'];
        gender.innerHTML = character['gender'];
        haircolor.innerHTML = character['hair_color'];
        eyecolor.innerHTML = character['eye_color'];
        skincolor.innerHTML = character['skin_color'];

    })
})

let count = 0;
const myInterval = setInterval(function(){
alert("May the Force be with you...always.")
count++;

if (count === 1) {
clearInterval(myInterval)

}
}, 5000)