import express from 'express';
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.send({ message: 'Hello to dreambroker assignment' });
});

// listen to the server
app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`);
});
