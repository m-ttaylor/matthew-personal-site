import { wordlist } from "./wordlist";

const MAX_UINT16 = 0xffff;

const max = wordlist.length
const separatorCharSet = "!@#$%^&"

const getPassphrase = (length: number, separators: boolean, numbers: number): string => {
  
  let endNumbers = ""
  const randomWords: string[] = []

  // generate the requested amount of random words and numbers all at once to avoid using a third Uint16Array
  const array: Uint16Array = new Uint16Array(length + (numbers + 1));
  const cryptoRandomVals = crypto.getRandomValues(array);

  cryptoRandomVals.forEach((v, i) => {
    // random values will be between 0 and max size of a 16 bit int, so we convert to a float 0-1 and 
    // multiply (then floor) by the range + 1 that we want a random int over; length of the wordlist for words,
    // and length of the set (0 ... 9) for numbers
    if (i <= length) {
      const result = Math.floor((v / (MAX_UINT16 + 1)) * (max+1));
      randomWords.push(wordlist[result])
    } else {
      const result = Math.floor((v / (MAX_UINT16 + 1)) * (10))
      endNumbers += result.toString();
    }
  });
  
  const separatorChars: string[] = []

  if (separators) {
    const array: Uint16Array = new Uint16Array(length); // need (passphrase length - 1) separators
    const cryptoRandomVals = crypto.getRandomValues(array);

    cryptoRandomVals.forEach(v => {
      const result = Math.floor((v / (MAX_UINT16 + 1)) * (separatorCharSet.length));
      separatorChars.push(separatorCharSet[result])
    });
  }

  let passphrase = ""

  randomWords.forEach((pp, i) => {
    passphrase += pp;

    if (i < length) { // add neither separator nor space after last word
      passphrase += separators ? separatorChars[i] : " "
    }
  });
  
  passphrase += endNumbers

  return passphrase;
}

const exports = { getPassphrase }
export default exports;
