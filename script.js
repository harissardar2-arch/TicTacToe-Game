const boxes = document.querySelectorAll(".box");

let currentPlayer = "X";
let gameOver = false;

let board = ["", "", "", "", "", "", "", "", ""];

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box, index) => {

    box.addEventListener("click", () => {

        if (board[index] !== "" || gameOver) return;

        const img = box.querySelector(".mark");

        if (currentPlayer === "X") {
            img.src = "images/cross.webp";
            board[index] = "X";
            currentPlayer = "O";
        } else {
            img.src = "images/circle.png";
            board[index] = "O";
            currentPlayer = "X";
        }

        checkWinner();

    });

});

function checkWinner() {

    for (let pattern of winPatterns) {

        let a = board[pattern[0]];
        let b = board[pattern[1]];
        let c = board[pattern[2]];

        if (a !== "" && a === b && b === c) {

            gameOver = true;

            alert("Player " + a + " Wins!");

            setTimeout(resetGame, 1000);

            return;
        }
    }

    if (!board.includes("")) {

        gameOver = true;

        alert("Match Draw!");

        setTimeout(resetGame, 1000);
    }
}

function resetGame() {

    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;

    boxes.forEach((box) => {
        box.querySelector(".mark");
    });

}