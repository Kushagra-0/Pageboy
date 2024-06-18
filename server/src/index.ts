import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'
import db from './db/models';
import router from './routes';

dotenv.config()

const app: Express = express();
app.use(express.json());
app.use(router);
const port = 8080;

db.sequelize.sync();

app.get('/' ,(req:Request, res:Response) => {
    res.send("Nigga");
})

app.listen(port, () => {
    console.log(`Server running at ${port}`);
})