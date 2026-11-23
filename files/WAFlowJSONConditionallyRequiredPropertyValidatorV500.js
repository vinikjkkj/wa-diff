__d(
  "WAFlowJSONConditionallyRequiredPropertyValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
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
            t = this.flowJSONData.dataChannelActionData.get(
              o("WAFlowJSONConstants").WAFlowsActionType.DATA_EXCHANGE,
            ),
            n = this.flowJSONData.flowJson.routing_model,
            r = this.flowJSONData.flowJSONPointers;
          if (
            this.flowJSONData.isDataChannelLessFlow() &&
            t != null &&
            t.length > 0
          ) {
            var a = [];
            t.forEach(function (e) {
              a.push(e.jsonDataPointer + "/name");
            });
            var i = a.reduce(function (e, t) {
              var n,
                o = (n = r.get(t)) == null ? void 0 : n.value;
              return (o != null && e.push(o), e);
            }, []);
            e.push(
              o("WAFlowJSONValidationResultUtil").getWAFlowJSONValidationError({
                code: o("WAFlowJSONValidationError")
                  .WA_FLOW_JSON_VALIDATION_ERROR_CODE.MISSING_REQUIRED_PROPERTY,
                message: o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMisingDataApiVersionForDataChannelErrorMsg(),
                pointers:
                  i != null
                    ? i
                    : o(
                        "WAFlowJSONValidationResultUtil",
                      ).getWAFlowJSONDefaultErrorPointer(),
              }),
            );
          }
          if (!this.flowJSONData.isDataChannelLessFlow() && n == null) {
            var l, s;
            e.push(
              o("WAFlowJSONValidationResultUtil").getWAFlowJSONValidationError({
                code: o("WAFlowJSONValidationError")
                  .WA_FLOW_JSON_VALIDATION_ERROR_CODE.MISSING_REQUIRED_PROPERTY,
                message: o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMisingRoutingModelForDataChannelErrorMsg(),
                pointers:
                  (l = (s = r.get("")) == null ? void 0 : s.value) != null
                    ? l
                    : o(
                        "WAFlowJSONValidationResultUtil",
                      ).getWAFlowJSONDefaultErrorPointer(),
              }),
            );
          }
          return e;
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONConditionallyRequiredPropertyValidatorV500 = e;
  },
  98,
);
