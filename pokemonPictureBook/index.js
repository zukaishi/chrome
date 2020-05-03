var pokemon  = document.getElementsByClassName('name')[0]
pokemon.innerHTML = pokemon.innerHTML +  ' ' + kanaToHira(pokemon.innerHTML)
function kanaToHira(str) {
    return str.replace(/[\u30a1-\u30f6]/g, function(match) {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    });
}