let rate = parseInt(localStorage.getItem("rate"));

let moeneyCount = parseInt(localStorage.getItem("money"));

document.getElementById("moneyCount").innerHTML =
  moeneyCount.toLocaleString().replace(".", ",") + "$";

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
    moeneyCount.toLocaleString().replace(".", ",") + "$";
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
    moeneyCount.toLocaleString().replace(".", ",") + "$";

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
    parseInt(totalIncome).toLocaleString() * 60 + "$/hour";
  console.log("income");
  localStorage.setItem("totalincome", totalIncome);
}
income();
setInterval(income, 5000);
