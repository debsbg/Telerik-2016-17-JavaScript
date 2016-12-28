function solve(args) {
    var a = +args[0];
    var b = +args[1];
    var c = +args[2];

    if(a>=b) {
        if(a>=c) {
            if(b>=c) {
                console.log(a, b, c);
            }
            else {
             console.log(a, c, b);   
            }
        }
        else if(c>=a) {
            console.log(c, a, b);
        }
    }
    else if(b>=a) {
        if(b>=c) {
            if(a>=c) {
                console.log(b, a, c);
            }
            else {
                console.log(b, c, a);
            }
        }
        else if (c>=b) {
            console.log(c, b, a);
        } 
    }
    else if(c>=a) {
        if(c>=b) {
            if(a>=b) {
               console.log(c, a, b); 
            }
            else {
                console.log(c, b, a);
            }
        }
        else if(b>=c) {
            console.log(b, c, a);
        }
    }
}

//solve(['-2', '-2', '1']);