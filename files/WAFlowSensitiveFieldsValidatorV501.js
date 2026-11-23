__d(
  "WAFlowSensitiveFieldsValidatorV501",
  ["WAFlowJSONBaseValidator", "WAFlowJSONValidationError"],
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
            var e = this,
              t = [],
              n = this.flowJSONData.flowJson.screens,
              r = function (a) {
                var r,
                  i,
                  l,
                  s = n[a],
                  u = (r = s.sensitive) != null ? r : [];
                if (u.length === 0) return 1;
                var c = Array.from(
                    (i =
                      (l = e.flowJSONData.componentNameDataMap.get(s.id)) ==
                      null
                        ? void 0
                        : l.keys()) != null
                      ? i
                      : [],
                  ),
                  d = [],
                  m = [];
                (u.forEach(function (e, t) {
                  c.includes(e) ||
                    (m.push("/screens/" + a + "/sensitive/" + t), d.push(e));
                }),
                  m.length > 0 &&
                    t.push(
                      e.getError(
                        o(
                          "WAFlowJSONValidationError",
                        ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidSensitiveFieldErrorMsg(
                          s.id,
                          d,
                        ),
                        m,
                        o("WAFlowJSONValidationError")
                          .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                          .INVALID_SENSITIVE_FIELD,
                      ),
                    ));
              },
              a = 0;
            a < n.length;
            a++
          )
            r(a);
          return t;
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONSensitiveFieldsValidatorV501 = e;
  },
  98,
);
