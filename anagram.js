function validAnagram(value, compare) {
    //create hash table
    const hash = {};
    //transform value to array
    const values = value.split('');
    const compares = compare.split('');
    //asign key value to hash
    values.forEach((letter) => {
      hash[letter]? hash[letter]+= 1 :hash[letter] = 1 ;
    });
    console.log(hash);
    //check hash with compare
    compares.forEach((letter) => {
      if (letter in hash && hash[letter] > 0) hash[letter] = hash[letter] - 1;
      if (letter in hash && hash[letter] === 0) delete hash[letter];
    });
    return Object.keys(hash).length === 0;
  
    // add whatever parameters you deem necessary - good luck!
  }
  console.log(validAnagram('aaz', 'zza'));
  
  console.log(validAnagram('anagram', 'nagaram'));
