// todo 冗長な文字列結合を解決

let elementList: Array<string> = ['name', 'subname', 'name__loadItem'];
elementList.forEach(value => elementReplace(value));

function elementReplace(className: string): void {
    let ele = document.getElementsByClassName(className);
    if (ele.length > 0) {
        for (var i = 0; i < ele.length; i++) {
            let tag_format = "<ruby>from<rt>to</rt></ruby>";
            ele[i].innerHTML = tag_format.replace("from", ele[i].innerHTML).replace("to", katakanaToHiragana(ele[i].innerHTML));
        }
    }
}
function katakanaToHiragana(str: string): string {
    return str.replace(/[\u30a1-\u30f6]/g, function (match) {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    });
}