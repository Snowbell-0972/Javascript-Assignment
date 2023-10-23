
function reverseWords(sentence){
    let words = sentence.split(' ');
    let reverseWords = [];

    for(let i=0;i<words.length;i++){
        let word = words[i];
        let reverseWord = '';

        for(let j=word.length-1;j >= 0; j--){
            reverseWord += word[j];
        }

        reverseWords.push(reverseWord)
    }

    let reversedSentence = reverseWords.join(' ');
    return reversedSentence;
}

let inputSentence = "This is a sunny day";
let reversedSentence = reverseWords(inputSentence);
console.log("Reversed Sentense: "+ reversedSentence);
