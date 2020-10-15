

let changeNum = function(){
  let y = Math.ceil(Math.random()*100),
      n = 10;
  function game(){
    let x = prompt(`Угадай число от 1 до 100. Попыток ${n}`);
    n--;
    if ( n === 0) {
      let end = confirm('Попытки закончились, хотите сыграть еще?');
      if (end){
        changeNum();
      } else {
      alert('Игра окончена');
      }
    } else if (x === null) {
      alert('Игра окончена');
    } else if (isNaN(x) || x.trim() === '') {
      n++;
      alert('Введи число!');
      game();
    } else if (x > y) {
      alert(`Загаданное число меньше, осталось попыток ... ${n} `);
      game();
    } else if ( x < y ) {
      alert(`Загаданное число больше, осталось попыток ... ${n} `);
      game();
    } else if ( x == y) {
      let win = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
      if (win) {
        changeNum();
      } else {
        alert('Игра окончена');
      }
    }  
  };
  game();
};

changeNum();