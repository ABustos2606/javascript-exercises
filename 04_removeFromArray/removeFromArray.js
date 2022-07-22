const removeFromArray = function(...args) {
    var list = args[0];
    var exclude = [];

    for (let x = 1; x < arguments.length; x++){
        exclude.push(arguments[x]);
    }

    for (let i = 0; i < list.length; i++){
        for (let j = 0; j < exclude.length; j++){
            if (list[i]===exclude[j]){
                list.splice(i,1);
                i -= 1;
            }
        }
        
    }
    return list
};

// Do not edit below this line
module.exports = removeFromArray;
