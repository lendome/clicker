//setInterval(updatemsg, 1000);
if (parseInt(localStorage.getItem("init")) != 1) {
  alert("Hi");
  let stocks = [
    {
      Name: "Pizzaria inc",
      totalValue: "1.000.000",
      currValue: 2,
      owned: "0",
    },
    {
      Name: "Borgir shop",
      totalValue: "20.000.000",
      currValue: 3,
      owned: "0",
    },
    {
      Name: "Lendo",
      totalValue: "503.000.000",
      currValue: 19,
      owned: "0",
    },
    {
      Name: "MicroHard",
      totalValue: "194.042.702",
      currValue: 34,
      owned: "0",
    },
    {
      Name: "Laboon",
      totalValue: "254.339.404",
      currValue: 25,
      owned: "0",
    },
    {
      Name: "Googol",
      totalValue: "29.139.951",
      currValue: 18,
      owned: "0",
    },
    {
      Name: "cherry",
      totalValue: "518.586.828.638.428.139.951",
      currValue: 235822,
      owned: "0",
    },
    {
      Name: "sonsung",
      totalValue: "103.504.481.821",
      currValue: 39,
      owned: "0",
    },
  ];

  let ownedStocks = [
    {
      Name: "Homeless shelter",
      owned: "0",
      pVal: "0",
    },
  ];

  let availableRE = [
    {
      name: "Cardboard box",
      price: 10,
      rentIncome: 1,
      img: "https://media.istockphoto.com/photos/carboard-box-wclippping-path-picture-id157318026?b=1&k=20&m=157318026&s=612x612&w=0&h=QWCsurukWgHE_ZWKfSP4C4Zj-ZsD1m7S0GAHCAaxXfo=",
    },
    {
      name: "Homeless shelter (a bed)",
      price: 50,
      rentIncome: 1,
      img: "https://images.unsplash.com/photo-1552558636-f6a8f071c2b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "Brick hut",
      price: 150,
      rentIncome: 1,
      img: "https://cdn.pixabay.com/photo/2014/03/08/11/46/brick-hut-283076_1280.jpg",
    },
    {
      name: "Run down house",
      price: 610,
      rentIncome: 2,
      img: "https://images.unsplash.com/photo-1592658221410-0f5c3615e7fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "1 bedroom apartment",
      price: 1000,
      rentIncome: 3,
      img: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "2 bedroom condo",
      price: 5000,
      rentIncome: 20,
      img: "https://images.unsplash.com/photo-1558244380-8ab582e57b72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29uZG98ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "Small pizza place",
      price: 7500,
      rentIncome: 65,
      img: "https://images.unsplash.com/photo-1552581359-50be62c4dd73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGl6emElMjBwbGFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "2 bedroom house",
      price: 22000,
      rentIncome: 80,
      img: "https://images.unsplash.com/photo-1434082033009-b81d41d32e1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGwlMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "luxury 2 bedroom apartment",
      price: 50000,
      rentIncome: 110,
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "downtown 2 bedroom house",
      price: 110000,
      rentIncome: 260,
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c21hbGwlMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "Downtown skyscraper apartment",
      price: 250000,
      rentIncome: 540,
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "Nice suburb 5 bedroom house",
      price: 410000,
      rentIncome: 1250,
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60",
    },

    {
      name: "suburb Villa",
      price: 900000,
      rentIncome: 3900,
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "Wahdan's gutshaus",
      price: 1000000,
      rentIncome: 4000,
      img: "https://projektraum-drahnsdorf.de/wp-content/uploads/2018/05/Drahnsdorf-Schloss2.jpg",
    },
    {
      name: "Downtown Villa",
      price: 1200000,
      rentIncome: 4600,
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "Apartment building",
      price: 7500000,
      rentIncome: 52000,
      img: "https://mapio.net/images-immo-expose/3744133/objekt-5-achtung-nur-mit-wbs-top-3-zimmerebk2xbalkonesszimmerfahrstuhl-in-lichterfelde-img-0.jpg",
    },
    {
      name: "Skyscraper",
      price: 10000000,
      rentIncome: 64000,
      img: "https://images.unsplash.com/photo-1443527394413-4b820fd08dde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5c2NyYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "PayStation tower",
      price: 500000000,
      rentIncome: 80000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0okT6faoB4gXrmSDxpEQqoqn81VTWy5cJfpn1IV40Lo05Yy9XZCQB-QPR019qWKRwAQ&usqp=CAU",
    },
    {
      name: "powerplant",
      price: 700000000,
      rentIncome: 80000,
      img: "https://img.morgenpost.de/img/berlin/crop215260007/4702669119-w1200-cv1_1/doc71rj0iufc9jmnzyrqx-MASTER.jpg",
    },
    {
      name: "Roman theatre",
      price: 1000000000,
      rentIncome: 100000,
      img: "https://images.unsplash.com/photo-1597425198328-539620c5cfcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8am9yZGFuJTIwcm9tYW4lMjB0aGVhdHJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "Nontando",
      price: 1200000000,
      rentIncome: 120000,
      img: "https://images.unsplash.com/photo-1612404459571-ccef4b6588e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmludGVuZG8lMjBjb21wYW55fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "World trade center",
      price: 2300000000,
      rentIncome: 140000,
      img: "https://images.unsplash.com/photo-1582436416930-f533b50a7cd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29ybGQlMjB0cmFkZSUyMGNlbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "Merkedes",
      price: 7000000000,
      rentIncome: 194000,
      img: "https://images.unsplash.com/photo-1526490025555-53f98769ce26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVyY2VkZXMlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "Tower of pisa",
      price: 8030000000,
      rentIncome: 360000,
      img: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dG93ZXIlMjBvZiUyMHBpc2F8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "Homeless shelter (all of it)",
      price: 9730000000,
      rentIncome: 590000,
      img: "https://images.unsplash.com/photo-1587763785363-ce73051a9fff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvbWVsZXNzJTIwc2hlbHRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "Skyscraper",
      price: 10000000000,
      rentIncome: 194000,
      img: "https://images.unsplash.com/photo-1541447271487-09612b3f49f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNreXNjcmFwZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "burj khalifa",
      price: 127300000000,
      rentIncome: 1020000,
      img: "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVyaiUyMGtoYWxpZmF8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "petra",
      price: 473000000000,
      rentIncome: 8020000,
      img: "https://images.unsplash.com/photo-1548786811-dd6e453ccca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0cmF8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "German Reichstag",
      price: 492000000000,
      rentIncome: 9200000,
      img: "https://images.unsplash.com/photo-1591079751210-718012d90ff7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVpY2hzdGFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "White house",
      price: 492000000000,
      rentIncome: 9200000,
      img: "https://images.unsplash.com/photo-1593047614267-378b863c98c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "Eiffel tower",
      price: 500000000000,
      rentIncome: 9520000,
      img: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZWlmZmVsJTIwdG93ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "Sphinx",
      price: 550000000000,
      rentIncome: 10000000,
      img: "https://images.unsplash.com/photo-1606419598525-3e3ff204b937?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2l6YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: " colosseum",
      price: 630000000000,
      rentIncome: 11000000,
      img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3NzZXVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
    },

    {
      name: "pyramids of giza",
      price: 750000000000,
      rentIncome: 14020000,
      img: "https://images.unsplash.com/photo-1623674587543-9c7564de99d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2l6YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
    },
  ];
  let ownedEstate = [
    {
      name: "alleyway",
      price: 0,
      rentIncome: 0,
      img: "https://images.unsplash.com/photo-1605032659978-a5bd04094a16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZWxlc3MlMjBzaGVsdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
    },
  ];
  let vehicles = [
    {
      name: "cheap bike",
      price: 40,
      img: "https://images.unsplash.com/photo-1458228269118-09f55da39bfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8b2xkJTIwYmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "Okay-ish bike",
      price: 60,
      img: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJpa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "Used Colf 1 (bad condition)",
      price: 700,
      img: "https://images.unsplash.com/photo-1556155304-28f97c2c4c62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29sZiUyMHZ3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "aodi a5 2001",
      price: 1100,
      img: "https://images.unsplash.com/photo-1527593382133-57352edcb994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXVkaSUyMG9sZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "cheap hatchback",
      price: 2000,
      img: "https://images.unsplash.com/photo-1585251027750-624a5bf40dc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGF0Y2hiYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "Eord American quarter horse",
      price: 10000,
      img: "https://images.unsplash.com/photo-1581650107963-3e8c1f48241b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "school bus",
      price: 12000,
      img: "https://images.unsplash.com/photo-1613688263142-67f1e0c25ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Nob29sJTIwYnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "walk (less carbon footprint)",
      price: 0,
      img: "https://images.unsplash.com/photo-1562440469-fc4588d94d0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdhbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "lombargine machine",
      price: 300000,
      img: "https://images.unsplash.com/photo-1622058232222-2700277d1a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGFtYm9yZ2hpbmklMjBvbGR8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "Roys roys",
      price: 500000,
      img: "https://images.unsplash.com/photo-1632548260498-b7246fa466ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvbGxzJTIwcm95Y2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1200&q=60",
    },
    {
      name: "lambogine",
      price: 1200000,
      img: "https://images.unsplash.com/photo-1611900713725-864f48309d67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxhbWJvcmdoaW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
    },
  ];
  let ownedVehicles = [
    { name: "legs. They work so why complain?", price: "infinite" },
  ];
  localStorage.setItem("availableRE", JSON.stringify(availableRE));
  localStorage.setItem("vehicles", JSON.stringify(vehicles));
  localStorage.setItem("stocks", JSON.stringify(stocks));
  localStorage.setItem("ownedEstate", JSON.stringify(ownedEstate));
  localStorage.setItem("ownedVehicles", JSON.stringify(ownedVehicles));
  localStorage.setItem("ownedStocks", JSON.stringify(ownedStocks));
  localStorage.setItem("debt", 0);
  localStorage.setItem("money", "0");
  localStorage.setItem("rate", 1);
  localStorage.setItem("init", 1);
} else {
  console.log("initiated already");
}
