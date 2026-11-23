__d(
  "WAFlowJSONScreenDynamicDataValidatorV600",
  [
    "WAFlowJSONConstants",
    "WAFlowJSONScreenDynamicDataValidatorV500",
    "WAFlowJSONValidationError",
    "WATypeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.areConstValuesEqualOrError = function (t, n, r) {
          var e = t.const,
            a = n.const;
          return a === void 0 || a === e
            ? null
            : o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getPropSchemaConstMismatchErrorMsg(
                r,
                typeof a == "string" ? a : "",
              );
        }),
        (n.isValidPropertyValueType = function (t) {
          return (
            o("WATypeUtils").isString(t) ||
            (t != null && typeof t == "object" && !Array.isArray(t))
          );
        }),
        (n.shouldSkipDynamicBindingValidation = function (n, r) {
          return n ===
            o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_INIT_VALUES ||
            n === o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_ERROR_MESSAGES
            ? !0
            : e.prototype.shouldSkipDynamicBindingValidation.call(this, n, r);
        }),
        (n.getPropertySchemaArray = function (n, r, a, i) {
          if (i === o("WAFlowJSONConstants").WA_FLOW_JSON_ON_CLICK_ACTION) {
            var t,
              l,
              s =
                (t = (l = n.get(r)) == null ? void 0 : l.get(i)) != null
                  ? t
                  : [];
            if (s.length > 0) {
              var u = s[0],
                c = typeof u == "object" && u != null ? u.properties : void 0;
              if (c != null) {
                var d,
                  m = c[a];
                s =
                  typeof m == "object" && m != null
                    ? (d = m.oneOf) != null
                      ? d
                      : []
                    : [];
              }
            }
            return s;
          }
          return e.prototype.getPropertySchemaArray.call(this, n, r, a);
        }),
        t
      );
    })(r("WAFlowJSONScreenDynamicDataValidatorV500"));
    l.default = e;
  },
  98,
);
