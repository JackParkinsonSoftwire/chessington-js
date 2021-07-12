import Player from '../player';
import Piece from './piece';
import Square from '../square';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentPositionOfPawn = board.findPiece(this);
        var availableMoves =[]
        if (this.player == Player.BLACK) {
            const square_below = new Square(currentPositionOfPawn.row -1,currentPositionOfPawn.col)
            availableMoves.push(square_below)
            if (currentPositionOfPawn.row == 6){
                const two_squares_below = new Square(currentPositionOfPawn.row -2,currentPositionOfPawn.col)
                availableMoves.push(two_squares_below)
            }
        }if
            (this.player == Player.WHITE){
                const square_above = new Square(currentPositionOfPawn.row+1,currentPositionOfPawn.col)
                availableMoves.push(square_above)
                if (currentPositionOfPawn.row == 1){
                    const two_squares_above = new Square(currentPositionOfPawn.row +2,currentPositionOfPawn.col)
                    availableMoves.push(two_squares_above)
            }
        }return availableMoves}}