
type Expr = Num | BinOp

interface Num {
    type: 'Num';
    value: number;
}
const toNum = (value: number) : Num => ({type: 'Num', value: value});

interface BinOp {
    type: BinOpType;
    left: Expr;
    right: Expr;
}
type BinOpType = 'Add' | 'Sub' | 'Mul' | 'Div'
type BinOpBuilder = (left: Expr, right: Expr) => Expr
const makeBinOpBuilder = (type: BinOpType) : BinOpBuilder =>
    (left: Expr, right: Expr): Expr => ({type: type, left: left, right: right})
const toAdd = makeBinOpBuilder('Add')
const toSub = makeBinOpBuilder('Sub')
const toMul = makeBinOpBuilder('Mul')
const toDiv = makeBinOpBuilder('Div')


function Calc(expr: Expr): number {
    switch (expr.type) {
        case 'Num': return expr.value;
        case 'Add': return Calc(expr.left) + Calc(expr.right);
        case 'Sub': return Calc(expr.left) - Calc(expr.right);
        case 'Mul': return Calc(expr.left) * Calc(expr.right);
        case 'Div': return Calc(expr.left) / Calc(expr.right);

    }
}

console.log(Calc(toAdd(toNum(1), toMul(toNum(2), toNum(3)))));
