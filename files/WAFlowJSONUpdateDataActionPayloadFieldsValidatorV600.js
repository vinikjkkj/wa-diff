__d(
  "WAFlowJSONUpdateDataActionPayloadFieldsValidatorV600",
  [
    "WAFlowJSONConstants",
    "WAFlowJSONNavigateActionPayloadFieldsValidatorV500",
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
              var r;
              ((r = n.actionValue) == null ? void 0 : r.payload) == null ||
                n.actionValue.name !==
                  o("WAFlowJSONConstants").WAFlowsActionType.UPDATE_DATA ||
                e.validatePayloadFieldsInScreenDataModel(n, t);
            }),
            t
          );
        }),
        (n.getScreenName = function (t) {
          return t.screenId;
        }),
        (n.createNoDataModelInGivenScreenError = function (t, n) {
          var e = o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getNoDataModelInGivenScreenErrorMsg(
            t,
          );
          return this.getError(
            e,
            n,
            o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
              .INVALID_UPDATE_DATA_ACTION_PAYLOAD,
          );
        }),
        (n.createMissingFieldsInGivenScreenError = function (t, n, r) {
          var e = o(
            "WAFlowJSONValidationError",
          ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingFieldsInGivenScreenErrorMsg(
            t,
            n,
          );
          return this.getError(
            e,
            r,
            o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE
              .INVALID_UPDATE_DATA_ACTION_PAYLOAD,
          );
        }),
        t
      );
    })(
      o("WAFlowJSONNavigateActionPayloadFieldsValidatorV500")
        .WAFlowJSONNavigateActionPayloadFieldsValidatorV500,
    );
    l.WAFlowJSONUpdateDataActionPayloadFieldsValidatorV600 = e;
  },
  98,
);
