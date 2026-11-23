__d(
  "WAFlowJSONCompleteActionValidatorV500",
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
          var e,
            t = this,
            n = [],
            r = this.flowJSONData.dataChannelLessActionData,
            a =
              (e = r.get(
                o("WAFlowJSONConstants").WAFlowsActionType.COMPLETE,
              )) != null
                ? e
                : [];
          return (
            a.forEach(function (e) {
              var r = e.screenId;
              if (!t.flowJSONData.getTerminalScreens().has(r)) {
                var a = e.jsonDataPointer + "/name",
                  i = o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getCompleteActionOnlyOnTerminalScreenErrorMsg();
                n.push(
                  t.getError(
                    i,
                    a,
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                      .INVALID_COMPLETE_ACTION,
                  ),
                );
              }
            }),
            n
          );
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONCompleteActionValidatorV500 = e;
  },
  98,
);
