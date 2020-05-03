let pokemon  = document.getElementsByClassName('name')[0]
if( pokemon ) {
    pokemon.innerHTML = pokemon.innerHTML +  ' (' + katakanaToHiragana(pokemon.innerHTML) + ')'
}
function katakanaToHiragana( str ) {
    return str.replace(/[\u30a1-\u30f6]/g, function( match ) {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    });
}