const phrases = {
    Name: ['Wihann', 'Maaijke', 'Ane', 'Christiaan'],
    Verb: ['swims', 'jogs', 'sleeps', 'rows'],
    Place: ['in the dam', 'in the park', 'in the bedroom', 'on the ocean']
};

const getPhrase = arr => {
  const arrLen =   arr.length;
  const rand = Math.floor(Math.random()* arrLen);
  return arr[rand];
};

const generateSentence = () => {
    
}


console.log(getPhrase(phrases.Name));