function solve(args) {
    var a = +args[0];
    var b = +args[1];
    var c = +args[2];
    
    switch (true) {
        case (a>0 && b>0 && c>0): console.log('+'); break;
        case (a>0 && b>0 && c<0): console.log('-'); break;
        case (a>0 && b<0 && c>0): console.log('-'); break;
        case (a<0 && b>0 && c>0): console.log('-'); break;
        case (a<0 && b<0 && c>0): console.log('+'); break;
        case (a>0 && b<0 && c<0): console.log('+'); break;
        case (a<0 && b>0 && c<0): console.log('+'); break;
        case (a<0 && b<0 && c<0): console.log('-'); break;
        case (a==0 || b==0 || c==0): console.log('0'); break;
    
        default: console.log('error'); break;
    }
}

solve(['2', '-3', '4']);