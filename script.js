let rate = parseInt(localStorage.getItem("rate"));

let moeneyCount = parseInt(localStorage.getItem("money"));
var Random = [
  "Its best to buy a stock when it is around 9$ of value per share!",
  "Coinflip has a 1% higher chance of victory when you choose heads!",
  "Unlike real estate, stocks constantly change value and are therefore a great way of profit!",
  "If you find any bugs or the likes, let us know on the discord server. It can be found in the settings.",
  "Also try Money clicker by IlluBytes!",
  "There may or may not be a limit for clicking, be careful.",
  "Clicking is by far the slowest way of income in the game. Go out there and take a risk!",
  "Even when the app is closed, you will recieve your income per hour when its next opened. And no, it doesnt run in the background!",
  "Hell, might even add groceries next.",
  "Im out of tips. God help me.",
  "If you enjoy the game, concider rating it!",
  "Careful with the reset. One click and all your progress is gone.",
  "Any features you would like to have? Let me know on discord. Can be found in settings!",
  "The changes to the value of a stocks are hourly. So thats the time to check a stocks value for profit.",
  "The lowest value a stock can have is 3, and the highest 90.",
  "Have you just bought a real estate and your income per minute didnt increase? go to the main screen and back to menu again.",
  "The goblins inside of the upgrade machine get tired if the button is overused. its also not very profitable.",
  "Even though it says /hour under me, the payouts are minutely.",
  "Dont even concider clicking on tips, totally nothing will happen...",
  "You used to be able to buy the same real estates mutliple times, until a friend pointed it out.",
  "Do you like the game? Thank stackoverflow and coffe.",
  "The price of the rate is always its level times 19.",
  "If you somehow manage to get in the negatives, youre in for a surprise.",
  "I forgot to add limits to buying stocks, and am too lazy to do it.",
  "Your chance doesnt actually increase in lotto with more money on the line. Its a lie to make you lose.",
  "Chance of victory is 2% in lotto, and about 50% in coinflip. I said about due to another tip.",
  "Income per minute may be inaccurate at times.",
  "I added Creator because i didnt want to add more real estate.",
  "Dont trust the sympathic alerts. They are bait.",
  "One of the real estates is a friend's old house.",
  "Lendo is the best stock. Invest in it.",
  "If it didnt have ads, id probably be dead.",
  "I dont know why you would, but tips can be disabled in settings.",
  "Ive done everything i could to make the game hard to conquer.",
  "The hardest feature  to make was loans.",
  "Loans are a quick way of getting the funds for an investment. Keep the due date in mind though. It may cost you all your assets.",
  "Upgrade your buildings if you are looking for an affordable increase in income.",
  "Are you a developer? Concider joining the discord server to help with the game. ",
  "No idea how you would do it, but you can upgrade the floor heating of a cardboard box in this game",
  "Go ahead, use an autoclicker. It wont get you enough money anyways.",
];
if (localStorage.getItem("tipsOn") != "false") {
  document.getElementById("tip").innerHTML =
    "Tip: " + Random[Math.floor(Math.random() * Random.length)];
}

stockChange();
document.getElementById("moneyCount").innerHTML =
  moeneyCount.toLocaleString() + "$";

if (moeneyCount < 0) {
  alert(
    "Oops, you are in the negative. Currently, you are financially unstable."
  );
}
let output;
function clickMoney() {
  let moeneyCount = parseInt(localStorage.getItem("money"));
  moeneyCount += 1 * rate;
  document.getElementById("moneyCount").innerHTML =
    moeneyCount.toLocaleString() + "$";
  localStorage.setItem("money", parseInt(moeneyCount));
}

function income() {
  let totalIncome = 0;
  let availableRE;
  availableRE = JSON.parse(localStorage.getItem("ownedEstate"));
  for (let i = 0; i < availableRE.length; i++) {
    totalIncome = totalIncome + parseInt(availableRE[i].rentIncome);
  }
  var today = new Date();
  let rn =
    today.getFullYear() * 12 * 30 * 24 * 60 +
    today.getMonth() * 30 * 24 * 60 +
    today.getDate() * 24 * 60 +
    today.getHours() * 60 +
    today.getMinutes();
  prestep = rn - localStorage.getItem("lastIncome");

  altstep = prestep * totalIncome;
  localStorage.setItem(
    "money",
    parseInt(localStorage.getItem("money")) + altstep
  );

  let moeneyCount = parseInt(localStorage.getItem("money"));
  document.getElementById("moneyCount").innerHTML =
    moeneyCount.toLocaleString() + "$";

  var today = new Date();

  localStorage.setItem(
    "lastIncome",
    today.getFullYear() * 12 * 30 * 24 * 60 +
      today.getMonth() * 30 * 24 * 60 +
      today.getDate() * 24 * 60 +
      today.getHours() * 60 +
      today.getMinutes()
  );
  document.getElementById("minute").innerHTML =
    parseInt(parseInt(totalIncome) * 60).toLocaleString() + "$/hour";
  console.log("income");
  localStorage.setItem("totalincome", totalIncome);
}
income();
setInterval(income, 5000);
function stockChange() {
  console.log("heh");
  var today = new Date();
  let rn =
    today.getFullYear() * 12 * 30 * 24 * 60 +
    today.getMonth() * 30 * 24 * 60 +
    today.getDate() * 24 * 60 +
    today.getHours() * 60 +
    today.getMinutes();
  stocks = JSON.parse(localStorage.getItem("stocks"));
  prestep = rn - localStorage.getItem("lastIncome");
  if (prestep < 100) {
    for (var l = 0; l < prestep; l++) {
      for (var i = 0; i < stocks.length; i++) {
        ranNum = Math.random() * 100;
        if (ranNum > 50) {
          if (stocks[i].currValue < 90) {
            stocks[i].currValue += parseInt(Math.random() * 15);
            console.log(stocks[i].Name + " gained " + stocks[i].currValue);
          }
        }
        if (stocks[i].currValue > 90) {
          stocks[i].currValue = 5;
        }
        if (ranNum < 50) {
          if (stocks[i].currValue > 6) {
            stocks[i].currValue -= parseInt(Math.random() * 10);
            console.log(stocks[i].Name + " lost " + stocks[i].currValue);
          }
        }
        //Do something
      }
      localStorage.setItem("stocks", JSON.stringify(stocks));
      //Do something
    }
  }
}

let today = new Date();
let rn =
  today.getFullYear() * 12 * 30 + today.getMonth() * 30 + today.getDate();
console.log(" rn is " + rn);
if (
  localStorage.getItem("debtDue") - rn < 1 &&
  localStorage.getItem("debtDue") - rn > -90 &&
  localStorage.getItem("debt") > 1
) {
  alert(
    "Your debt has not been paid in time, and has therefore been subtracted from your balance along with a fine."
  );
  localStorage.setItem(
    "money",
    parseInt(localStorage.getItem("money")) - localStorage.getItem("debt") * 3
  );
  localStorage.setItem("debt", 0);
}
