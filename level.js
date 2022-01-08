function level() {
  let level = parseInt(localStorage.getItem("level"));
  let XP = parseInt(localStorage.getItem("exp"));
  let xpCount = document.getElementById("exp");
  let lvlCount = document.getElementById("lvl");
  let remaining = document.getElementById("xpcount");

  lvlCount.innerHTML = "Lvl. " + parseInt(localStorage.getItem("level"));

  let levelreq = level * level * level * 1000;
  remaining.innerHTML = XP + "/" + levelreq + " exp";
  xpCount.max = levelreq;
  xpCount.value = XP;
  times = XP / levelreq;
  if (XP >= levelreq) {
    console.log("lvlup");
    levelUp();
  }
  function levelUp() {
    localStorage.setItem("level", level + 1);
    localStorage.setItem("exp", XP - levelreq);
    xpCount.value = localStorage.getItem("exp");
    lvlCount.innerHTML = "Lvl. " + parseInt(localStorage.getItem("level"));
  }
}
level();
setInterval(level, 10);
