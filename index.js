import express from 'express';
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send({ message: 'Hello to dreambroker assignment' });
});

app.post('/analyze', (req, res) => {
    let inputText = req.body.text;
    let totalLength = inputText.length;
    let lengthWithoutSpace = inputText.replace(/ /g, '').length;
    let wordCount = inputText.match(/(\w+)/g).length;
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
    let out = counter(inputText);
    const ordered = Object.fromEntries(Object.entries(out).sort());
    let result = Object.keys(ordered).map((key) => ({ [key]: ordered[key] }));
    res.send(result);
});

// listen to the server
app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`);
});
