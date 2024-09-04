// Function to check if three options are the same (indicating a win)
const checkForSequence = (option1, option2, option3) => {
    return option1 === option2 && option2 === option3 && option1 !== null;
}
// Function to check for a winner on the board
export const checkForWinner = (board) => {
    // Rows check
    for (let i = 0; i < 9; i += 3) {
        if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
            console.log("We have a row winner");
            return true;
        }
    }
    // Columns check
    for (let i = 0; i < 3; i++) {
        if (checkForSequence(board[i], board[i + 3], board[i + 6])) {
            console.log("We have a column winner");
            return true;
        }
    }
    // Diagonals check
    if (checkForSequence(board[0], board[4], board[8])) {
        console.log("We have a diagonal winner");
        return true;
    }
    if (checkForSequence(board[2], board[4], board[6])) {
        console.log("We have a diagonal winner");
        return true;
    }
    // If no winner is found
    return false;
}
