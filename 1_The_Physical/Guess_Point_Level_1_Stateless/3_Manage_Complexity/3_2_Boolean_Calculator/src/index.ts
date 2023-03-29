export function boolCalculator(expression: string): boolean {
  if (expression in primitives) {
    return primitiveToBool(expression as Primitive);
  }

  return boolCalculator(
    expression
      .replace(/NOT (TRUE|FALSE)/, (match, primitive: Primitive) =>
        operators.NOT(primitive)
      )
      .replace(
        /(TRUE|FALSE) AND (TRUE|FALSE)/,
        (match, primitiveA: Primitive, primitiveB: Primitive) =>
          operators.AND(primitiveA, primitiveB)
      )
      .replace(
        /(TRUE|FALSE) OR (TRUE|FALSE)/,
        (match, primitiveA: Primitive, primitiveB: Primitive) =>
          operators.OR(primitiveA, primitiveB)
      )
  );
}

type Primitive = keyof typeof primitives;

const primitives = {
  TRUE: "TRUE" as const,
  FALSE: "FALSE" as const,
};

const operators = {
  NOT: (primitive: Primitive): Primitive =>
    boolToPrimitive(!primitiveToBool(primitive)),
  AND: (a: Primitive, b: Primitive): Primitive =>
    boolToPrimitive(primitiveToBool(a) && primitiveToBool(b)),
  OR: (a: Primitive, b: Primitive): Primitive =>
    boolToPrimitive(primitiveToBool(a) || primitiveToBool(b)),
};

function primitiveToBool(primitive: Primitive): boolean {
  return primitive === primitives.TRUE;
}

function boolToPrimitive(bool: boolean): Primitive {
  return bool ? primitives.TRUE : primitives.FALSE;
}
