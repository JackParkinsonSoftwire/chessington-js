export default class Square {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }

    static at(row, col) {
        return new Square(row, col);
    }

    equals(otherSquare) {
        return !!otherSquare && this.row === otherSquare.row && this.col === otherSquare.col;
    }

    toString() {
        return `Row ${this.row}, Col ${this.col}`;
    }

    isValidSquare() {
        return (this.row >= 0 && this.row < 8 && this.col >= 0 && this.col < 8);
    }
}
