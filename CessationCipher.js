

let _cipherKey = '110011110100111100101001010110';
let _cipher = '224111113212111111203114112411113111301211411111121112112220324215121121113032411114111112111120122421141112122120111152241221211120121511114122212'+
              '301224224122121112011341111411111212111012151124111212230121513411122121201211112224121112212031521141112211130113422421222112012242114'+
              '12112111303151124121112212031521141112211120121151124112111123031511241221111130121142211112121121301211111111242111212110221412142221112303151115121121230324224212221120311411241123121203151342121111';

let _index = 0;
let _binStr = '';    // Deciphered binary string'

for( _i_ in _cipher ) {
    let _num = parseInt( _cipher[_i_] );
    if( _num == 0 )
        continue;
    _index += _num;
    _binStr += _cipherKey[ _index % _cipherKey.length ];
}
document.body.innerHTML = '<label>' + _binStr + '</label><br/>';

let _str = bin2str( _binStr );
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
    const charBin = (0b100000000 + charCode).toString(2).substring(1);
    console.log( pChar, charCode, charBin );
}
