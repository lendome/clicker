let betVal = 0;
function addVal(id) {
  betVal += parseInt(id);
  console.log(betVal);
  document.getElementById("betValue").innerHTML = betVal;
}
function addValt(id) {
  betVal += parseInt(id);
  console.log(betVal);
  document.getElementById("betValue2").innerHTML = betVal;
}
function reset() {
  betVal = 0;
  document.getElementById("betValue").innerHTML = betVal;
}
let betSid = "";
function betSide(id) {
  betSid = id;
  console.log(betSid);
}
function Lottery() {
  if (parseInt(localStorage.getItem("money")) > betVal) {
    localStorage.setItem(
      "money",
      parseInt(localStorage.getItem("money")) - betVal
    );
    luckyNum = parseInt(Math.random() * 100);
    if (luckyNum == 27 || luckyNum == 74) {
      console.log("Victory");
      winnings = parseInt(Math.random() * Math.random() * 1000);
      alert("What coincidence! youve won " + winnings);
      localStorage.setItem(
        "money",
        parseInt(localStorage.getItem("money")) + winnings
      );
    } else {
      alert("you lose... better luck next time!");
    }
  }

  betVal = 0;
  document.getElementById("betValue").innerHTML = betVal;
}
function coinFlip() {
  if (betVal != 0 && betSid != "") {
    if (parseInt(localStorage.getItem("money")) > betVal) {
      luckyNum = parseInt(Math.random() * 100);
      console.log(luckyNum);
      localStorage.setItem(
        "money",
        parseInt(localStorage.getItem("money")) - betVal
      );
      if (luckyNum < 49 && betSid == "heads") {
        console.log("win");
        localStorage.setItem(
          "money",
          parseInt(localStorage.getItem("money")) + betVal * 2
        );
        alert("It was heads, you won " + betVal * 2);
      }
      if (luckyNum > 49 && betSid == "heads") {
        console.log("loss");
        alert("It was heads, you lost");
      }
      if (luckyNum > 49 && betSid == "tails") {
        console.log("win");
        alert("It was tails, you won " + betVal * 2);
        localStorage.setItem(
          "money",
          parseInt(localStorage.getItem("money")) + betVal * 2
        );
      }
      if (luckyNum < 49 && betSid == "tails") {
        console.log("loss");
        alert("It was tails, you lost");
      }
    } else {
      alert("Insufficient funds!");
    }
  } else {
    alert("please choose a side and add a value.");
  }
  betVal = 0;
  document.getElementById("betValue").innerHTML = betVal;
}
function openModal(modalId) {
  modal = document.getElementById(modalId);
  if (modal.style.display == "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}
