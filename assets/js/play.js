const batu = document.getElementById("batu");
const kertas = document.getElementById("kertas");
const gunting = document.getElementById("gunting");
const hasil = document.getElementById("hasil");

function getComputerChoice() {
  const choices = ["BATU", "KERTAS", "GUNTING"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game(playerChoice) {
  const comChoice = getComputerChoice();
  console.log("PLAYER MEMILIH " + playerChoice);
  console.log("COMPUTER MEMILIH " + comChoice);
  result(playerChoice, comChoice);
}

function main() {
  batu.addEventListener("click", () => {
    game("BATU");
    batu.classList.add("pilihan");
    kertas.classList.remove("pilihan");
    gunting.classList.remove("pilihan");
  });
  kertas.addEventListener("click", () => {
    game("KERTAS");
    kertas.classList.add("pilihan");
    batu.classList.remove("pilihan");
    gunting.classList.remove("pilihan");
  });
  gunting.addEventListener("click", () => {
    game("GUNTING");
    gunting.classList.add("pilihan");
    batu.classList.remove("pilihan");
    kertas.classList.remove("pilihan");
  });
}

function result(playerChoice, comChoice) {
  if (playerChoice === comChoice) {
    console.log("DRAW");
  } else if (playerChoice == "BATU" && comChoice == "GUNTING") {
    console.log("MENANG");
  } else if (playerChoice == "BATU" && comChoice == "KERTAS") {
    console.log("KALAH");
  } else if (playerChoice == "GUNTING" && comChoice == "KERTAS") {
    console.log("MENANG");
  } else if (playerChoice == "GUNTING" && comChoice == "BATU") {
    console.log("KALAH");
  } else if (playerChoice == "KERTAS" && comChoice == "BATU") {
    console.log("MENANG");
  } else if (playerChoice == "KERTAS" && comChoice == "GUNTING") {
    console.log("KALAH");
  }
}

main();
