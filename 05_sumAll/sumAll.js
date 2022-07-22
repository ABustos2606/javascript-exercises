const sumAll = function(start,end) {
    var total = 0;

    if (start < 0 || end < 0 || typeof start != "number" || typeof end != "number"){
        return "ERROR"
    } else {
        if (start < end){
            for (i = start; i < end+1; i++){
             total = total + i;
            }
        } else {
            for (i = start; i > end-1; i--){
                total = total + i;
            }
        }
        return total;
    }

    
    return total;
};

// Do not edit below this line
module.exports = sumAll;
