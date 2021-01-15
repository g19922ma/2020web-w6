     let myButton = document.querySelector('button');
     let myHeading = document.querySelector('h1');
     function setUserName() {
     let myName = prompt('占いたい人の名前を入力してください。');
     localStorage.setItem('name', myName);
     myHeading.textContent =myName+'の今年の運勢は・・・';
     }
     myButton.onclick = function() {
     setUserName();
     }
