

 function end(num1, num2, num3) {
    footer1.innerHTML = `${squares[num1] } : ربح `;
        document.getElementById('item' + num1).style.background = 'black';
        document.getElementById('item' + num2).style.background = 'black';
        document.getElementById('item' + num3).style.background = 'black';
        setInterval(function () {footer1.innerHTML += '.'},1000);
          setTimeout(function(){location.reload()},4000);
    
 }
  let squares =[];
 function winnner() {
    for (let i = 1; i<10;i++) {
        squares[i] = document.getElementById('item' + i).innerHTML;
        
    }
    if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '' ) {
        end(1,2,3)
    }else   if (squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != ''   ) {
        end(4,5,6)
    }else    if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '' ) {
        end(7,8,9)
    }else    if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '' ) {
        end(1,5,9)
    } else    if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '' ) {
        end(3,5,7)
    }else    if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '' ) {
        end(1,4,7)
    }else    if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '' ) {
        end(2,5,8)
    }else    if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '' ) {
        end(3,6,9)
    }
}




let  turn = 'x'
function game(id) {
    let element = document.getElementById(id);
    let game2 =document.getElementById('game2');
    
    if (turn ==='x'  &&  element.innerHTML =='') {
        element.innerHTML ='x';
        turn = 'o';
      game2.innerHTML ='o';

        
    }else if (turn ==='o'  &&  element.innerHTML =='') {
        element.innerHTML ='o';
        turn = 'x';
      game2.innerHTML ='x';
    
}
winnner();
}
//let game3 =document.getElementById('game3');