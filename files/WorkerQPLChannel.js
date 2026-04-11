__d(
  "WorkerQPLChannel",
  ["WorkerFuncChannel", "performanceAbsoluteNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new (o("WorkerFuncChannel").WorkerFuncChannel)(function (t) {
        return {
          markerStartFromNavStart: null,
          markerStart: function (o, a, i) {
            return (
              i === void 0 && (i = (e || (e = r("performanceAbsoluteNow")))()),
              t.markerStart(o, a, i)
            );
          },
          markerAnnotate: function (n, r, o) {
            return t.markerAnnotate(n, r, o);
          },
          markerPoint: function (o, a, i) {
            var n =
              (i == null ? void 0 : i.timestamp) === void 0
                ? babelHelpers.extends({}, i, {
                    timestamp: (e || (e = r("performanceAbsoluteNow")))(),
                  })
                : i;
            return t.markerPoint(o, a, n);
          },
          markerEnd: function (o, a, i, l) {
            return (
              l === void 0 && (l = (e || (e = r("performanceAbsoluteNow")))()),
              t.markerEnd(o, a, i, l)
            );
          },
        };
      }, "qpl");
    function u(e) {
      s.setMessagePort(e);
    }
    function c(e) {
      s.setBackend(e);
    }
    ((l.setMessagePort = u), (l.initQPL = c));
  },
  98,
);
