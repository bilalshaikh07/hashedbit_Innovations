function correctfn(sentence, wrong, correct) {

    let regex = new RegExp(wrong,"gi");
    
    let correctLine = sentence.replace(regex, correct);
    return correctLine;
  }
  
  let sentence = "my neme apple";
  let wrongW = "neme";
  let correctW = "name";
  
  let correctLine = correctfn(sentence, wrongW, correctW);
  console.log(correctLine); 
  