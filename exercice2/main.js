let a = 1;
let b = 4;
let c = 3;

if (a == b) {
  console.log('c\'est egal');
}

if (c < b && a + c != 3) {
  console.log('ok');
} else {
  console.log('raté');
}

switch (a) {
  case 4:
    console.log('ma variable a est égale à 4');
    break;

  case 2:
    console.log('ma variable a est égale à 2');
    break;

  default:
    console.log('ma variable est pas dans les cases');
    break;
}