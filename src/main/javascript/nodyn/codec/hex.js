"use strict";

var Buffer = require('buffer').Buffer;
var Helper = io.nodyn.buffer.Helper;

var jHex = org.bouncycastle.util.encoders.Hex;

var Hex = {};
module.exports = Hex;

Hex.toString = function() {
  return 'hex';
}

Hex.encode = function(bytes) {
  if ( typeof bytes == 'string' ) {
    bytes = Helper.bytes( bytes, 'utf8' );
  } else {
    bytes = bytes._byteArray();
  }
  return jHex.toHexString( bytes );
}

Hex.decode = function(input) {
  if ( typeof input == 'string' ) {
    return new Buffer( jHex.decode( input ) );
  } else {
    return new Buffer( jHex.decode( input._byteArray() ) );
  }
}
