let container = document.getElementById('container');
let movement = 'left';
const row = 68;
const column = 33;

for (let i = 0; i < 2244; i++) {
    let newDiv = document.createElement('div');
    newDiv.className = "block";

    container.appendChild(newDiv);
}

const block = document.getElementsByClassName('block');
block[576].className = 'block player';
block[577].className = 'block player';
block[578].className = 'block player';

let playerPosition = [576,577,578];

let player = document.getElementsByClassName('player');
function automaticPlayer() {
    switch(movement){
        case 'left':
            if (movement == 'right') {
                break;
            }
    
            movement = 'left';
            block[playerPosition[playerPosition.length - 1]].className = 'block';
            playerPosition.splice(playerPosition.length - 1, 1);
            playerPosition.unshift(playerPosition[0] - 1);
            block[playerPosition[0]].className = 'block player';
            break;
    
        case 'right':
            if (movement == 'left') {
                break;
            }
    
            block[playerPosition[playerPosition.length - 1]].className = 'block';
            playerPosition.splice(playerPosition.length - 1, 1);
            playerPosition.unshift(playerPosition[0] + 1);
            block[playerPosition[0]].className = 'block player';
            break;
    
        case 'up':
            if (movement == 'down') {
                break;
            }
            if (playerPosition <= row) {
                block[playerPosition[playerPosition.length - 1]].className = 'block';
                playerPosition.splice(playerPosition.length - 1, 1);
                playerPosition.unshift(playerPosition[0] + (row * column - row));
                block[playerPosition[0]].className = 'block player';
                console.log(playerPosition);
                break;
            }
            movement = 'up';
    
            block[playerPosition[playerPosition.length - 1]].className = 'block';
            playerPosition.splice(playerPosition.length - 1, 1);
            playerPosition.unshift(playerPosition[0] - 68);
            block[playerPosition[0]].className = 'block player';
            console.log(playerPosition);
            break;
            
    
        case 'down':
            if (movement == 'up') {
                break;
            }
            movement = 'down';
    
            block[playerPosition[playerPosition.length - 1]].className = 'block';
            playerPosition.splice(playerPosition.length - 1, 1);
            playerPosition.unshift(playerPosition[0] + 68);
            block[playerPosition[0]].className = 'block player';
            console.log(playerPosition);
            break;
             }
       };
// banyak kotak dalam 1 baris dikali banyak kotak dalam 1 kolom dikurang banyak kotak dalam 1 baris
setInterval(automaticPlayer, 100);
window.addEventListener('keydown', (e) =>{
switch(e.key){
    case 'a':
        if (movement == 'right') {
            break;
        }
        movement = 'left';
        break;

    case 'd':
        if (movement == 'left') {
            break;
        }
        movement = 'right';
        break;

    case 'w':
        if (movement == 'down') {
            break;
        }
        movement = 'up';
        break;
        
    case 's':
        if (movement == 'up') {
            break;
        }
        movement = 'down';
        break;
    }
   });