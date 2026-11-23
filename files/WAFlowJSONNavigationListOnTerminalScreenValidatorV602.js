__d(
  "WAFlowJSONNavigationListOnTerminalScreenValidatorV602",
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
            n = this.flowJSONData.getTerminalScreens(),
            r = [];
          return (
            n.forEach(function (t) {
              var n = e.flowJSONData.getComponentDataByType(
                t,
                o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE
                  .NAVIGATION_LIST,
              );
              if (n.length > 0) {
                var a = e.flowJSONData.getScreenIndex(t);
                r.push("/screens/" + a);
              }
            }),
            r.length > 0 &&
              t.push(
                this.getError(
                  o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyErrorMsg(
                    "terminal",
                  ),
                  r,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_KEY,
                ),
              ),
            t
          );
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONNavigationListOnTerminalScreenValidatorV602 = e;
  },
  98,
);
