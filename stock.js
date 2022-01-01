//setInterval(updatemsg, 1000);

let stocks = [
  {
    Name: "Pizzaria inc",
    totalValue: "1.000.000",
    currValue: "2",
    owned: "0",
  },
  {
    Name: "Borgir shop",
    totalValue: "20.000.000",
    currValue: "3",
    owned: "0",
  },
];
thestock = localStorage.getItem(localStorage.getItem("laststock"));
document.getElementById("sn").innerHTML = thestock.Name;
