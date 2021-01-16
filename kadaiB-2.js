     let myButton = document.querySelector('button');
     let myHeading = document.querySelector('h1');
     function setUserName() {
     let myName = prompt('占いたい人の名前を入力してください。');
     localStorage.setItem('name', myName);
     myHeading.textContent = myName+'さんの今年の運勢は・・・';
     }
     myButton.style.border = "dashed 3px rgb(240,144,141)";
     myButton.style.backgroundColor = "rgb(192,162,199)";
     myButton.onclick = function() {
     setUserName();
     }
