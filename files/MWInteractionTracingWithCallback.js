__d(
  "MWInteractionTracingWithCallback",
  ["getErrorSafe", "performance", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u(t, n, o, a) {
      var i = (e || (e = r("performanceNow")))();
      try {
        var l,
          u = await o();
        return (
          a({
            annotations: c(
              {
                group:
                  (l = n == null ? void 0 : n.group) != null
                    ? l
                    : "<uncategorized>",
                success: !0,
              },
              n == null ? void 0 : n.annotations,
            ),
            endTime: (e || (e = r("performanceNow")))(),
            isError: !1,
            kind: "AppTiming",
            name: t,
            startTime: i,
            timeOrigin: (s || (s = r("performance"))).timeOrigin,
          }),
          u
        );
      } catch (o) {
        var d;
        throw (
          a({
            annotations: c(
              {
                error: r("getErrorSafe")(o).message,
                group:
                  (d = n == null ? void 0 : n.group) != null
                    ? d
                    : "<uncategorized>",
                success: !1,
              },
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
    }
    function c(e, t) {
      return babelHelpers.extends({}, t, e);
    }
    l.default = u;
  },
  98,
);
