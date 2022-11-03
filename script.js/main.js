/*var str =  'внутренняя инфа о страничке !';//Чтобы передвигать ссылку куда нужно записал в css, она значится как font
var a_href = str.bold().fontcolor('yellow').link('JavaScript:alert("Реклама - поздравления 50/50 😁")');
//const a_href = document.querySelector('a_href');
/*if (a_href = str.fontcolor('yellow')) {
  //alert('hi');
 a_href = str.fontcolor('green');
}*/
//document.write(a_href);// создается ссылка в штмл зеленого цвета с выводом alert("Привет!")

function blinkeded() {
  const section = document./*getElementById*/querySelector('.continer-salute');
  if (section.style.visibility == "hidden") {
    section.style.visibility = "visible";
  } else {
    section.style.visibility = "hidden";
  }
} 
 window.setInterval(blinkeded, 4500); // можно подключить, чтоб массив салютов 
//появился, исчез

const cardOff = document.querySelector('.cardOff_christmas-vinok-2');/*нажимаем на cat, чтобы  выключить Деда Мороза в винке*/
//const photoOff = document.querySelector('.photoOff img');//нужно если нажимать на самого Деда Мороза , чтобы  выключить
// можно нажимать на самого Деда Мороза  /*photoOff*/
cardOff/*photoOff*/.addEventListener('click', function showHide(event) {
  event.stopPropagation();//чтоб событие не всплывало 
  const photoOff = document.querySelector('.photoOff img');/*dancingSantaWithShowMaiden*/
    photoOff.style.margin = "0px";
  if (photoOff.style.display == "block") { // если элемент найден // 
    photoOff.style.display = "none";
    return true;
  } else { // иначе он не найден
    photoOff.style.display = "block";
    return false;
  }
  //alert("hi");
});

//5 пример с AdjacentHTML
//создаем переменну с контентом, который будет в новом элементе 
//<article></article>,который будет расположен над <img class"friends">
const content = "₡ наступающим ❗";
document.querySelector(".garland-9").insertAdjacentHTML("beforebegin", 
`<article class="text-friends"> ${content} </article>`);
const textFriends = document.querySelector('.text-friends');
  textFriends.style ="font-size: 121px";
  //textFriends.style.position ="absolute";
  //textFriends.style.width ="933px";
  textFriends.style.color = "#ff4700";
  textFriends.style.top = "2773p";
  //textFriends.style.left = "268px";
  textFriends.style.zIndex = "2";
  textFriends.style.textShadow = "7px 7px 7px";

function blink() {
  const article = document./*getElementById*/querySelector('.text-friends');//#hi
  if (article.style.visibility == "hidden") {
    article.style.visibility = "visible";
    //textFriends.style.color = "green"; изменить цвет текста здесь можно
  } else {
    article.style.visibility = "hidden";
  }
} 
/*можно сделать в штмл див или артикль id, но рекомендуют, чтобы id был 1, или class с текстом hi, найти его 
const article = document.getElementById, .querySelector('hi'); и включить сэт интервал*/
//window.setInterval(blink, 2000);
const time = setInterval(() => {
  const resultLoop = blink();
  if (resultLoop === true) { // если элемент найден
    clearInterval(time); // остановить setInterval
  }
}, 2000);