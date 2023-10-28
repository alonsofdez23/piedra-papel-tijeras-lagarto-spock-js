const gameDiv = document.querySelector('#gameDiv');
const choiceBtns = document.querySelectorAll('.choiceBtn');
const computerBtns = document.querySelectorAll('.computerBtn');
const marcadorPlayer = document.querySelector('#userScore');
const marcadorComputer = document.querySelector('#computerScore');
const resultado = document.querySelector('#resultado');
const playerChoose = document.querySelector('#playerChoose');
const computerChoose = document.querySelector('#computerChoose');
const inputName = document.querySelector('#inputName');
const start = document.querySelector('#start');
const nameSelect = document.querySelector('#name');
let player;
let computer;

inputName.focus();

start.addEventListener('click', () => {
    if (inputName.value == '') {
        inputName.style.border = '1px solid red';
    } else {
        choiceBtns.forEach(button => button.addEventListener('mouseover', () => {
            button.firstChild.style.transform = 'scale(1.3)';
        }));
        choiceBtns.forEach(button => button.addEventListener('mouseleave', () => {
            button.firstChild.style.transform = 'scale(1)';
        }));

        inputName.style.border = '1px solid #292C34';
        resetChoice();
        gameDiv.style.opacity = '1';
    
        nameSelect.innerHTML = `Tú: ${inputName.value}`;
        inputName.value = '';
        playerChoose.innerHTML = '';
        computerChoose.innerHTML = '';
        marcadorPlayer.innerHTML = '0';
        marcadorComputer.innerHTML = '0';
        resultado.textContent = '¡A jugar!';
        resultado.style.color = 'white';
        choiceBtns.forEach(button => {
            button.disabled = false;
            button.style.cursor = 'pointer';
        });
    }
});

function createIcon(icon, tag) {
    let i = document.createElement('i');
    i.classList.add('fa-solid');
    i.classList.add(icon);
    i.classList.add('fa-xl');
    tag.appendChild(i);
}

function resetChoice() {
    computerBtns.forEach(function(button) {
        button.firstChild.classList.remove('fa-beat');
    });
    choiceBtns.forEach(function(button) {
        button.firstChild.classList.remove('fa-beat');
    });
}

choiceBtns.forEach(button => button.addEventListener('click', () => {
    resetChoice();

    button.firstChild.classList.add('fa-beat');
    player = button.firstChild.classList[1];

    playerChoose.innerHTML = '';
    createIcon(player, playerChoose);

    computerTurn();

    resultado.textContent = checkWinner();
    resultado.style.color = 'white';
}));

function randomBetween(a, b) {
    return Math.round(Math.random() * (b - a) + a);
}

function computerTurn(){
    const randNum = randomBetween(1, 5);

    switch(randNum){
    case 1:
        computer = 'fa-hand-back-fist';

        computerBtns[0].firstChild.classList.add('fa-beat');

        computerChoose.innerHTML = '';
        createIcon(computer, computerChoose);

        break;
    case 2:
        computer = 'fa-hand';

        computerBtns[1].firstChild.classList.add('fa-beat');

        computerChoose.innerHTML = '';
        createIcon(computer, computerChoose);

        break;
    case 3:
        computer = 'fa-hand-scissors';

        computerBtns[2].firstChild.classList.add('fa-beat');

        computerChoose.innerHTML = '';
        createIcon(computer, computerChoose);

        break;
    case 4:
        computer = 'fa-hand-lizard';

        computerBtns[3].firstChild.classList.add('fa-beat');

        computerChoose.innerHTML = '';
        createIcon(computer, computerChoose);

        break;
    case 5:
        computer = 'fa-hand-spock';

        computerBtns[4].firstChild.classList.add('fa-beat');

        computerChoose.innerHTML = '';
        createIcon(computer, computerChoose);

        break;
    }
}

function checkWinner(){
    if(player == computer){
        return '¡Empate!';
    }
    else if(computer == 'fa-hand-back-fist'){
        if (player == 'fa-hand' || player == 'fa-hand-spock') {
            marcadorPlayer.innerHTML = (parseInt(marcadorPlayer.textContent) + 1);
            return '¡Ganaste!';
        } else {
            marcadorComputer.innerHTML = (parseInt(marcadorComputer.textContent) + 1);
            return '¡Perdiste!';
        }
    }
    else if(computer == 'fa-hand'){
        if (player == 'fa-hand-scissors' || player == 'fa-hand-lizard') {
            marcadorPlayer.innerHTML = (parseInt(marcadorPlayer.textContent) + 1);
            return '¡Ganaste!';
        } else {
            marcadorComputer.innerHTML = (parseInt(marcadorComputer.textContent) + 1);
            return '¡Perdiste!';
        }
    }
    else if(computer == 'fa-hand-scissors'){
        if (player == 'fa-hand-back-fist' || player == 'fa-hand-spock') {
            marcadorPlayer.innerHTML = (parseInt(marcadorPlayer.textContent) + 1);
            return '¡Ganaste!';
        } else {
            marcadorComputer.innerHTML = (parseInt(marcadorComputer.textContent) + 1);
            return '¡Perdiste!';
        }
    }
    else if(computer == 'fa-hand-lizard'){
        if (player == 'fa-hand-back-fist' || player == 'fa-hand-scissors') {
            marcadorPlayer.innerHTML = (parseInt(marcadorPlayer.textContent) + 1);
            return '¡Ganaste!';
        } else {
            marcadorComputer.innerHTML = (parseInt(marcadorComputer.textContent) + 1);
            return '¡Perdiste!';
        }
    }
    else if(computer == 'fa-hand-spock'){
        if (player == 'fa-hand' || player == 'fa-hand-lizard') {
            marcadorPlayer.innerHTML = (parseInt(marcadorPlayer.textContent) + 1);
            return '¡Ganaste!';
        } else {
            marcadorComputer.innerHTML = (parseInt(marcadorComputer.textContent) + 1);
            return '¡Perdiste!';
        }
    }
}