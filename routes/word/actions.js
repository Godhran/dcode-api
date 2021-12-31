const Dictionary = require("./../../data/targetWords");
// const Words = require("./../../data/words");

// const fs = require('fs');

const getWord = async (length) => {
    return new Promise(async (resolve, reject) => {
        try {
            let nLetterWords = Dictionary.filter(entry =>
                entry.word.length === parseInt(length)
            )
            const randomWord = nLetterWords[Math.floor(Math.random() * nLetterWords.length)];
            resolve(randomWord)
        } catch {
            resolve('')
        }
    })
}

const checkWord = async (word) => {
    return new Promise(async (resolve, reject) => {
        try {
            let foundWord = Dictionary.find(entry =>
                entry.word.toUpperCase() === word.toUpperCase()
            )
            if (foundWord) {
                resolve(foundWord)
            } else {
                resolve({error: `'${word}' is not in the dictionary`})
            }
        } catch {
            resolve('')
        }
    })
}

// const generateJSON = async () => {
//     return new Promise(async (resolve, reject) => {
//         // console.log(Object.keys(Dictionary).length)
//         let wordKeys = Object.keys(Dictionary);
//         let dictionary = [];
//         wordKeys.forEach(entry => {
//             var word = entry;
//             var definition = Dictionary[entry];
//             dictionary.push({word, definition});
//             console.log({word, definition})
//         })
//
//         fs.writeFile('dictionary.json', JSON.stringify(dictionary), function (err) {
//             if (err) return console.log(err);
//             // console.log('Hello World > helloworld.txt');
//         });
//
//         try {
//             // resolve(matchInfo)
//         } catch {
//             resolve('')
//         }
//     })
// }
//
// const buildFile = async () => {
//     return new Promise(async (resolve, reject) => {
//         console.log(Words.length)
//         let wordsOver4Letters = Words.filter(entry => entry.word.length >= 4)
//         console.log(wordsOver4Letters.length)
//         fs.writeFile('words.json', JSON.stringify(wordsOver4Letters), function (err) {
//             if (err) return console.log(err);
//             console.log('Hello World > helloworld.txt');
//         });
//
//         try {
//             // resolve(matchInfo)
//         } catch {
//             resolve('')
//         }
//     })
// }

module.exports = {
    getWord,
    checkWord,
    // generateJSON,
    // buildFile
};
