import Player from '../player';
import Piece from './piece';
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentPositionOfPawn = board.findPiece(this);
        if (this.player == Player.BLACK) {
            const square_below = new Square(currentPositionOfPawn.row -1,currentPositionOfPawn.col)
            return [square_below]
        }else if
            (this.player == Player.WHITE){
                const square_above = new Square(currentPositionOfPawn.row+1,currentPositionOfPawn.col)
                return [square_above]
            }
        }
    }