// Todo element to array
elementReplace('name');
elementReplace('subname');

function elementReplace( className ) {
    let element  = document.getElementsByClassName(className)[0];
    if( element ) {
        element.innerHTML = '<ruby>' + element.innerHTML +  '<rt>' + katakanaToHiragana(element.innerHTML) + '</rt></ruby>'
    }
}
function katakanaToHiragana( str ) {
    return str.replace(/[\u30a1-\u30f6]/g, function( match ) {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    });
}