function rot13(str) {
  var decodedString = "";

  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // Convert uppercase letters
      var decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
      decodedString += String.fromCharCode(decodedCharCode);
    } else {
      // Pass non-alphabetic characters unchanged
      decodedString += str.charAt(i);
    }
  }

  return decodedString;
}

rot13("SERR PBQR PNZC");
