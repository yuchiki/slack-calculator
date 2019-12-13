import * as expr from "./expr";
import {Calc} from "./calc";
import express from 'express';

console.log(Calc(expr.toAdd(expr.toNum(1), expr.toMul(expr.toNum(2), expr.toNum(4)))));

const app: express.Express = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
});

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const router: express.Router = express.Router();
router.post('/api/calc', (req: express.Request, res: express.Response) => {
    console.log(req.body)
    res.send(req.body)
});

app.use(router)

app.listen(3000, ()=>{ console.log('app listening on port 3000.')})
