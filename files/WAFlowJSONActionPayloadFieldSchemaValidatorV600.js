__d(
  "WAFlowJSONActionPayloadFieldSchemaValidatorV600",
  [
    "WAFlowJSONActionPayloadFieldSchemaValidatorV500",
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
            t = [];
          return (
            this.flowJSONData.getAllActions().forEach(function (n) {
              (n.actionValue.name ===
                o("WAFlowJSONConstants").WAFlowsActionType.UPDATE_DATA ||
                n.actionValue.name ===
                  o("WAFlowJSONConstants").WAFlowsActionType.NAVIGATE) &&
                e.validateAction(n, t);
            }),
            t
          );
        }),
        (n.createError = function (t, n, r) {
          var e =
            t.actionValue.name === "navigate"
              ? o("WAFlowJSONValidationError")
                  .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                  .INVALID_NAVIGATE_ACTION_PAYLOAD
              : o("WAFlowJSONValidationError")
                  .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                  .INVALID_UPDATE_DATA_ACTION_PAYLOAD;
          return this.getError(n, r, e);
        }),
        (n.getScreenName = function (t) {
          if (t.actionValue.name === "navigate") {
            var e;
            return (
              ((e = t.actionValue) == null || (e = e.next) == null
                ? void 0
                : e.name) || ""
            );
          } else return t.screenId;
        }),
        t
      );
    })(
      o("WAFlowJSONActionPayloadFieldSchemaValidatorV500")
        .WAFlowJSONActionPayloadFieldSchemaValidatorV500,
    );
    l.WAFlowJSONActionPayloadFieldSchemaValidatorV600 = e;
  },
  98,
);
