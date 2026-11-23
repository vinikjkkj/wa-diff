__d(
  "WAFlowJSONRefreshOnBackValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONValidationError",
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
          var e = this,
            t = [],
            n = this.flowJSONData.getScreensWithRefreshOnBackTrue();
          if (this.flowJSONData.isDataChannelLessFlow() && n.length > 0) {
            var r = n.map(function (t) {
              return (
                "/" +
                o("WAFlowJSONConstants").WA_FLOW_JSON_SCREENS +
                "/" +
                e.flowJSONData.getScreenIndex(t) +
                "/" +
                o("WAFlowJSONConstants").WA_FLOW_JSON_REFRESH_ON_BACK
              );
            });
            t.push(
              this.getError(
                o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getRefreshOnBackForStaticFlowErrorMsg(),
                r,
                o("WAFlowJSONValidationError")
                  .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_VALUE,
              ),
            );
          }
          return t;
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONRefreshOnBackValidatorV500 = e;
  },
  98,
);
