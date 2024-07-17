function countWords(p) {
    p = p.trim();
    let wordsArray = p.split(/\s+/);
    wordsArray = wordsArray.filter(word => word !== '');
    return wordsArray.length;
  }
  let paragraph = "  This is a paragraph. ";
  let wordCount = countWords(paragraph);
  console.log(`Number of words in the paragraph: ${wordCount}`); // Output: Number of words in the paragraph: 7
  