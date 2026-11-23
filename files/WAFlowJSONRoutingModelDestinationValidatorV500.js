__d(
  "WAFlowJSONRoutingModelDestinationValidatorV500",
  [
    "WAFlowJSONConstants",
    "WAFlowJSONRoutingModelValidator",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 10,
      s = (function (t) {
        function n() {
          for (var n, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
            o[a] = arguments[a];
          return (
            (n = t.call.apply(t, [this].concat(o)) || this),
            (n.maxBranches = e),
            babelHelpers.assertThisInitialized(n) ||
              babelHelpers.assertThisInitialized(n)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.validateDataChannel = function () {
            var e = [],
              t = this.flowJSONData.getRoutingModel(),
              n = this.flowJSONData.getAllScreenIds(),
              r = new Set(),
              a = new Set(),
              i = [],
              l = [];
            for (var s of Object.entries(t)) {
              var u = s[0],
                c = s[1],
                d =
                  "/" +
                  o("WAFlowJSONConstants").WA_FLOW_JSON_ROUTING_MODEL +
                  "/" +
                  u;
              (n.includes(u) ||
                (i.push(u),
                l.push.apply(
                  l,
                  o("WAFlowJSONValidationResultUtil").getKeyPointers(d),
                )),
                c.length > this.maxBranches && r.add(u));
              for (var m = 0; m < c.length; m++) {
                var p = c[m],
                  _ = d + "/" + m;
                (p === u && a.add(u),
                  n.includes(p) ||
                    (i.push(p),
                    l.push.apply(
                      l,
                      o("WAFlowJSONValidationResultUtil").getValuePointers(_),
                    )));
              }
            }
            if (((i = Array.from(new Set(i))), r.size > 0)) {
              var f = Array.from(r),
                g = o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMaxBranchLimitInRoutingModelErrorMsg(
                  f,
                  this.maxBranches,
                ),
                h = f
                  .map(function (e) {
                    return o("WAFlowJSONValidationResultUtil").getKeyPointers(
                      "/" +
                        o("WAFlowJSONConstants").WA_FLOW_JSON_ROUTING_MODEL +
                        "/" +
                        e,
                    );
                  })
                  .flat();
              e.push(
                this.getError(
                  g,
                  h,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_ROUTING_MODEL,
                ),
              );
            }
            if (a.size > 0) {
              var y = Array.from(a),
                C = o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getLoopsInRoutingModelErrorMsg(
                  y,
                ),
                b = y
                  .map(function (e) {
                    return o("WAFlowJSONValidationResultUtil").getKeyPointers(
                      "/" +
                        o("WAFlowJSONConstants").WA_FLOW_JSON_ROUTING_MODEL +
                        "/" +
                        e,
                    );
                  })
                  .flat();
              e.push(
                this.getError(
                  C,
                  b,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_ROUTING_MODEL,
                ),
              );
            }
            if (i.length > 0) {
              var v = o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidScreensInRoutingModelErrorMsg(
                i,
              );
              e.push(
                this.getError(
                  v,
                  l,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_ROUTING_MODEL,
                ),
              );
            }
            return e;
          }),
          (r.validateDataChannelLess = function () {
            var e = this,
              t = [],
              n = this.flowJSONData.generatedRoutingModel,
              r = this.flowJSONData.screenData,
              a = new Set(),
              i = new Set();
            if (
              (n.forEach(function (t, n) {
                if (t.length > e.maxBranches && (a.add(n), r.has(n))) {
                  var l,
                    s,
                    u =
                      (l = (s = r.get(n)) == null ? void 0 : s.index) != null
                        ? l
                        : 0;
                  i.add(
                    "/" +
                      o("WAFlowJSONConstants").WA_FLOW_JSON_SCREENS +
                      "/" +
                      u,
                  );
                }
              }),
              a.size > 0)
            ) {
              var l = Array.from(a),
                s = o(
                  "WAFlowJSONValidationError",
                ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getDataChannelLessMaxBranchLimitInRoutingModelErrorMsg(
                  l,
                  this.maxBranches,
                );
              t.push(
                this.getError(
                  s,
                  o("WAFlowJSONValidationResultUtil").getValuePointers(
                    Array.from(i),
                  ),
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_ROUTING_MODEL,
                ),
              );
            }
            return t;
          }),
          (r.setMaxBranches = function (t) {
            this.maxBranches = t;
          }),
          n
        );
      })(o("WAFlowJSONRoutingModelValidator").WAFlowJSONRoutingModelValidator);
    l.WAFlowJSONRoutingModelDestinationValidatorV500 = s;
  },
  98,
);
