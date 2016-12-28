function solve(args) {
    var radius = 2;
    var x = +args[0];
    var y = +args[0];

    var inside = false;

    var distance = Math.sqrt(x * x + y * y); 
    if(distance<=radius){
        console.log("yes " + distance.toFixed(2));
    }
    else{
        console.log("no " + distance.toFixed(2));
}   
}