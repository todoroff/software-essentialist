export function boolCalculator(expression: string): boolean {
  if (expression in primitives) {
    return primitiveToBool(expression as Primitive);
  }

  return boolCalculator(expressionToPrimitive(expression));
}

type Primitive = keyof typeof primitives;

const primitives = {
  TRUE: "TRUE" as const,
  FALSE: "FALSE" as const,
};

const operators = {
  PARENS: {
    fn: expressionToPrimitive,
    regex: /\((\w+)\)/,
    replacer: (match: string, expression: string) =>
      operators.PARENS.fn(expression),
  },
  NOT: {
    fn: (primitive: Primitive): Primitive =>
      boolToPrimitive(!primitiveToBool(primitive)),
    regex: /NOT (TRUE|FALSE)/,
    replacer: (match: string, primitive: Primitive) =>
      operators.NOT.fn(primitive),
  },
  AND: {
    fn: (a: Primitive, b: Primitive): Primitive =>
      boolToPrimitive(primitiveToBool(a) && primitiveToBool(b)),
    regex: /(TRUE|FALSE) AND (TRUE|FALSE)/,
    replacer: (match: string, primitiveA: Primitive, primitiveB: Primitive) =>
      operators.AND.fn(primitiveA, primitiveB),
  },
  OR: {
    fn: (a: Primitive, b: Primitive): Primitive =>
      boolToPrimitive(primitiveToBool(a) || primitiveToBool(b)),
    regex: /(TRUE|FALSE) OR (TRUE|FALSE)/,
    replacer: (match: string, primitiveA: Primitive, primitiveB: Primitive) =>
      operators.OR.fn(primitiveA, primitiveB),
  },
};

function expressionToPrimitive(expression: string): Primitive {
  return expression
    .replace(operators.PARENS.regex, operators.PARENS.replacer)
    .replace(operators.NOT.regex, operators.NOT.replacer)
    .replace(operators.AND.regex, operators.AND.replacer)
    .replace(operators.OR.regex, operators.OR.replacer) as Primitive;
}

function primitiveToBool(primitive: Primitive): boolean {
  return primitive === primitives.TRUE;
}

function boolToPrimitive(bool: boolean): Primitive {
  return bool ? primitives.TRUE : primitives.FALSE;
}
