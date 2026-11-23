__d(
  "WAFlowJSONRoutingModelBackRouteValidatorV500",
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
          var e = [],
            t = this.flowJSONData.getRoutingModel(),
            n = new Set();
          for (var r of Object.entries(t))
            for (var a = r[0], i = r[1], l = 0; l < i.length; l++) {
              var s = i[l];
              if (!(!t[s] || (n.has(a) && n.has(s)) || a === s)) {
                var u = t[s].indexOf(a);
                if (u !== -1) {
                  var c = o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getBackRouteInRoutingModelErrorMsg(
                    a,
                    s,
                  );
                  (e.push(
                    this.getError(
                      c,
                      "/" +
                        o("WAFlowJSONConstants").WA_FLOW_JSON_ROUTING_MODEL +
                        "/" +
                        s +
                        "/" +
                        u,
                      o("WAFlowJSONValidationError")
                        .WA_FLOW_JSON_VALIDATION_ERROR_CODE
                        .INVALID_ROUTING_MODEL,
                    ),
                  ),
                    n.add(a),
                    n.add(s));
                }
              }
            }
          return e;
        }),
        t
      );
    })(o("WAFlowJSONRoutingModelValidator").WAFlowJSONRoutingModelValidator);
    l.WAFlowJSONRoutingModelBackRouteValidatorV500 = e;
  },
  98,
);
