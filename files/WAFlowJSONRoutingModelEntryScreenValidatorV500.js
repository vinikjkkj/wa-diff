__d(
  "WAFlowJSONRoutingModelEntryScreenValidatorV500",
  [
    "WAFlowJSONConstants",
    "WAFlowJSONRoutingModelValidator",
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
        (n.getEntryScreenIds = function () {
          return this.flowJSONData.getEntryScreenIds();
        }),
        (n.validateDataChannel = function () {
          var e = [],
            t = this.getEntryScreenIds();
          if (t.length === 0) {
            var n = o(
              "WAFlowJSONValidationError",
            ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getNoEntryScreenInRoutingModelErrorMsg();
            e.push(
              this.getError(
                n,
                "/" + o("WAFlowJSONConstants").WA_FLOW_JSON_ROUTING_MODEL,
                o("WAFlowJSONValidationError")
                  .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_ROUTING_MODEL,
              ),
            );
          }
          return e;
        }),
        (n.validateDataChannelLess = function () {
          var e = [],
            t = this.flowJSONData.getEntryScreensFromGeneratedRouting();
          if (t.length === 0) {
            var n = o(
              "WAFlowJSONValidationError",
            ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getDataChannelLessNoEntryScreenInRoutingModelErrorMsg();
            e.push(
              this.getError(
                n,
                "/" + o("WAFlowJSONConstants").WA_FLOW_JSON_SCREENS,
                o("WAFlowJSONValidationError")
                  .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_ROUTING_MODEL,
              ),
            );
          }
          return e;
        }),
        t
      );
    })(o("WAFlowJSONRoutingModelValidator").WAFlowJSONRoutingModelValidator);
    l.WAFlowJSONRoutingModelEntryScreenValidatorV500 = e;
  },
  98,
);
