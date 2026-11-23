__d(
  "WAFlowJSONSwitchValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONValidationError",
    "unsafeCast",
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
            n = [];
          return (
            this.flowJSONData.flowJson.screens.forEach(function (t) {
              var a,
                i =
                  (a = e.flowJSONData.getComponentDataByType(
                    t.id,
                    o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.SWITCH,
                  )) != null
                    ? a
                    : [];
              i.forEach(function (e) {
                var t = r("unsafeCast")(e.component);
                Object.entries(t.cases).length === 0 &&
                  n.push(e.jsonPointer + "/cases");
              });
            }),
            n.length > 0 &&
              t.push(
                this.getError(
                  o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getEmptySwitchCasesErrorMsg(),
                  n,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_VALUE,
                ),
              ),
            t
          );
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONSwitchValidatorV500 = e;
  },
  98,
);
