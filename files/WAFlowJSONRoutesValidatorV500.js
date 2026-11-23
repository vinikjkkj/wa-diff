__d(
  "WAFlowJSONRoutesValidatorV500",
  ["WAFlowJSONRoutingModelValidator", "WAFlowJSONValidationError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validateDataChannel = function () {
          var e = [],
            t = this.flowJSONData.incomingScreensMap,
            n = this.flowJSONData.generatedRoutingModel;
          for (var r of n) {
            var a = r[0],
              i = r[1],
              l = this.skipValidation(a, this.flowJSONData);
            if (!l)
              for (var s of i) {
                var u;
                if (!((u = t.get(a)) != null && u.has(s))) {
                  var c = o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getRouteMissingInRoutingModelErrorMsg(
                    a,
                    s,
                  );
                  e.push(
                    this.getError(
                      c,
                      [
                        this.flowJSONData.getScreenPointer(a) + "/id",
                        this.flowJSONData.getScreenPointer(s) + "/id",
                      ],
                      o("WAFlowJSONValidationError")
                        .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                        .INVALID_ROUTING_MODEL,
                    ),
                  );
                }
              }
          }
          return e;
        }),
        (n.validateDataChannelLess = function () {
          return [];
        }),
        (n.skipValidation = function (t, n) {
          return !1;
        }),
        t
      );
    })(o("WAFlowJSONRoutingModelValidator").WAFlowJSONRoutingModelValidator);
    l.WAFlowJSONRoutesValidatorV500 = e;
  },
  98,
);
