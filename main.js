var ttemp = 0
var tempp = 0
var autoclick1 = Number(localStorage.getItem('autoclick1'));
var autoclick2 = Number(localStorage.getItem('autoclick2'));
var score = Number(localStorage.getItem('score'));
var autoclick = Number(localStorage.getItem('autoclick'));
let tecPic = 'Pin';
var cell = Number(localStorage.getItem('chort'));
localStorage.setItem('score', score);
localStorage.setItem('autoclick', autoclick);
var timerId;
var autoCell = Number(localStorage.getItem('autoCel'));

function tryaska() {
  document.getElementById("clickButton").classList.remove('clicked');
}

function monkTrig(){
  document.getElementById("die").src = 'monkey1.png';
  document.getElementById("clickButton").classList.remove('clickedMonk');
}

function pinTrig(){
  document.getElementById("die").src = 'penguin.jpg';
  document.getElementById("clickButton").classList.remove('clickedPin');
}


function cheking(){
  var atemp = Number(localStorage.getItem('score'));
  var attemp = Number(localStorage.getItem('chort'));
  var atttemp = Number(localStorage.getItem('autoclick'));
  var attttemp = Number(localStorage.getItem('autoCel'));
  if(atemp >= attemp){
    atttemp += 5;
    attttemp += 5;
    localStorage.setItem('autoCel', attttemp);
    localStorage.setItem('autoclick', atttemp);
    attemp += 1000^1.5;
    document.getElementById("cel").innerHTML = "Ваша цель: " + attemp + '<br>(+5 автокликов)';
    localStorage.setItem('chort', attemp);
    document.getElementById("auto").innerHTML = atttemp;
    clearInterval(timerId);
    timerId = setInterval(axashop, 1000);
    alert("Поздравляем, вы достигли цели!!!");
    cell = Number(localStorage.getItem('chort'));
    autoclick = Number(localStorage.getItem('autoclick'));
  }
}


function axax() {
  score += 1;
  document.getElementById("demo").innerHTML = score;' очков'
  localStorage.setItem('score', score);
  localStorage.setItem('autoclick', autoclick);
  localStorage.setItem('autoclick1', autoclick1);
  localStorage.setItem('autoclick2', autoclick2);

  if(tecPic == 'Pin'){
    let deleteTrysakPin = setTimeout(pinTrig, 500);
    if(document.getElementById("clickButton").classList.contains('clickedPin')) {
      clearTimeout(deleteTrysakPin);
    } else {
    //console.log(document.getElementById("clickButton").classList.contains('clicked'));
      document.getElementById("clickButton").classList.add('clickedPin');
      document.getElementById("die").src = 'penguinsays.jpg';
    }
  }

  if(tecPic == 'Monk'){
    let deleteTrysakMon = setTimeout(monkTrig, 500);
    if(document.getElementById("clickButton").classList.contains('clickedMonk')) {
      clearTimeout(deleteTrysakMon);
    } else {
    //console.log(document.getElementById("clickButton").classList.contains('clicked'));
      document.getElementById("clickButton").classList.add('clickedMonk');
      document.getElementById("die").src = 'monkey2.png';
    }
  }

  let deleteTrysaka = setTimeout(tryaska, 500);
  if(document.getElementById("clickButton").classList.contains('clicked')) {
    clearTimeout(deleteTrysaka);
  } else {
    //console.log(document.getElementById("clickButton").classList.contains('clicked'));
    document.getElementById("clickButton").classList.add('clicked');
  }
}

function axashop(){
  autoclick = Number(localStorage.getItem('autoclick'));
  score += autoclick;
  document.getElementById("demo").innerHTML = score;
  localStorage.setItem('score', score);
  localStorage.setItem('autoclick', autoclick);
  localStorage.setItem('autoclick1', autoclick1);
  localStorage.setItem('autoclick2', autoclick2);
}



function shop(n){
  score = Number(localStorage.getItem('score'));
  autoclick = Number(localStorage.getItem('autoclick'));
  if((n == 1 && score - (autoclick1 + 1) * 50 >= 0) || (n == 2 && score - (autoclick2 + 1) * 100 >= 0)){
    autoclick += n;
    if(n == 1){
      costFor1();
    }else{
      costFor2();
    }
    document.getElementById("auto").innerHTML = autoclick;
    document.getElementById("demo").innerHTML = score;
    localStorage.setItem('autoclick', autoclick);
    clearInterval(timerId);
    timerId = setInterval(axashop, 1000);
  }else{
    alert("Слишком мало очков");
  }
}


function costFor1(){' очков'
  ttemp += 1;
  autoclick1 += 1;
  var temp = (autoclick1 + 1) * 50;
  document.getElementById("shop1").innerHTML = "Цена 1 автоклика = " + temp + '.';
  score -= (autoclick1) * 50;
  localStorage.setItem('score', score);
  localStorage.setItem('autoclick', autoclick);
  localStorage.setItem('autoclick1', autoclick1);
  localStorage.setItem('autoclick2', autoclick2);
}


function costFor2(){
  tempp += 1;
  autoclick2 += 1;
  var temp = (autoclick2 + 1) * 100;
  document.getElementById("shop2").innerHTML = "Цена 2 автокликов = " + temp + '.';
  score -= (autoclick2) * 100;
  localStorage.setItem('score', score);
  localStorage.setItem('autoclick', autoclick);
  localStorage.setItem('autoclick1', autoclick1);
  localStorage.setItem('autoclick2', autoclick2);
}' очков'





window.onload = function(){
  var temp = (autoclick1 + 1) * 50;
  document.getElementById("shop1").innerHTML = "Цена 1 автоклика = " + temp + '.';
  var temp = (autoclick2 + 1) * 100;
  document.getElementById("shop2").innerHTML = "Цена 2 автокликов = " + temp + '.';
  document.getElementById("demo").innerHTML = score;
  document.getElementById("auto").innerHTML = autoclick;
  document.getElementById("cel").innerHTML = "Цель: " + cell + '<br>(+5 автокликов)';
  timerId = setInterval(axashop, 1000);
  timerOfCel = setInterval(cheking, 500);
}






function offprogress(){
  score = 0;
  autoclick = 0;
  autoclick1 = 0;
  autoclick2 = 0;
  localStorage.setItem('score', score);
  localStorage.setItem('autoclick', autoclick);
  localStorage.setItem('autoclick1', autoclick1);
  localStorage.setItem('autoclick2', autoclick2);
  document.getElementById("demo").innerHTML = score;
  document.getElementById("auto").innerHTML = autoclick;
  var temp = 50;
  document.getElementById("shop1").innerHTML = "Цена 1 автоклика = " + temp + '.';
  var temp = 100;
  document.getElementById("shop2").innerHTML = "Цена 2 автокликов = " + temp + '.';
  document.getElementById("die").src = 'penguin.jpg';
  tecPic = 'Pin';
  clearInterval(timerId);
  cell = 1000;
  localStorage.setItem('chort', cell);
  document.getElementById("cel").innerHTML = "Ваша цель: " + cell + '<br>(+5 автокликов)';
}


function buyPictureMonkey(){
  if(tecPic == 'Pin'){
    if(score - 100 >= 0){
      document.getElementById("die").src = 'monkey1.png';
      score -= 100;
      localStorage.setItem('score', score);
      document.getElementById("demo").innerHTML = score;
      tecPic = 'Monk';
    }else{
      alert("Слишком мало очков");
    }
  }else{
    alert("Вы не можете сменить обезьяну на обезьяну.");
  }
}



function buyPicPen(){
  if(tecPic == 'Monk'){
    if(score - 100 >= 0){
      document.getElementById("die").src = 'penguin.jpg';
      score -= 100;
      localStorage.setItem('score', score);
      document.getElementById("demo").innerHTML = score;
      tecPic = 'Pin';
    }else{
      alert("Слишком мало очков");
    }
  }else{
    alert("Вы не можете поменять пингвина на пингвина.");
  }
}
// Math.trunc(Math.random() * 4);

function ending(){
  localStorage.setItem('chort', '');
}
