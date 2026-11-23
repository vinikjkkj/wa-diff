__d(
  "WAFlowJSONRoutingModelPathValidatorV500",
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
          if (n.length > 0) {
            var r = n.map(function (t) {
                return e.flowJSONData.getScreenPointer(t) + "/id";
              }),
              a = o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getDisconnectedScreensInRoutingModelErrorMsg(
                n,
              );
            t.push(
              this.getError(
                a,
                r,
                o("WAFlowJSONValidationError")
                  .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_ROUTING_MODEL,
              ),
            );
          }
          return t;
        }),
        (n.validateDataChannelLess = function () {
          var e = this,
            t,
            n = [],
            r = this.flowJSONData.screenData;
          if (r.size < 2) return n;
          var a = s(this.flowJSONData),
            i = Array.from(r.keys()).filter(function (t) {
              return !e.flowJSONData.generatedRoutingModelScreens.has(t);
            });
          if (
            ((t = a).push.apply(t, i),
            (a = Array.from(new Set(a))),
            a.length > 0)
          ) {
            var l = o(
                "WAFlowJSONValidationError",
              ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getDCLessDisconnectedScreensInRoutingModelErrorMsg(
                a,
              ),
              u = a.map(function (t) {
                return (
                  "/" +
                  o("WAFlowJSONConstants").WA_FLOW_JSON_SCREENS +
                  "/" +
                  e.flowJSONData.getScreenIndex(t) +
                  "/id"
                );
              });
            n.push(
              this.getError(
                l,
                u,
                o("WAFlowJSONValidationError")
                  .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_ROUTING_MODEL,
              ),
            );
          }
          return n;
        }),
        t
      );
    })(o("WAFlowJSONRoutingModelValidator").WAFlowJSONRoutingModelValidator);
    function s(e) {
      var t = e.incomingScreensMap,
        n = e.screenData,
        r = [],
        o = Array.from(n.keys())[0],
        a = new Set([o]);
      for (r.push(o); r.length > 0; ) {
        var i = r.shift();
        if (i != null) {
          var l = t.get(i);
          if (l != null) for (var s of l) a.has(s) || (a.add(s), r.push(s));
        }
      }
      var u = e.getAllScreenIds();
      return u.filter(function (e) {
        return !a.has(e);
      });
    }
    l.WAFlowJSONRoutingModelPathValidatorV500 = e;
  },
  98,
);
