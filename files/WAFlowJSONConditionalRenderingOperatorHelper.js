__d(
  "WAFlowJSONConditionalRenderingOperatorHelper",
  [
    "invariant",
    "WAFlowJSONConditionalRenderingOperandHelper",
    "WAFlowJSONConditionalRenderingTypeHelper",
    "WAFlowJSONValidationError",
    "WAFlowsConditionalRenderingTypes",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = new Set(["!", "&", "|", "=", ">", "<"]),
      u = new Set([
        "(",
        ")",
        "!",
        "&&",
        "||",
        "==",
        "!=",
        ">",
        ">=",
        "<",
        "<=",
      ]),
      c = new Set(["!", ">", "<"]);
    function d(e, t) {
      if (t === 0)
        return {
          hasValidationFailed: !0,
          errorMessage: o("WAFlowJSONValidationError")
            .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.MISSING_OPENING_PARENTHESIS,
        };
      var n = e.length > 0 ? e[e.length - 1] : null;
      return n !== null &&
        n.value === r("WAFlowsConditionalRenderingTypes").OPENING_PARENTHESIS
        ? {
            hasValidationFailed: !0,
            errorMessage: o("WAFlowJSONValidationError")
              .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.INVALID_EMPTY_PARENTHESES,
          }
        : n !== null && !g(e)
          ? {
              hasValidationFailed: !0,
              errorMessage: o("WAFlowJSONValidationError")
                .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE
                .WRONG_POSITIONING_CLOSING_PARENTHESIS,
            }
          : { hasValidationFailed: !1 };
    }
    function m(t, n, r) {
      if (!e.has(n[r]))
        return {
          hasValidationFailed: !0,
          errorMessage: o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getUnexpectedCharacterErrorMsg(
            n[r],
          ),
        };
      var a = _(n, r),
        i = a[0],
        l = a[1];
      if ((typeof i == "string" || s(0, 81929), i.length === 1 && !c.has(i)))
        return {
          hasValidationFailed: !0,
          errorMessage: o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidOperatorFormatErrorMsg(
            i,
          ),
        };
      if (r + 1 >= n.length || !f(t, i))
        return {
          hasValidationFailed: !0,
          errorMessage: o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getWrongPositioningOfOperatorErrorMsg(
            i,
          ),
        };
      var u = h(t);
      if (u != null && !y(u.value, i))
        return {
          hasValidationFailed: !0,
          errorMessage: o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getWrongConcatenationOfOperatorErrorMsg(
            u.value,
            i,
          ),
        };
      var d = o(
        "WAFlowJSONConditionalRenderingTypeHelper",
      ).WAFlowJSONIsValueCompatibleWithPrevious(t, {
        type: "operator",
        value: i,
        isLiteral: !1,
        isOperand: !1,
      });
      return d.hasValidationFailed
        ? { hasValidationFailed: !0, errorMessage: d.errorMessage }
        : { hasValidationFailed: !1, endIndex: +l, value: i };
    }
    function p(e) {
      var t = e.filter(function (e) {
        return (
          e.value !==
            r("WAFlowsConditionalRenderingTypes").OPENING_PARENTHESIS &&
          e.value !== r("WAFlowsConditionalRenderingTypes").CLOSING_PARENTHESIS
        );
      });
      if (t.length === 1) {
        var n = t[t.length - 1];
        if (n.type !== "boolean")
          return {
            hasValidationFailed: !0,
            errorMessage: o("WAFlowJSONValidationError")
              .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.ONLY_OPERAND_NOT_BOOLEAN,
          };
        if (n.isLiteral)
          return {
            hasValidationFailed: !0,
            errorMessage: o("WAFlowJSONValidationError")
              .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.ONLY_OPERAND_IS_LITERAL,
          };
      }
      return { hasValidationFailed: !1 };
    }
    function _(e, t) {
      if (t + 1 >= e.length) return [e[t], t];
      var n = e.substr(t, 2);
      return u.has(n) ? [n, t + 1] : [e[t], t];
    }
    function f(e, t) {
      var n,
        o,
        a = new Set([
          r("WAFlowsConditionalRenderingTypes").AND,
          r("WAFlowsConditionalRenderingTypes").OR,
          r("WAFlowsConditionalRenderingTypes").OPENING_PARENTHESIS,
        ]);
      return (
        g(e) ||
        (t === r("WAFlowsConditionalRenderingTypes").NOT &&
          (e.length === 0 ||
            a.has(
              (n = (o = e.at(e.length - 1)) == null ? void 0 : o.value) != null
                ? n
                : "",
            )))
      );
    }
    function g(e) {
      return (
        o(
          "WAFlowJSONConditionalRenderingOperandHelper",
        ).isPreviousElementOperand(e) ||
        (e.length > 0 &&
          e[e.length - 1].value ===
            r("WAFlowsConditionalRenderingTypes").CLOSING_PARENTHESIS)
      );
    }
    function h(e) {
      var t;
      return (t = e.findLast(function (e) {
        return !e.isOperand;
      })) != null
        ? t
        : null;
    }
    function y(e, t) {
      var n,
        o = new Set([
          (n = r("WAFlowsConditionalRenderingTypes")).EQUALS,
          n.NOT_EQUALS,
          n.GREATER_THAN,
          n.GREATER_THAN_OR_EQUALS,
          n.LESS_THAN,
          n.LESS_THAN_OR_EQUALS,
        ]),
        a =
          e === r("WAFlowsConditionalRenderingTypes").OPENING_PARENTHESIS ||
          e === r("WAFlowsConditionalRenderingTypes").CLOSING_PARENTHESIS;
      return a || !(o.has(e) || o.has(t));
    }
    ((l.OPERATOR_INITIALS = e),
      (l.validateClosingParenthesis = d),
      (l.validateOperator = m),
      (l.validateStackWithoutParentheses = p));
  },
  98,
);
