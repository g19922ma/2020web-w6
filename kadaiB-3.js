<script>
    'use strict';
    const num = 10;
    const daikichi = Math.floor(Math.random() * num); // 0 - 4
    const chukichi = Math.floor(Math.random() * num);
    while(chukichi===daikichi){
       chukichi= Math.floor(Math.random() * num);
    }
    const chukichi2 = Math.floor(Math.random() * num);
    while(chukichi2===daikichi||chukichi2===chukichi){
       chukichi2= Math.floor(Math.random() * num);
    }
    const chukichi3 = Math.floor(Math.random() * num);
    while(chukichi3===daikichi||chukichi3===chukichi||chukichi3===chukichi2){
       chukichi3= Math.floor(Math.random() * num);
    }
      const kyo = Math.floor(Math.random() * num);
      while(kyo===daikichi||kyo===chukichi||kyo===chukichi2||kyo===chukichi3){
       kyo= Math.floor(Math.random() * num);
    }
    for (let i = 0; i < num; i++) {
      const div = document.createElement('div');
      div.classList.add('box');
      
      div.addEventListener('click', () => {
        if (i === daikichi) {
          div.textContent = '大吉';
          div.classList.add('daikichi');
        } else if (i===chukichi||i===chukichi2||i===chukichi3){
          div.textContent = '中吉';
          div.classList.add('chukichi');
         } else if(i===kyo){
         div.textContent = '凶';
         div.classList.add('kyo');
         }else{
          div.textContent = '小吉';
          div.classList.add('shokichi');
        }
      });

      document.body.appendChild(div);
    }
  </script>
