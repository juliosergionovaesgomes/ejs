import express from 'express'
import dotenv from 'dotenv'
import expressLayout from 'express-ejs-layouts'
import path from 'path'

const app = express()

dotenv.config()

let PORT = process.env.PORT || 5000;

const __dirname = path.resolve(path.dirname(''));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(expressLayout)



app.get('/', (req, res) => {
    res.render('index', {
        people: [
            { name: 'dave' },
            { naem: 'Jary' }
        ]
    })
})

app.listen(PORT, () => console.log('Servidor Rodando'))