// Function to check if three options are the same (indicating a win)
const checkForSequence = (option1, option2, option3) => {
    if(option1=== null || option2 === null || option3 === null){
        return false;
    }
    return option1 === option2 && option2 === option3;
}
// Function to check for a winner on the board
export const checkForWinner = (board) => {

    //0 1 2
    //3 4 5 
    //6 7 8 
    
    // Rows check
    for (let i = 0; i < 9; i += 3) {
        if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
            console.log("We have a row winner");
            return true;
        }
    }
    // Columns 
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
    //check ifthe game has drawn
    if(!board.includes(null)){
        return "draw"
    }
    return false;
}
