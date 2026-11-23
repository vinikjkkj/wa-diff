__d(
  "WAFlowJSONSuccessOnTerminalScreenValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
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
        (n.validate = function () {
          for (
            var e = [],
              t = this.flowJSONData.flowJson.screens,
              n = !1,
              r = [],
              a = 0;
            a < t.length;
            a++
          ) {
            var i,
              l = t[a];
            if (l.terminal !== !1) {
              var s = (i = l.success) != null ? i : !0;
              if (s === !0) {
                n = !0;
                break;
              }
              r.push("/screens/" + a + "/success");
            }
          }
          if (!n) {
            var u = this.flowJSONData.flowJSONPointers,
              c = r.reduce(function (e, t) {
                var n,
                  r = (n = u.get(t)) == null ? void 0 : n.value;
                return (r != null && e.push(r), e);
              }, []);
            e.push(
              o("WAFlowJSONValidationResultUtil").getWAFlowJSONValidationError({
                code: o("WAFlowJSONValidationError")
                  .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_VALUE,
                message: o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getSuccessOnTerminalScreenErrorMsg(),
                pointers: c,
              }),
            );
          }
          return e;
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONSuccessOnTerminalScreenValidatorV500 = e;
  },
  98,
);
