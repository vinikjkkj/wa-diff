__d(
  "WAFlowJSONFormComponentNamesValidatorV500",
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
            n = this.flowJSONData.flowJson.screens;
          return (
            n.forEach(function (n) {
              var r,
                a =
                  (r = e.flowJSONData.componentNameDataMap.get(n.id)) != null
                    ? r
                    : new Map();
              a.forEach(function (n, r) {
                var a = n.filter(function (e) {
                  return (
                    e.component.type !==
                    o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FORM
                  );
                });
                if (a.length > 1) {
                  var i = o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getDuplicateFormComponentNamesErrorMsg(
                      r,
                    ),
                    l = a.map(function (e) {
                      return e.jsonPointer + "/name";
                    });
                  t.push(
                    e.getError(
                      i,
                      l,
                      o("WAFlowJSONValidationError")
                        .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                        .DUPLICATE_FORM_COMPONENT_NAMES,
                    ),
                  );
                }
              });
            }),
            t
          );
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONFormComponentNamesValidatorV500 = e;
  },
  98,
);
