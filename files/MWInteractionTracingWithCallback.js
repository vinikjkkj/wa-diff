__d(
  "MWInteractionTracingWithCallback",
  ["asyncToGeneratorRuntime", "getErrorSafe", "performance", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, o, a) {
            var i = (e || (e = r("performanceNow")))();
            try {
              var l = yield o();
              return (
                a({
                  annotations: d(
                    { success: !0 },
                    n == null ? void 0 : n.annotations,
                  ),
                  endTime: (e || (e = r("performanceNow")))(),
                  isError: !1,
                  kind: "AppTiming",
                  name: t,
                  startTime: i,
                  timeOrigin: (s || (s = r("performance"))).timeOrigin,
                }),
                l
              );
            } catch (o) {
              throw (
                a({
                  annotations: d(
                    { error: r("getErrorSafe")(o).message, success: !1 },
                    n == null ? void 0 : n.annotations,
                  ),
                  endTime: (e || (e = r("performanceNow")))(),
                  isError: !0,
                  kind: "AppTiming",
                  name: t + "_error",
                  startTime: i,
                  timeOrigin: (s || (s = r("performance"))).timeOrigin,
                }),
                o
              );
            }
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return babelHelpers.extends({}, t, e);
    }
    l.default = u;
  },
  98,
);
