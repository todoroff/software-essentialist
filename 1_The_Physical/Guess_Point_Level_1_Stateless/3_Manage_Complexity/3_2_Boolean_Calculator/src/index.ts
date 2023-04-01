export function boolCalculator(expression: string): boolean {
  return primitiveToBool(expressionToPrimitive(expression));
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
    precedence: 4000,
  },
  NOT: {
    fn: (primitive: Primitive): Primitive =>
      boolToPrimitive(!primitiveToBool(primitive)),
    regex: /NOT (TRUE|FALSE)/,
    replacer: (match: string, primitive: Primitive) =>
      operators.NOT.fn(primitive),
    precedence: 3000,
  },
  AND: {
    fn: (a: Primitive, b: Primitive): Primitive =>
      boolToPrimitive(primitiveToBool(a) && primitiveToBool(b)),
    regex: /(TRUE|FALSE) AND (TRUE|FALSE)/,
    replacer: (match: string, primitiveA: Primitive, primitiveB: Primitive) =>
      operators.AND.fn(primitiveA, primitiveB),
    precedence: 2000,
  },
  OR: {
    fn: (a: Primitive, b: Primitive): Primitive =>
      boolToPrimitive(primitiveToBool(a) || primitiveToBool(b)),
    regex: /(TRUE|FALSE) OR (TRUE|FALSE)/,
    replacer: (match: string, primitiveA: Primitive, primitiveB: Primitive) =>
      operators.OR.fn(primitiveA, primitiveB),
    precedence: 1000,
  },
};

function expressionToPrimitive(expression: string): Primitive {
  if (expression in primitives) {
    return expression as Primitive;
  }
  const result = (<(keyof typeof operators)[]>Object.keys(operators))
    .sort((a, b) => operators[b].precedence - operators[a].precedence)
    .reduce(
      (accumulator, current) =>
        accumulator.replace(
          operators[current].regex,
          operators[current].replacer
        ),
      expression
    ) as Primitive;
  return expressionToPrimitive(result);
}

function primitiveToBool(primitive: Primitive): boolean {
  return primitive === primitives.TRUE;
}

function boolToPrimitive(bool: boolean): Primitive {
  return bool ? primitives.TRUE : primitives.FALSE;
}
