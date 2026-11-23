__d(
  "WAFlowJSONOnSelectActionExclusiveValidatorV600",
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
          var e = [],
            t = this.flowJSONData.getAllActions(),
            n = [],
            r = [];
          return (
            t.forEach(function (e) {
              var t = e.component,
                a = e.isFromDataSource,
                i = e.jsonDataPointer;
              if (a) {
                var l = i.split("/").pop();
                (l === o("WAFlowJSONConstants").WA_FLOW_JSON_ON_SELECT_ACTION &&
                  Object.prototype.hasOwnProperty.call(
                    t,
                    o("WAFlowJSONConstants").WA_FLOW_JSON_ON_SELECT_ACTION,
                  ) &&
                  n.push(i),
                  l ===
                    o("WAFlowJSONConstants").WA_FLOW_JSON_ON_UNSELECT_ACTION &&
                    Object.prototype.hasOwnProperty.call(
                      t,
                      o("WAFlowJSONConstants").WA_FLOW_JSON_ON_UNSELECT_ACTION,
                    ) &&
                    r.push(i));
              }
            }),
            n.length > 0 &&
              e.push(
                this.getError(
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE
                    .INVALID_ON_SELECT_ACTION_PATH,
                  n,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                    .INVALID_UPDATE_DATA_ACTION_PAYLOAD,
                ),
              ),
            r.length > 0 &&
              e.push(
                this.getError(
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE
                    .INVALID_ON_UNSELECT_ACTION_PATH,
                  r,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                    .INVALID_UPDATE_DATA_ACTION_PAYLOAD,
                ),
              ),
            e
          );
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONOnSelectActionExclusiveValidatorV600 = e;
  },
  98,
);
