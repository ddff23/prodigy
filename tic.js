// Constants
const PLAYER_X = 'X';
const PLAYER_O = 'O';

// Variables
let currentPlayer = PLAYER_X;
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// DOM Elements
const boardElement = document.getElementById('board');
const statusElement = document.getElementById('status');

// Create board cells
for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('data-index', i);
    cell.addEventListener('click', handleCellClick);
    boardElement.appendChild(cell);
}

// Function to handle cell clicks
function handleCellClick(event) {
    if (!gameActive) return;