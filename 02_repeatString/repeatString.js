const repeatString = function(text,num) {
    var repeatedString = "";
    if (num <0) {
        return "ERROR";
    } else {
        for (let i = 0; i < num; i++){
            repeatedString = repeatedString+text;
        }
        return repeatedString;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
