
var Buffer = require('buffer').Buffer;
var Helper = io.nodyn.buffer.Helper;

var jBase64 = org.bouncycastle.util.encoders.Base64

var Base64 = {};

Base64.encode = function(bytes) {
  if ( typeof bytes == 'string' ) {
    bytes = Helper.bytes( bytes, 'utf8' );
  } else {
    bytes = bytes._byteArray();
  }
  return jBase64.toBase64String( bytes );
}

Base64.decode = function(input) {
  if ( typeof input == 'string' ) {
    return new Buffer( jBase64.decode( input ) );
  } else {
    return new Buffer( jBase64.decode( input._byteArray() ) );
  }
}

module.exports = Base64;
