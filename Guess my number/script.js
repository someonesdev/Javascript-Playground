let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

let secretNumber = document.querySelector(".number").textContent;
let message = document.querySelector(".message");
let guess = document.querySelector(".guess");
let checkButton = document.querySelector(".check");

checkButton.addEventListener("click", check);
guess.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        check();
    }
})

function check() {
  let guess = document.querySelector(".guess").value;
  console.log(guess);
  if (guess == randomNumber) {
    message.textContent = "YOU WON!";
  } else if (!guess) {
    message.textContent = "That is not a valid number.";
  } else {
    message.textContent = "Try again!";
  }
}
