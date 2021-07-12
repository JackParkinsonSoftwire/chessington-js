import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentPositionOfRook = board.findPiece(this);
        var availableMoves =[];
        for (let i=0;i<8;i++){
            if (i!==currentPositionOfRook.row){
            availableMoves.push(new Square(i,currentPositionOfRook.col))}
            if (i!==currentPositionOfRook.col){
            availableMoves.push(new Square(currentPositionOfRook.row,i))}
        }
        return availableMoves
    }
}
