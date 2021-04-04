const inputPhrases = {
    Name: ['Wihann', 'Maaijke', 'Ane', 'Christiaan'],
    Verb: ['swims', 'jogs', 'sleeps', 'rows'],
    Place: ['in the dam', 'in the park', 'in the bedroom', 'on the ocean']
};

const getPhrase = arr => {
  const arrLen =   arr.length;
  const rand = Math.floor(Math.random()* arrLen);
  return arr[rand];
};

const generateSentence = phrases => {
    const outputArr = [];
    outputArr.push(getPhrase(phrases.Name));
    outputArr.push(getPhrase(phrases.Verb));
    outputArr.push(getPhrase(phrases.Place));
    
    return outputArr.join(' ');
}


//console.log(getPhrase(phrases.Name));
console.log(generateSentence(inputPhrases));