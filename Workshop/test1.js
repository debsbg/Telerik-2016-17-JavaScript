function solve(args){
    let r = +args[0];

    let board = args.slice(2, 2 + r);
    let moves = args.slice(3 + r);

    function parseMove(move){
        let cells = move.split(' ');

        return {
            from: {
                r: r - Number(cells[0][1]),
                c: cells[0].charCodeAt(0) - 97
            }, 
            to: {
                r: r - Number(cells[1][1]), 
                c: cells[1].charCodeAt(0) - 97
            }
        };
    }

//How to print matrix in javascript

    // move.forEach(function(move){
    //     console.log(parseMove(move), move);
    // })

    function canMoveBishop(from, to){
        if((from.c !== to.c) && (from.r !== to.r)){
            return false;
        }

        let deltaR = from.r > to.r ? -1 : 1;
        let deltaC = from.c > to.c ? -1 : 1;

        if(from.r === to.r){
            deltaR = 0;
        }

        if(from.c === to.c){
            deltaC = 0;
        }

        while ((from.r !== to.r) || (from.c !== to.c)) {
            from.r += deltaR;
            from.c += deltaC;

            if (board[from.r][from.c] !== "-") {