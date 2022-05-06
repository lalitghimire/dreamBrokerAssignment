import 'dotenv/config';
import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send({ message: 'Hello to dreambroker assignment' });
});

app.post('/analyze', (req, res) => {
    const inputText = req.body.text;
    const totalLength = inputText.length;
    const lengthWithoutSpace = inputText.replace(/ /g, '').length;
    const wordCount = inputText.match(/(\w+)/g).length;
    console.log(inputText);
    console.log(totalLength);
    console.log(lengthWithoutSpace);
    console.log(wordCount);

    let counter = (str) => {
        return str
            .split('')
            .filter((char) => /[a-zA-Z]/.test(char))
            .reduce((total, char) => {
                total[char] ? total[char]++ : (total[char] = 1);
                return total;
            }, {});
    };
    const out = counter(inputText.toLowerCase());
    const ordered = Object.fromEntries(Object.entries(out).sort());
    const result = Object.keys(ordered).map((key) => ({ [key]: ordered[key] }));
    const responseObject = {
        textLength: { withSpaces: totalLength, withoutSpaces: lengthWithoutSpace },
        wordCount: wordCount,
        characterCount: result,
    };
    res.send(responseObject);
});

// listen to the server
app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`);
});
