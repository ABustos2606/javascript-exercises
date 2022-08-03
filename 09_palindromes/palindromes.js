const palindromes = function (text) {
    let comp = text.replace(/[. ,\/#!$%\^&\*;:{}=\-_`~()]/gi,"");
    let back = "";
    for (let i = comp.length-1; i >=0; i--) {
        back = back + comp[i];
      }
    return (back.toLowerCase() == comp.toLowerCase())
};

// Do not edit below this line
module.exports = palindromes;
