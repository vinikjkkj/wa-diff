__d(
  "WAFlowJSONTextInputPatternFieldValidatorV602",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONValidationError",
    "WAFlowsTypes",
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
            n = this.flowJSONData.flowJson.screens.flatMap(function (t) {
              var n = e.flowJSONData.getComponentDataByType(
                t.id,
                o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.TEXT_INPUT,
              );
              return n
                .filter(function (e) {
                  var t = e.component;
                  return t.type !==
                    o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.TEXT_INPUT
                    ? !1
                    : Object.prototype.hasOwnProperty.call(
                        t,
                        o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_PATTERN,
                      ) &&
                        (!Object.prototype.hasOwnProperty.call(
                          t,
                          o("WAFlowJSONConstants")
                            .WA_FLOW_JSON_SCHEMA_HELPER_TEXT,
                        ) ||
                          t[
                            o("WAFlowJSONConstants")
                              .WA_FLOW_JSON_SCHEMA_HELPER_TEXT
                          ] === void 0);
                })
                .map(function (e) {
                  return e.jsonPointer;
                });
            });
          return (
            n.length > 0 &&
              t.push(
                this.getError(
                  o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingPropertyErrorMsg(
                    o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_HELPER_TEXT,
                  ),
                  n,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                    .MISSING_REQUIRED_PROPERTY,
                ),
              ),
            t
          );
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONTextInputPatternFieldValidatorV602 = e;
  },
  98,
);
