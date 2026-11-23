__d(
  "WAFlowJSONValidatorChain",
  [
    "WAFlowJSONRuntimeSchema",
    "WAFlowJSONSchemaValidator",
    "WAFlowJSONValidationError",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        (n === void 0 && (n = null),
          (this.validators = []),
          (this.flowJSONData = e),
          (this.creationSource = n),
          (this.ajv = t));
      }
      var t = e.prototype;
      return (
        (t.validate = function (t, n, a, i) {
          i === void 0 && (i = !1);
          var e = new (o(
              "WAFlowJSONSchemaValidator",
            ).WAFlowJSONSchemaValidator)(this.ajv),
            l = r("WAFlowJSONRuntimeSchema")(n),
            s = e.validate(t, a, n, l, i);
          if (s.length > 0) return { isValid: !1, errors: s };
          this.flowJSONData.initData();
          try {
            return (
              (s = this.validators
                .map(function (e) {
                  return e.doValidate();
                })
                .flat()),
              { isValid: s.length === 0, errors: s }
            );
          } catch (e) {
            var u = r("getErrorSafe")(e);
            return o("WAFlowJSONValidationError").invalidFlowJSONError(
              u.message,
            );
          }
        }),
        e
      );
    })();
    l.WAFlowJSONValidatorChain = e;
  },
  98,
);
