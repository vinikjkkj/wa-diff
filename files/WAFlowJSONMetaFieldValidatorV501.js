__d(
  "WAFlowJSONMetaFieldValidatorV501",
  ["WAFlowJSONBaseValidator", "WAFlowJSONValidationError"],
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
            t = this.flowJSONData.flowJson.meta;
          if (t != null && this.creationSource !== "GEN_AI_LEAD_GEN") {
            var n = [];
            (n.push("/meta"),
              e.push(
                this.getError(
                  o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyErrorMsg(
                    "meta",
                  ),
                  n,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_FLOW_JSON,
                ),
              ));
          }
          return e;
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONMetaFieldValidatorV501 = e;
  },
  98,
);
