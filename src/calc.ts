import * as expr from "./expr";

export function Calc(expr: expr.Expr): number {
    switch (expr.type) {
        case 'Num': return expr.value;
        case 'Add': return Calc(expr.left) + Calc(expr.right);
        case 'Sub': return Calc(expr.left) - Calc(expr.right);
        case 'Mul': return Calc(expr.left) * Calc(expr.right);
        case 'Div': return Calc(expr.left) / Calc(expr.right);

    }
}
