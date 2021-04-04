//Input phrases below are used to create random sentence
const inputPhrases = {
    Name: ['Wihann', 'Maaijke', 'Ane', 'Christiaan'],
    Verb: ['swims', 'jogs', 'sleeps', 'rows'],
    Place: ['in the dam', 'in the park', 'in the bedroom', 'on the ocean']
};

// getPhrase function below selects random element from array
const getPhrase = arr => {
  const arrLen =   arr.length;
  const rand = Math.floor(Math.random()* arrLen);
  return arr[rand];
};

//generateSentence function below selects a random name, verb and place and creates a sentence
const generateSentence = phrases => {
    const outputArr = [];
    outputArr.push(getPhrase(phrases.Name));
    outputArr.push(getPhrase(phrases.Verb));
    outputArr.push(getPhrase(phrases.Place));
    
    return outputArr.join(' ');
}


//Code below prints sentence
console.log(generateSentence(inputPhrases));