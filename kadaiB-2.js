     let myButton = document.querySelector('button');
     let myHeading = document.querySelector('h1');
     function setUserName() {
     let myName = prompt('占いたい人の名前を入力してください。');
     localStorage.setItem('name', myName);
     myHeading.textContent = myName+'さんの今年の運勢は・・・';
     <script src="kadaiB-3.js"></script>
     }
     myButton.style.border = "dashed 3px rgb(232,145,163)";
     myButton.style.backgroundColor = "rgb(240,144,141)";
     myButton.onclick = function() {
     setUserName();
     }
