enum Color {
    RED,
    BLUE
}

class Cell {
    public color: Color;
    public visited: boolean;

    constructor() {
        let randomNum = Math.floor(Math.random() * 2);
        this.color = Color[Color[randomNum]];
    }
}

class Board {
    private cells: Cell[][] = [];

    constructor(private n: number, private m: number) {
        if (n <= 0 || m <= 0) {
            throw new Error("Board dimensions must be greater than 0");
        }

        for(let i = 0; i < n; i++) {
            this.cells[i] = [];
            for(let j = 0; j < m; j++) {
                this.cells[i][j] = new Cell();
            }
        }
    }
    
    public printBoard(): void {
        for(let i = 0; i < this.n; i++) {
            for(let j = 0; j < this.m; j++) {
                // console.log(this.cells[i][j].color);
            }
        }
    }

    public findLargestContiguousColors(): void {
        for(let i = 0; i < this.n; i++) {
            for(let j = 0; j < this.m; j++) {
                if (this.cells[i][j].visited) {
                    continue;
                }
                let stack = this.getViableAdjacentCells(i, j);

                while(stack.length !== 0) {
                    let nextCell = stack.pop();
                    this.getViableAdjacentCells()

                }                
            }
        }
    }

    private getViableAdjacentCells(i: number, j: number): Cell[] {
        let cells: Cell[] = [];
        let currentCell = this.cells[i][j];
        try {
            let rightCell = this.cells[i + 1][j];
            if (currentCell.color === rightCell.color &&
                !rightCell.visited) 
                {
                    cells.push(rightCell);
                }
        }
        catch(e) {}

        try {
            let leftCell = this.cells[i - 1][j];
            if (currentCell.color === leftCell.color &&
                !leftCell.visited) 
                {
                    cells.push(leftCell);
                }
        }
        catch(e) {}

        try {
            let topCell = this.cells[i][j + 1];
            if (currentCell.color === topCell.color &&
                !topCell.visited) 
                {
                    cells.push(topCell);
                }
        }
        catch(e) {}

        try {
            let bottomCell = this.cells[i][j - 1];
            if (currentCell.color === bottomCell.color &&
                !bottomCell.visited) 
                {
                    cells.push(bottomCell);
                }
        }
        catch(e) {}

        return cells;
    }
}

function main(): void {
    let board = new Board(5, 5);
    board.findLargestContiguousColors();
}

main();