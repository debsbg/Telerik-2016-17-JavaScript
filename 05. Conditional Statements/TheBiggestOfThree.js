function solve(args) {
    var a = +args[0];
        b = +args[1];
        c = +args[2];
    
    switch (true) {
        case (a>b && a>c): console.log(a);  break;
        case (b>a && b>c): console.log(b);  break;
        case (c>a && a>b): console.log(c);  break;
        case (a==b && a==c): console.log(a);  break;
         case (a>b && a<c): console.log(c);  break;
         case (b>c && b<a): console.log(a);  break;
         case (c>b && b>a): console.log(c);  break;
          case (c>a && b>c): console.log(b);  break;
          case (b>a && a>c): console.log(b);  break;
          case (b>a && c>b): console.log(c);  break;
        case (c==b && a==c): console.log(a);  break;
        case (a==b && a>c): console.log(a);  break;
        case (a==b && a<c): console.log(c);  break;
        case (b==a && b>c): console.log(b);  break;
        case (a==c && b>c): console.log(a);  break;
        case (a==c && b<c): console.log(c);  break;
        default: console.log('error');
            break;
    }
}


//solve(['-0.1', '-0.5', '-1.1']);