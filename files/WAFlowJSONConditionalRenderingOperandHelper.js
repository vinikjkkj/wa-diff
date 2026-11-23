__d(
  "WAFlowJSONConditionalRenderingOperandHelper",
  [
    "invariant",
    "WAFlowJSONConditionalRenderingTypeHelper",
    "WAFlowJSONSchemaUtils",
    "WAFlowJSONValidationError",
    "WAFlowsConditionalRenderingTypes",
    "WAFlowsDynamicDataUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, r, a) {
      var i,
        l,
        s = d(e, n, r, a);
      if (s.hasValidationFailed) {
        var c, m;
        return {
          hasValidationFailed: !0,
          value: s.value,
          errorMessage:
            (c = s.errorMessage) != null
              ? c
              : o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidOperandFormatErrorMsg(
                  (m = s.value) != null ? m : "",
                ),
          column: s.column,
        };
      }
      if (
        s.valueType == null ||
        !["boolean", "number", "string"].includes(s.valueType)
      ) {
        var p, _;
        return {
          hasValidationFailed: !0,
          errorMessage: o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getUnsupportedOperandTypeErrorMsg(
            (p = s.value) != null ? p : "",
            (_ = s.valueType) != null ? _ : "",
          ),
          column: -1,
        };
      }
      if (u(t)) {
        var f;
        return {
          hasValidationFailed: !0,
          errorMessage: o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingOperatorBetweenOperandsErrorMsg(
            t[t.length - 1].value,
            (f = s.value) != null ? f : "",
          ),
        };
      }
      var g = o(
        "WAFlowJSONConditionalRenderingTypeHelper",
      ).WAFlowJSONIsValueCompatibleWithPrevious(t, {
        value: (i = s.value) != null ? i : "",
        type: (l = s.valueType) != null ? l : "",
        isOperand: !0,
        isLiteral: !1,
      });
      return g.hasValidationFailed
        ? { hasValidationFailed: !0, errorMessage: g.errorMessage }
        : {
            hasValidationFailed: !1,
            value: s.value,
            valueType: s.valueType,
            endIndex: s.endIndex,
          };
    }
    function u(e) {
      return e.length > 0 && e[e.length - 1].isOperand;
    }
    function c(e) {
      var t,
        n = e.findLastIndex(function (e) {
          return (
            e.value ===
            r("WAFlowsConditionalRenderingTypes").CLOSING_PARENTHESIS
          );
        });
      if (n >= 0) {
        for (
          var o,
            a = 1,
            i = -1,
            l = !1,
            s = new Set([
              (o = r("WAFlowsConditionalRenderingTypes")).GREATER_THAN,
              o.GREATER_THAN_OR_EQUALS,
              o.LESS_THAN,
              o.LESS_THAN_OR_EQUALS,
              o.AND,
              o.OR,
              o.NOT,
              o.EQUALS,
              o.NOT_EQUALS,
            ]),
            u = n - 1;
          u >= 0;
          u--
        ) {
          var c = e[u];
          if (
            c.value ===
            r("WAFlowsConditionalRenderingTypes").CLOSING_PARENTHESIS
          )
            a++;
          else if (
            c.value ===
            r("WAFlowsConditionalRenderingTypes").OPENING_PARENTHESIS
          ) {
            if ((a--, a === 0)) {
              i = u;
              break;
            }
          } else s.has(c.value) && (l = !0);
        }
        if (l && i >= 0) {
          var d = e.slice(i + 1, n),
            m = d.map(function (e) {
              return e.value;
            });
          return {
            value: "(" + m.join(" ") + ")",
            type: "boolean",
            isOperand: !0,
            isLiteral: !1,
          };
        }
      }
      return (t = e.findLast(function (e) {
        return e.isOperand;
      })) != null
        ? t
        : null;
    }
    function d(e, t, n, o) {
      if (
        o + 1 >= n.length ||
        n.at(o + 1) !==
          r("WAFlowsConditionalRenderingTypes").OPENING_CURLY_BRACES
      )
        return { hasValidationFailed: !0 };
      var a = n.indexOf(
        r("WAFlowsConditionalRenderingTypes").CLOSING_CURLY_BRACES,
        o,
      );
      if (a === -1) return { hasValidationFailed: !0 };
      var i = n.substring(o, a + 1),
        l = m(e, t, i);
      return l.hasValidationFailed
        ? {
            errorMessage: l.errorMessage,
            hasValidationFailed: !0,
            value: i,
            column: l.column,
          }
        : {
            endIndex: a,
            hasValidationFailed: !1,
            value: i,
            valueType: l.valueType,
          };
    }
    function m(e, t, n) {
      if (
        !new RegExp(
          o("WAFlowJSONSchemaUtils")
            .WA_FLOW_JSON_SCHEMA_DYNAMIC_DATA_PATTERN_V400,
        ).test(n)
      )
        return { hasValidationFailed: !0 };
      var r = o("WAFlowsDynamicDataUtils").isLocalBindingValue(n)
          ? [t].concat(o("WAFlowsDynamicDataUtils").getBindingKeyArray(n))
          : o("WAFlowsDynamicDataUtils").getBindingKeyArray(n),
        a = p(e, r);
      if (a.length === 0) {
        var i =
          r[0] === t
            ? o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingDynamicDataErrorMsg(
                r[2],
                t,
              )
            : o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingGlobalDynamicDataErrorMsg(
                r[2],
                r[0],
                t,
              );
        return { hasValidationFailed: !0, errorMessage: i, column: -1 };
      }
      return { hasValidationFailed: !1, valueType: a[1] };
    }
    function p(e, t) {
      if (!e.has(t[0])) return [];
      var n = e.get(t[0]);
      if ((n != null || s(0, 82016), !n.has(t[1]))) return [];
      var r = n.get(t[1]);
      r != null || s(0, 82015);
      var o = r.get(t[2]);
      return o != null && typeof o == "string" ? [t[2], o] : [];
    }
    ((l.WAFlowJSONValidateIfCompOperand = e),
      (l.isPreviousElementOperand = u),
      (l.WAFlowJSONGetPreviousOperand = c));
  },
  98,
);
