"use strict";
// Todo element to array
// 冗長な文字列結合を解決
// Todo README ruby用に変更する
// typescript対応する
// ひらがなにはルビを振らない
elementReplace('name');
elementReplace('subname');
function elementReplace(className) {
    var element = document.getElementsByClassName(className)[0];
    if (element) {
        element.innerHTML = '<ruby>' + element.innerHTML + '<rt>' + katakanaToHiragana(element.innerHTML) + '</rt></ruby>';
    }
}
function katakanaToHiragana(str) {
    return str.replace(/[\u30a1-\u30f6]/g, function (match) {
        var chr = match.charCodeAt(0) - 0x60;
        return String.fromCharCode(chr);
    });
}
