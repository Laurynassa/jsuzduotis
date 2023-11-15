"use strict";
//pirma uzduotis
let pazymiai = 2; //parseInt(prompt("Iveskite skaiciu, kuris atstovautu menesi"));

if (1 == pazymiai || pazymiai == 2 || pazymiai == 3) {
  console.log("Neigiamas pažymys");
} else if (pazymiai == 4 || pazymiai == 5) {
  console.log("Teigiamas, bet reikia pasistengti");
} else if (pazymiai == 6 || pazymiai == 7) {
  console.log("Vidutiniškai,ar tikrai tau to gana?");
} else if (pazymiai == 8 || pazymiai == 9) {
  console.log("Pagirk save!");
} else if (pazymiai == 10) {
  console.log("Super!");
} else {
  console.log("Pateikta neteisinga reiksme");
}
//antra uzd
let men = "Gruodis";

switch (men) {
  case "Gruodis":
  case "Sausis":
  case "Vasaris":
    console.log("Žiemos sezonas");
    break;
  case "Kovas":
  case "Balandis":
  case "Geguze":
    console.log("Pavasario sezonas");
    break;
  case "Birzelis":
  case "Liepa":
  case "Rugpjutis":
    console.log("Vasaros sezonas");
    break;
  case "Rugsejis":
  case "Spalis":
  case "Lapkritis":
    console.log("Rudens sezonas");
    break;
  default:
    console.log("Susipykai su mėnesiais");
    break;
}
//trecia uzd
let Time = 5;

if (6 >= Time && Time <= 11) {
  console.log("Labas rytas");
} else if (Time >= 12 && Time <= 18) {
  console.log("Laba diena");
} else if (Time >= 19 && Time <= 21) {
  console.log("Labas vakaras");
} else {
  console.log("Labanakt");
}
//ketvirta uzd

const date = new Date();
console.log(date);

const day = date.getDay();
switch (day) {
  case 1:
    console.log("Siandien Pirmadienis");
    break;
  case 2:
    console.log("Siandien Antradienis");
    break;
  case 3:
    console.log("Šiandien trečiadienis");
    break;
  case 3:
    console.log("Siandien Ketvirtadienis");
    break;
  case 3:
    console.log("Siandien Penktadienis");
    break;
  case 3:
    console.log("Siandien Sestadienis");
    break;
  case 3:
    console.log("Siandien Sekmadienis");
    break;
}
//penkta uzd

let paauglys = 19;

if (paauglys >= 18) {
  console.log("Jus esate pilnametis");
  if (paauglys >= 20) {
    console.log("Atsiprasome negali isigiti A kat");
  }
} else {
  console.log("truksta metuku");
}

//sesta uzd
const Number = 100;

if (Number == 0) {
  console.log("Skaičius lygus 0");
} else if (Number > 0) {
  console.log("Skaičius yra teigiamas");
} else {
  console.log("Skaičius neigiamas");
}
//septinta uzd

const user = true;
const Prem = true;

if (user == true) {
  console.log("Vartotojas online ");
  if (user == true && Prem == false) {
    console.log("Vartotojas online, ne admin");
  } else if (user == true && Prem == true) {
    console.log("Vartotojas yra online ir admin");
  }
} else {
  console.log("Vartotojas atsijunges");
}
//astunta uzd
const simple = false;
const Pre = true;
const skelbimas = true;

if (simple == true) {
  console.log("Vartotojas(simpleuser) online ");
  if (simple == true && skelbimas == true) {
    console.log("Galite ištrinti skelbimą");
  }
} else if (Pre == true) {
  console.log("Vartotojas(admin) prisijungęs");
  if (Pre == true) {
    console.log("Galite patvirtinti skelbimą");
  }
} else {
  console.log("Prašome prijungti vartotoją");
}
//devinta uzd
let irasas = prompt("Iveskite skaiciu: ");

if (irasas > 50) {
  console.log(irasas);
} else {
  console.log("Ivestas skaičius yra mažesnis negu 50");
}

//dešimta užd

const a = 5;
const b = 10;
const simbol = "*";
if (simbol == "+") {
  const suma = a + b;
  console.log(`${suma}`);
} else if (simbol == "-") {
  const suma = a - b;
  console.log(`${suma}`);
} else if (simbol == "*") {
  const suma = a * b;
  console.log(`${suma}`);
} else if (simbol == "/") {
  const suma = a / b;
  console.log(`${suma}`);
} else {
  console.log("Užtenka šiandiena ačiū.!");
}
