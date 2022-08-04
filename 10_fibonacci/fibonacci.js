const fibonacci = function(a) {
    var fibo = [];
    fibo[0] = 1;
    fibo[1] = 1;
    if (a>0){
        for (var i = 2; i < a; i++) {
        fibo[i] = fibo[i - 2] + fibo[i - 1];
        }
        return fibo[a-1];
    } else {
        return "OOPS"
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
