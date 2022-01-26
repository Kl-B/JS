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

function mathAddTwo() {
  let input1 = document.getElementById("firstnumber").value;
  let input2 = document.getElementById("secondnumber").value;

  document.getElementById("displaytext4").innerText =
    parseFloat(input1) + parseFloat(input2);
}

function mathCompare() {
  let input1 = document.getElementById("compare1").value;
  let input2 = document.getElementById("compare2").value;

  if (input1 > input2) {
    document.getElementById("displaytext5").innerText = "YES";
  } else if (input1 < input2) {
    document.getElementById("displaytext5").innerText = "NO";
  } else {
    document.getElementById("displaytext5").innerText = "EQUAL";
  }
}

let number1 = 1;
function addOne() {
  number1++;
  document.getElementById("displaytext6").innerText = number1;
}

let isOn = false;
function toggle() {
  isOn = !isOn;
  document.getElementById("displaytext7").innerText =
    isOn === true ? "On" : "Off";
}
