const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const users = [
    { id: 1, name: 'salma', email: 'jorina@gmail.com', phone: '01566666666' },
    { id: 2, name: 'balma', email: 'borina@gmail.com', phone: '0158888888' },
    { id: 3, name: 'kalma', email: 'korina@gmail.com', phone: '01544466667' },
    { id: 4, name: 'talma', email: 'torina@gmail.com', phone: '0159999999' },
    { id: 5, name: 'dalma', email: 'dorina@gmail.com', phone: '01533333333' },
    { id: 6, name: 'palma', email: 'porina@gmail.com', phone: '01511111111' },
    { id: 7, name: 'nalma', email: 'norina@gmail.com', phone: '01566666688' }
]


app.get('/', (req, res) => {
    res.send('hello my own smarty pant node!!')
});

app.get('/users', (req, res) => {
    res.send(users);
})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user);
})

app.post('/users', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);

})


app.get('/users', (req, res) => {
    res.send({ id: 1, name: 'abdul', jod: 'khai sudu halim' })
})

app.listen(port, () => {
    console.log('Listening to port', port)
})