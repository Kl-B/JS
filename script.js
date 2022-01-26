function showText() {
  document.getElementById("printhello").innerText = "Hello!";
}

function copyText() {
  let searchEL = document.getElementById("searchbar").value;
  let elementErr = document.getElementById("displaytext");

  if (searchEL === "" || searchEL.includes("*")) {
    elementErr.innerText = "Error!";
    elementErr.style.border = "2px solid red";
  } else {
    document.getElementById("displaytext").innerText =
      `${searchEL}`.toUpperCase();
    elementErr.style.border = "1px dotted black";
  }
}

function addStars() {
  let searchEL = document.getElementById("searchbar").value;
  document.getElementById("displaytext").innerText = `*${searchEL}*`;
}

function surround() {
  let input1 = document.getElementById("surround1").value;
  let input2 = document.getElementById("surround2").value;
  if (input2 === "" || input2.length > 1) {
  } else {
    document.getElementById("displaytext2").innerText =
      input2 + input1 + input2;
  }
}

function mathAdd() {
  let number = document.getElementById("math").value;
  document.getElementById("displaytext3").innerText = parseFloat(number) + 300;
}
