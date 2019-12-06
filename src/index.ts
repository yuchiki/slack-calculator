import * as expr from "./expr";
import {Calc} from "./calc";

console.log(Calc(expr.toAdd(expr.toNum(1), expr.toMul(expr.toNum(2), expr.toNum(4)))));
