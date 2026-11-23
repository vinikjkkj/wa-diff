__d(
  "WAFlowJSONConditionalRenderingLiteralHelper",
  [
    "WAFlowJSONConditionalRenderingOperandHelper",
    "WAFlowJSONConditionalRenderingOperatorHelper",
    "WAFlowJSONConditionalRenderingTypeHelper",
    "WAFlowJSONValidationError",
    "WAFlowsConditionalRenderingTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
        "-",
        "\\",
        "'",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "t",
        "f",
      ]),
      s = Object.freeze({
        NEGATIVE_SIGN: "-",
        ESCAPE: "\\",
        STRING_QUOTE: "'",
        ZERO: "0",
        ONE: "1",
        TWO: "2",
        THREE: "3",
        FOUR: "4",
        FIVE: "5",
        SIX: "6",
        SEVEN: "7",
        EIGHT: "8",
        NINE: "9",
        TRUE_INITIAL: "t",
        TRUE_LITERAL: "true",
        FALSE_INITIAL: "f",
        FALSE_LITERAL: "false",
      });
    function u(e, t, n) {
      switch (t[n]) {
        case s.TRUE_INITIAL:
        case s.FALSE_INITIAL:
          return d(e, t, n);
        case s.STRING_QUOTE:
          return c(e, t, n);
        default:
          return m(e, t, n);
      }
      return { hasValidationFailed: !1 };
    }
    function c(e, t, n) {
      var r = n;
      do
        if (((r = t.indexOf(s.STRING_QUOTE, r + 1)), r === -1))
          return {
            hasValidationFailed: !0,
            value: t.substring(n),
            errorMessage: o("WAFlowJSONValidationError")
              .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.MISSING_STRING_ENCLOSURE,
          };
      while (t[r - 1] === s.ESCAPE);
      var a = "string",
        i = t.substring(n + 1, r);
      return p(e, i, a, r);
    }
    function d(e, t, n) {
      var a,
        i = new Set([
          (a = r("WAFlowsConditionalRenderingTypes")).EMPTY_STRING,
          a.OPENING_PARENTHESIS,
          a.CLOSING_PARENTHESIS,
          a.DYNAMIC_VARIABLE_START,
        ]);
      o(
        "WAFlowJSONConditionalRenderingOperatorHelper",
      ).OPERATOR_INITIALS.forEach(function (e) {
        return i.add(e);
      });
      for (var l = n; l < t.length && !i.has(t[l]); ) l++;
      var u = "boolean",
        c = t.substring(n, l);
      return c !== s.TRUE_LITERAL && c !== s.FALSE_LITERAL
        ? {
            hasValidationFailed: !0,
            value: c,
            valueType: u,
            errorMessage: o(
              "WAFlowJSONValidationError",
            ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidLiteralErrorMsg(
              c,
            ),
          }
        : p(e, c, u, l - 1);
    }
    function m(e, t, n) {
      var r = new Set([
          s.ZERO,
          s.ONE,
          s.TWO,
          s.THREE,
          s.FOUR,
          s.FIVE,
          s.SIX,
          s.SEVEN,
          s.EIGHT,
          s.NINE,
        ]),
        a = n,
        i = /^(0[0-9]|-0).*$/;
      if (i.test(t.substring(n)))
        return {
          hasValidationFailed: !0,
          value: t.substring(n),
          errorMessage: o("WAFlowJSONValidationError")
            .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.LEADING_ZERO,
        };
      for (
        ;
        a < t.length && (r.has(t[a]) || (t[a] === s.NEGATIVE_SIGN && a === n));
      )
        a++;
      var l = "number",
        u = t.substring(n, a);
      return u === s.NEGATIVE_SIGN
        ? {
            hasValidationFailed: !0,
            value: t.substring(n),
            errorMessage: o("WAFlowJSONValidationError")
              .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE
              .MISSING_NUMBER_AFTER_NEGATIVE_SIGN,
          }
        : p(e, u, l, a - 1);
    }
    function p(e, t, n, r) {
      var a = o(
        "WAFlowJSONConditionalRenderingTypeHelper",
      ).WAFlowJSONIsValueCompatibleWithPrevious(e, {
        type: n,
        value: t,
        isOperand: !0,
        isLiteral: !0,
      });
      if (a.hasValidationFailed) {
        var i =
          !o(
            "WAFlowJSONConditionalRenderingOperandHelper",
          ).isPreviousElementOperand(e) &&
          a.previousOperand != null &&
          a.previousOperand.isLiteral
            ? o("WAFlowJSONValidationError")
                .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE
                .LITERALS_ON_BOTH_SIDES_OF_OPERATOR
            : a.errorMessage;
        return {
          hasValidationFailed: !0,
          value: t,
          valueType: n,
          endIndex: r,
          errorMessage: i,
        };
      }
      return { hasValidationFailed: !1, value: t, valueType: n, endIndex: r };
    }
    ((l.WA_FLOW_JSON_IF_OPERATORS_INITIALS = e),
      (l.WAFlowJSONValidateIfCompLiteral = u));
  },
  98,
);
