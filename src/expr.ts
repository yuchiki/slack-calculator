export type Expr = Num | BinOp

export interface Num {
    type: 'Num';
    value: number;
}
export const toNum = (value: number) : Num => ({type: 'Num', value: value});

export interface BinOp {
    type: BinOpType;
    left: Expr;
    right: Expr;
}
export type BinOpType = 'Add' | 'Sub' | 'Mul' | 'Div'
export type BinOpBuilder = (left: Expr, right: Expr) => Expr
const makeBinOpBuilder = (type: BinOpType) : BinOpBuilder =>
    (left: Expr, right: Expr): Expr => ({type: type, left: left, right: right})
export const toAdd = makeBinOpBuilder('Add')
export const toSub = makeBinOpBuilder('Sub')
export const toMul = makeBinOpBuilder('Mul')
export const toDiv = makeBinOpBuilder('Div')
