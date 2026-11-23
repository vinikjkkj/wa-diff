__d(
  "WAFlowJSONConditionalRenderingTypeHelper",
  [
    "WAFlowJSONConditionalRenderingOperandHelper",
    "WAFlowJSONValidationError",
    "WAFlowsConditionalRenderingTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new Set([
        (s = r("WAFlowsConditionalRenderingTypes")).GREATER_THAN,
        s.GREATER_THAN_OR_EQUALS,
        s.LESS_THAN,
        s.LESS_THAN_OR_EQUALS,
      ]),
      c = new Set([s.AND, s.OR, s.NOT]),
      d = new Set([s.EQUALS, s.NOT_EQUALS]),
      m =
        ((e = {}),
        (e[s.CLOSING_PARENTHESIS] = function (e, t) {
          return !(c.has(t.value) || d.has(t.value));
        }),
        (e[s.GREATER_THAN] = function (e, t) {
          return t.type !== "number" || (e.isLiteral && t.isLiteral);
        }),
        (e[s.GREATER_THAN_OR_EQUALS] = function (e, t) {
          return t.type !== "number" || (e.isLiteral && t.isLiteral);
        }),
        (e[s.LESS_THAN] = function (e, t) {
          return t.type !== "number" || (e.isLiteral && t.isLiteral);
        }),
        (e[s.LESS_THAN_OR_EQUALS] = function (e, t) {
          return t.type !== "number" || (e.isLiteral && t.isLiteral);
        }),
        (e[s.AND] = function (e, t) {
          return (
            (t.type !== "boolean" &&
              t.value !== r("WAFlowsConditionalRenderingTypes").NOT) ||
            (e.isLiteral && t.isLiteral)
          );
        }),
        (e[s.OR] = function (e, t) {
          return (
            (t.type !== "boolean" &&
              t.value !== r("WAFlowsConditionalRenderingTypes").NOT) ||
            (e.isLiteral && t.isLiteral)
          );
        }),
        (e[s.NOT] = function (e, t) {
          return (
            t.type !== "boolean" &&
            t.value !==
              r("WAFlowsConditionalRenderingTypes").OPENING_PARENTHESIS
          );
        }),
        (e[s.OPENING_PARENTHESIS] = function (e, t) {
          return (
            !t.isOperand &&
            t.value !== r("WAFlowsConditionalRenderingTypes").NOT
          );
        }),
        e),
      p = new Set([s.EQUALS, s.NOT_EQUALS]);
    function _(e, t) {
      var n;
      if (e.length === 0) return { hasValidationFailed: !1 };
      var r = e[e.length - 1],
        a = f(r, t);
      if (a.hasValidationEnded === !0)
        return {
          hasValidationFailed: a.hasValidationFailed,
          previousOperand: a.previousOperand,
          errorMessage: a.errorMessage,
        };
      var i =
          (n = o(
            "WAFlowJSONConditionalRenderingOperandHelper",
          ).WAFlowJSONGetPreviousOperand(e)) != null
            ? n
            : r,
        l = g(i, r, t);
      return {
        hasValidationFailed: l.hasValidationFailed,
        previousOperand: l.previousOperand,
        errorMessage: l.errorMessage,
      };
    }
    function f(e, t) {
      switch (e.type) {
        case "boolean": {
          var n = !(c.has(t.value) || d.has(t.value));
          return {
            hasValidationFailed: n,
            hasValidationEnded: !0,
            previousOperand: e,
            errorMessage: n ? h(e, t) : void 0,
          };
        }
        case "number": {
          var r = !(u.has(t.value) || d.has(t.value));
          return {
            hasValidationFailed: r,
            hasValidationEnded: !0,
            previousOperand: e,
            errorMessage: r ? h(e, t) : void 0,
          };
        }
        case "string": {
          var o = !d.has(t.value);
          return {
            hasValidationFailed: o,
            hasValidationEnded: !0,
            previousOperand: e,
            errorMessage: o ? h(e, t) : void 0,
          };
        }
        default:
          return { hasValidationFailed: !1, hasValidationEnded: !1 };
      }
    }
    function g(e, t, n) {
      var r = m[t.value];
      if (r != null) {
        var a = r(e, n);
        return {
          hasValidationFailed: a,
          hasValidationEnded: !0,
          previousOperand: e,
          errorMessage: a ? h(t, n) : void 0,
        };
      }
      if (p.has(t.value)) {
        var i =
          !["string", "number", "boolean"].includes(n.type) ||
          e.type !== n.type ||
          (e.isLiteral && n.isLiteral);
        return {
          hasValidationFailed: i,
          hasValidationEnded: !0,
          previousOperand: e,
          errorMessage: i
            ? o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getConditionTypeMismatchInEqualtyErrorMsg(
                e.value,
                n.value,
              )
            : void 0,
        };
      }
      return {
        hasValidationFailed: !1,
        hasValidationEnded: !0,
        previousOperand: e,
      };
    }
    function h(e, t) {
      var n = t.isOperand ? "operand" : "operator";
      return o(
        "WAFlowJSONValidationError",
      ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getWrongPositioningGenericErrorMsg(
        n,
        e.value,
        t.value,
      );
    }
    l.WAFlowJSONIsValueCompatibleWithPrevious = _;
  },
  98,
);
