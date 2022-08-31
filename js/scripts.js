// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

//function badWordOmmitter(word, text) {
  const sampleText = "You are a biffaroni."; 
  const badWord = ['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop'];
  let resultArray = [];

  for (let sampleTextI = 0; sampleTextI < sampleText.length; sampleTextI++) {
    if (sampleText[sampleTextI] === 'biffaroni') {
      resultArray.slice(sampleText[sampleTextI]);
      }
    
    for (let badWordJ = 0; badWordJ < badWord.length; badWordJ++) {
      if (sampleText[sampleTextI] === badWord[badWordJ])  {
        resultArray.push(sampleText[sampleTextI]);
      }
    }
  }

  const resultString = resultArray.join('');
 
 
  function badWordfinder (text) {
  const textArray = text.split(" ");
  const badWord = ["zoinks","muppeteer", "bifaroni", "loopdaloop"];
  
  for (let i = 0; i < textArray.length; i++) {
      for (let j = 0; j < badWord.length; j++) {
        if (textArray[i] === badWord[j]) {
          console.log(textArray[i]); 
        }
      }
    }
  }
 
 
 
 
  //textArray.forEach.toLowerCase().includes(badWord.toLowerCase()) {

  
  