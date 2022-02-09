
// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//   alert('我最喜欢巧克力冰激淋了。');
// } else {
//   alert('但是巧克力才是我的最爱呀……');
// }

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

// document.querySelector('html').onclick = function() {
//   alert('别戳我，我怕疼。');
// }

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    console.log('000000000000')
    if(mySrc === 'images/logo192.png') {
      myImage.setAttribute('src', 'images/favicon.ico');
    } else {
      myImage.setAttribute('src', 'images/logo192.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  console.log('input your name >>>>>')
  let myName = prompt('请输入你的名字。');
  if (!!myName) {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  } else {
    // setUserName();
  }
}

if(!!localStorage.getItem('name')) {
//   console.log('input your name >>>>>local')
//   setUserName();
// } else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 你好: ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}