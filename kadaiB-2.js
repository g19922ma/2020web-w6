     let myButton = document.querySelector('button');
     let myHeading = document.querySelector('h1');
     function setUserName() {
     let myName = prompt('あなたの名前を入力してください。');
     localStorage.setItem('name', myName);
     myHeading.textContent = myName+'さんの運勢の運勢は・・・';
     }
     myButton.onclick = function() {
     setUserName();
     }
