
function solve(args) {
    let a = Number(+args[0]);
    let b = Number(+args[1]);
    let c = Number(+args[2]);
    
    let disriminant = Math.pow(b,2) - (4 * (a*c));

    if(disriminant > 0) {
        let firstRoot = (-1 * b + Math.sqrt(disriminant)) / (2 * a);
        let secondRoot = (-1 * b - Math.sqrt(disriminant)) / (2 * a);

        if(firstRoot < secondRoot) {
            console.log("x1=" + firstRoot.toFixed(2) + "; x2=" + secondRoot.toFixed(2));
        }
        else {
         console.log("x1=" + secondRoot.toFixed(2) + "; x2=" + firstRoot.toFixed(2));   
        }
    }
    else if(disriminant===0) {
        let root = -1 * b / (2*a);
        console.log("x1=x2=" + root.toFixed(2));
    }
    else {
        console.log("no real roots");
    }
}

// solve(['2', '5', '-3']);
// solve(['-1', '3', '0']);
// solve(['-0.5', '4', '-8']);
// solve(['5', '2', '8']);
// solve(['0.2', '9.572', '0.2']);