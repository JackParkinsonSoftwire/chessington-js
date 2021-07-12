import Piece from './piece';
import Square from '../square';


export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        var availableMoves = [];
        let currentPositionOfBishop = board.findPiece(this);
        let differenceBetweenXY = currentPositionOfBishop.row - currentPositionOfBishop.col;
        let sumOfXY = currentPositionOfBishop.row + currentPositionOfBishop.col;
        for (let row = 0;row<8;row++){
            let col1 = sumOfXY - row;
            let col2 = row - differenceBetweenXY;
            let downRight = new Square(row, col1);
            let downLeft = new Square(row, col2);
            if (downRight.isValidSquare() && !downRight.equals(currentPositionOfBishop)){
                availableMoves.push(downRight);
            }
            if (downLeft.isValidSquare() && !downRight.equals(currentPositionOfBishop)){
                availableMoves.push(downLeft);
            }
        }
        return availableMoves;
    }
}
