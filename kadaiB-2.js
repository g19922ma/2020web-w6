     let myButton = document.querySelector('button');
     let myHeading = document.querySelector('h1');
     function setUserName() {
     let myName = prompt('占いたい人の名前を入力してください。');
     localStorage.setItem('name', myName);
     myHeading.textContent = myName+'さんの今年の運勢は・・・';
     }
     myButton.style.border = "dashed 1px white";
     myButton.style.backgroundColor = "rgb(240,144,141)";
     myButton.onclick = function() {
     setUserName();
     }
