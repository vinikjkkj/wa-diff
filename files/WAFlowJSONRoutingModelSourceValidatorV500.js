__d(
  "WAFlowJSONRoutingModelSourceValidatorV500",
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
        (n.validateDataChannel = function () {
          var e = this,
            t = [],
            n = s(this.flowJSONData);
          if (n.missingScreenIds.length > 0) {
            var r = o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingScreenIdsErrorMsg(
                n.missingScreenIds,
              ),
              a = n.missingScreenIds.map(function (t) {
                return (
                  "/" +
                  o("WAFlowJSONConstants").WA_FLOW_JSON_SCREENS +
                  "/" +
                  e.flowJSONData.getScreenIndex(t) +
                  "/id"
                );
              });
            t.push(
              this.getError(
                r,
                a,
                o("WAFlowJSONValidationError")
                  .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_ROUTING_MODEL,
              ),
            );
          }
          return t;
        }),
        t
      );
    })(o("WAFlowJSONRoutingModelValidator").WAFlowJSONRoutingModelValidator);
    function s(e) {
      var t = e.getAllScreenIds(),
        n = Object.keys(e.getRoutingModel()),
        r = new Set(e.getTerminalScreens());
      for (var o of Object.entries(e.getRoutingModel())) {
        var a = o[0],
          i = o[1];
        (r.add(a),
          i.forEach(function (e) {
            return r.add(e);
          }));
      }
      return {
        missingScreenIds: t.filter(function (e) {
          return !r.has(e);
        }),
        missingRoutingModeSourceIds: n.filter(function (e) {
          return !t.includes(e);
        }),
      };
    }
    l.WAFlowJSONRoutingModelSourceValidatorV500 = e;
  },
  98,
);
