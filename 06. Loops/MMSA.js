function solve(args) {
        min = Math.min.apply(Math, args);  
        max = Math.max.apply(Math, args);
        sum = 0;

console.log("min=" + min.toFixed(2));
console.log("max=" + max.toFixed(2));

for( var i = 0; i < args.length; i++ ){
    sum += parseInt( args[i], 10 ); 
}
console.log("sum=" + sum.toFixed(2));
var avg = sum/args.length;
console.log("avg=" + avg.toFixed(2));

}


//solve(['2', '5', '1']);