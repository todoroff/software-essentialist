export function boolCalculator(expression: string): boolean {
  if (expression in primitives) {
    return primitiveToBool(expression as Primitive);
  }

  return boolCalculator(
    expression.replace(/NOT (TRUE|FALSE)/, (match, primitive: Primitive) =>
      operators.NOT(primitive)
    )
  );
}

type Primitive = keyof typeof primitives;

const primitives = {
  TRUE: "TRUE" as const,
  FALSE: "FALSE" as const,
};

const operators = {
  NOT: (primitive: Primitive) => boolToPrimitive(!primitiveToBool(primitive)),
};

function primitiveToBool(primitive: Primitive): boolean {
  return primitive === primitives.TRUE;
}

function boolToPrimitive(bool: boolean): Primitive {
  return bool ? primitives.TRUE : primitives.FALSE;
}
