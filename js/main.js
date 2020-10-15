
let changeNum = function(){
  let y = 55;
  function game(){
    let x = prompt('Угадай число от 1 до 100');
    if (x > y) {
      alert('Загаданное число меньше');
      game();
    } else if ( x < y && x !== null) {
      alert('Загаданное число больше');
      game();
    } else if ( x == y) {
      alert('Поздравляю, Вы угадали!!!');
    } else if (isNaN(x)) {
      alert('Введи число!');
      game();
    } else {
      alert('Игра окончена')
    }
  };
  game();
};

changeNum();