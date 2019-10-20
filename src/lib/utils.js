export function shuffle (a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export function isMoveValid(board, index){
    switch (true) {
        case (board[index+1] === " "):
            return true
            
        case (board[index-1] === " "):
            return true
            
        case (board[index-4] === " "):
            return true   

        case (board[index+4] === " "):
        return true 
    
        default:
            return false;
    }
}

export function isGameWon(board){
    if (JSON.stringify(board)===JSON.stringify(winningBoard)) {
        return true;
      }
      return false
}


export const winningBoard = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15", " "]