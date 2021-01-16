     let myButton = document.querySelector('button');
     let myHeading = document.querySelector('h1');
     function setUserName() {
     let myName = prompt('占いたい人の名前を入力してください。');
     localStorage.setItem('name', myName);
     myHeading.textContent = myName+'さんの今年の運勢は・・・';
     }
     myButton.style.border = "dashed 4px blue";
     myButton.style.borderRadius = "0px";
     myButton.style.backgroundColor = "lightblue";
     myButton.onclick = function() {
     setUserName();
     }
