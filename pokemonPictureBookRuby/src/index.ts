// 冗長な文字列結合を解決

let elementList: Array<string> = ['name','subname'];
elementList.forEach( value => elementReplace( value )　);

function elementReplace( className : string ) : void {
    let element  = document.getElementsByClassName(className)[0];
    if( element ) {
        element.innerHTML = '<ruby>' + element.innerHTML +  '<rt>' + katakanaToHiragana(element.innerHTML) + '</rt></ruby>'
    }
}
function katakanaToHiragana( str : string ) : string {
    return str.replace(/[\u30a1-\u30f6]/g, function( match ) {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    });
}