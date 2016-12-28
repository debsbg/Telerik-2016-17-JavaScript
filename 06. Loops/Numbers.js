function solve(args) {
    var n = Math.floor(+args[0]);
    var result = "";
    
    for(var i = 1; i <= n; i+=1){      
            result += i + " ";   
    }

    console.log(result.trim());
}

//solve('1');