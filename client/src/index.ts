import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = 8080

app.get('/' ,(req:Request, res:Response) => {
    res.send("Nigga")
})

app.listen(port, () => {
    console.log(`Server running at ${port}`)
})