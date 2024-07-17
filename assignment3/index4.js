function countVC(str) {
    let vCount = 0;
    let cCount = 0;
  
    str = str.toLowerCase();

  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
        if (char >= 'a' && char <= 'z'){
        if (isVowel(char)) {
          vCount++;
        } else {
          cCount++;
        }
      }
    }

    function isVowel(char) {
        return ['a', 'e', 'i', 'o', 'u'].includes(char);
      }
  
    console.log(`Number of vowels: ${vCount}`);
    console.log(`Number of consonants: ${cCount}`);
  }
  
  let str = "i am bilal , now learning javascript programming 24";
  countVC(str);
  