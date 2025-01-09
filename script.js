const board = [];
const emptyBoard = [];

function createPlayer(name, symbol){
    const playerName = name;
    const playerSymbol = symbol;
    return {playerName, playerSymbol}
}

const player1 = createPlayer('Jorje', 'X');

const player2 = createPlayer('Zara', 'O')

function createBoard() {
    const container = document.querySelector('.container')
    for (let i = 0; i < 9; i++){
        const button = document.createElement('button');
        button.setAttribute('class', 'square');
        button.setAttribute('id', `${i}`);
        board.push(button);
        container.appendChild(button);
    }
}

function clearBoard() {
    for(let i = 0; i< board.length; i++){
        board[i].setAttribute('class', 'square')
        board[i].textContent = '';
    }
}

function checkStatus(){
    let winStatus = 0;
    if(board[0].getAttribute('class') === board[1].getAttribute('class') && board[1].getAttribute('class') === board[2].getAttribute('class') && board[2].getAttribute('class') === 'square O' ||
       board[3].getAttribute('class') === board[4].getAttribute('class') && board[4].getAttribute('class') === board[5].getAttribute('class') && board[5].getAttribute('class') === 'square O' ||
       board[6].getAttribute('class') === board[7].getAttribute('class') && board[7].getAttribute('class') === board[8].getAttribute('class') && board[8].getAttribute('class') === 'square O' ||
       board[0].getAttribute('class') === board[3].getAttribute('class') && board[3].getAttribute('class') === board[6].getAttribute('class') && board[6].getAttribute('class') === 'square O' ||
       board[1].getAttribute('class') === board[4].getAttribute('class') && board[4].getAttribute('class') === board[7].getAttribute('class') && board[7].getAttribute('class') === 'square O' ||
       board[2].getAttribute('class') === board[5].getAttribute('class') && board[5].getAttribute('class') === board[8].getAttribute('class') && board[8].getAttribute('class') === 'square O' ||
       board[0].getAttribute('class') === board[4].getAttribute('class') && board[4].getAttribute('class') === board[8].getAttribute('class') && board[8].getAttribute('class') === 'square O' ||
       board[2].getAttribute('class') === board[4].getAttribute('class') && board[4].getAttribute('class') === board[6].getAttribute('class') && board[6].getAttribute('class') === 'square O')
        winStatus = -1;
    else if(board[0].getAttribute('class') === board[1].getAttribute('class') && board[1].getAttribute('class') === board[2].getAttribute('class') && board[2].getAttribute('class') === 'square X' ||
    board[3].getAttribute('class') === board[4].getAttribute('class') && board[4].getAttribute('class') === board[5].getAttribute('class') && board[5].getAttribute('class') === 'square X' ||
    board[6].getAttribute('class') === board[7].getAttribute('class') && board[7].getAttribute('class') === board[8].getAttribute('class') && board[8].getAttribute('class') === 'square X' ||
    board[0].getAttribute('class') === board[3].getAttribute('class') && board[3].getAttribute('class') === board[6].getAttribute('class') && board[6].getAttribute('class') === 'square X' ||
    board[1].getAttribute('class') === board[4].getAttribute('class') && board[4].getAttribute('class') === board[7].getAttribute('class') && board[7].getAttribute('class') === 'square X' ||
    board[2].getAttribute('class') === board[5].getAttribute('class') && board[5].getAttribute('class') === board[8].getAttribute('class') && board[8].getAttribute('class') === 'square X' ||
    board[0].getAttribute('class') === board[4].getAttribute('class') && board[4].getAttribute('class') === board[8].getAttribute('class') && board[8].getAttribute('class') === 'square X' ||
    board[2].getAttribute('class') === board[4].getAttribute('class') && board[4].getAttribute('class') === board[6].getAttribute('class') && board[6].getAttribute('class') === 'square X'){
        winStatus = 1;
    }
    return {winStatus}
    }

createBoard();



let counter = 0;

const dialog = document.querySelector('dialog');
const winnText = document.createElement('h1');
dialog.appendChild(winnText);


const closebtn = document.querySelector('#close');

for(let i = 0; i < board.length; i++){
    board[i].addEventListener('click', () => {
        if(counter % 2 === 0 && board[i].getAttribute('class') === 'square'){
            board[i].textContent = 'X';
            board[i].setAttribute('class', 'square X');
            counter++;
            if(checkStatus().winStatus === 1)
                {   
                    clearBoard();
                    winnText.innerText = 'X won!';
                    dialog.showModal();
                    closebtn.addEventListener('click', () => dialog.close())
                    counter = 0;
                 }
            else if(counter === 9){
                clearBoard();
                    winnText.innerText = 'Tie';
                    dialog.showModal();
                    closebtn.addEventListener('click', () => dialog.close())
                    counter = 0;
            }
                }
        else if(counter % 2 !== 0 && board[i].getAttribute('class') === 'square'){
            board[i].textContent = 'O';
            board[i].setAttribute('class', 'square O');
            counter++;
            if(checkStatus().winStatus === -1)
                {   
                    clearBoard();
                    winnText.innerText = 'O won!';
                    dialog.showModal();
                    closebtn.addEventListener('click', () => dialog.close())
                    counter = 0;
                 }
        }
    })
}

function playGame(){
    createBoard();

}