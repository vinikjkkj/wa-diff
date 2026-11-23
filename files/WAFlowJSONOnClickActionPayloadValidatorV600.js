__d(
  "WAFlowJSONOnClickActionPayloadValidatorV600",
  ["WAFlowJSONConstants", "WAFlowJSONOnClickActionPayloadValidatorV500"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getTargetedActions = function () {
          var e;
          return [
            (e = o("WAFlowJSONConstants")).WAFlowsActionType.NAVIGATE,
            e.WAFlowsActionType.COMPLETE,
            e.WAFlowsActionType.DATA_EXCHANGE,
            e.WAFlowsActionType.UPDATE_DATA,
          ];
        }),
        t
      );
    })(
      o("WAFlowJSONOnClickActionPayloadValidatorV500")
        .WAFlowJSONOnClickActionPayloadValidatorV500,
    );
    l.WAFlowJSONOnClickActionPayloadValidatorV600 = e;
  },
  98,
);
