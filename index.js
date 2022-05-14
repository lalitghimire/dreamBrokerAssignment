import 'dotenv/config';
import express from 'express';
const app = express();
import path from 'path';
const __dirname = path.resolve();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/analyze', (req, res) => {
    const inputText = req.body.text;
    let totalLength = 0;
    let lengthWithoutSpace = 0;
    let wordCount = 0;
    let charCountArray = [];

    if (inputText !== '') {
        totalLength = inputText.length;
        lengthWithoutSpace = inputText.replace(/ /g, '').length;
        wordCount = inputText.match(/(\w+)/g).length;

        // function which creates an object with characters and counts from a string
        const characterCounter = (str) => {
            return str
                .split('')
                .filter((char) => /[a-zA-Z]/.test(char))
                .reduce((total, char) => {
                    total[char] ? total[char]++ : (total[char] = 1);
                    return total;
                }, {});
        };

        const characterCountObject = characterCounter(inputText.toLowerCase());
        const orderedCharacterCountObject = Object.fromEntries(
            Object.entries(characterCountObject).sort()
        );
        // create an array of the objects from a single object and save to result
        charCountArray = Object.keys(orderedCharacterCountObject).map((key) => ({
            [key]: orderedCharacterCountObject[key],
        }));
    }

    const responseObject = {
        textLength: { withSpaces: totalLength, withoutSpaces: lengthWithoutSpace },
        wordCount: wordCount,
        characterCount: charCountArray,
    };
    res.send(responseObject);
});

// listen to the server
app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`);
});
