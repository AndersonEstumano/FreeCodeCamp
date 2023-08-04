function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const processedStr = str.toLowerCase().replace(/[\W_]/g, '');

  // Compare the processed string with its reverse
  return processedStr === processedStr.split('').reverse().join('');
}

palindrome("eye")
