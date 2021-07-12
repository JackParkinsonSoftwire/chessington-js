import Piece from './piece';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        var availableMoves = [];
        let currentPositionOfQueen = board.findPiece(this);
        let differenceBetweenXY = currentPositionOfQueen.row - currentPositionOfQueen.col;
        let sumOfXY = currentPositionOfQueen.row + currentPositionOfQueen.col;
        for (let iter = 0;iter<8;iter++){
            let col1 = sumOfXY - iter;
            let col2 = iter - differenceBetweenXY;
            let downRight = new Square(iter, col1);
            let downLeft = new Square(iter, col2);
            let down = new Square(iter, currentPositionOfQueen.col);
            let across = new Square(currentPositionOfQueen.row, iter);
            if (downRight.isValidSquare()){
                availableMoves.push(downRight);
            }
            if (downLeft.isValidSquare()){
                availableMoves.push(downLeft);
            }
            availableMoves.push(down);
            availableMoves.push(across);
        }
        availableMoves = availableMoves.filter((square) => !square.equals(currentPositionOfQueen));
        return availableMoves
    }
}
