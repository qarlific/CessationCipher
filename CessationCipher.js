

let __cipherKey = '1100111101001111001010010101109';
let __cipher =  // Henkevä temple
               '2241111132121111112\
                031141124111131113\
                0121141111112111211\
                222032421512112111\
                303241111411111211\
                1120'+
                // Barren Temple
               '12242114111212\
                212011115224122121\
                112012151111412221\
                230122422412212111\
                201134111141111121\
                211101'+
                // Watchtower
               '21511241112122\
                301215134111221212\
                0121111222412111221\
                203152114111221113\
                01134224212221120\
                12242114'+
                // Pillar
               '121121113031511241\
                211122120315211411\
                122111201211511241\
                121111230315112412\
                2111113012114221111\
                21211213012111111112\
                42111212110221412\
                14222111233151115\
                121121230324224212\
                221120311411241123\
                121203151342121111';

// Pillar pic https://youtu.be/EowPFSc_jqI?feature=shared&t=217

let _index = 0;
let _cipher = __cipher.replace(/ /g, '');
let _bin = '';    // Deciphered binary string
for( _i_ in _cipher ) {
    let _num = parseInt( _cipher[_i_] );
    if( _num == 0 )
        continue;
    _index += _num;
    _bin += __cipherKey[ _index % 30 ];
}
document.body.innerHTML = '<label>' + _bin + '</label><br/>';

let _str = bin2str( _bin );
document.body.innerHTML += '<pre style="background-color: black;width: min-content;">' + _str + '</pre>';

document.body.innerHTML += '<a href="https://github.com/qarlific/CessationCipher/">https://github.com/qarlific/CessationCipher/</a>';

// Returns a binary string as ascii text
function bin2str( pStr )  {
    let _binChars = pStr.match(/.{1,8}/g);
    let _mapChars = [];
    for( let _i_ in _binChars ) {
        let _binChar = _binChars[_i_];
        let _charCode = parseInt(_binChar, 2);
        let _char = String.fromCharCode(_charCode);
        //console.log( _i_, _binChar, _charCode, _char );   // For testing
        _mapChars.push( _char );
    }
    let _str = _mapChars.join('');
    return _str;
}

// Outputs to console the binary version of a character, for testing
function char2bin( pChar )  {
    const charCode = pChar.charCodeAt(0);
    const charBin = charCode.toString(2);
    console.log( pChar, charCode, charBin, charBin.length );
}
