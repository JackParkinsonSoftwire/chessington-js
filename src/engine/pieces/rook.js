import Piece from './piece';
import Square from '../square';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentPositionOfRook = board.findPiece(this);
        var available_moves =[];
        for (let i=0;i<8;i++){
            if (i!==currentPositionOfRook.row){
            available_moves.push(new Square(i,currentPositionOfRook.col))}
            if (i!==currentPositionOfRook.col){
            available_moves.push(new Square(currentPositionOfRook.row,i))}
        }
        return available_moves
    }
}
