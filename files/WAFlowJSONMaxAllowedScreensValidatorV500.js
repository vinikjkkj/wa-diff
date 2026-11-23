__d(
  "WAFlowJSONMaxAllowedScreensValidatorV500",
  ["WAFlowJSONBaseValidator", "WAFlowJSONValidationError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100,
      s = (function (t) {
        function n() {
          for (var n, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          return (
            (n = t.call.apply(t, [this].concat(o)) || this),
            (n.maxAllowedScreens = e),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.validate = function () {
            var e = [],
              t = this.flowJSONData.flowJson.screens;
            if (t.length > this.maxAllowedScreens) {
              for (var n = [], r = this.maxAllowedScreens; r < t.length; r++)
                n.push("/screens/" + r);
              e.push(
                this.getError(
                  o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMaxScreensPerFlowErrorMsg(
                    this.maxAllowedScreens,
                    t.length,
                  ),
                  n,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.MAX_SCREENS_NUMBER,
                ),
              );
            }
            return e;
          }),
          (r.setMaxAllowedScreensPerFlow = function (t) {
            this.maxAllowedScreens = t;
          }),
          n
        );
      })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONMaxAllowedScreensValidatorV500 = s;
  },
  98,
);
