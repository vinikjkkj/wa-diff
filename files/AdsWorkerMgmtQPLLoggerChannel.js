__d(
  "AdsWorkerMgmtQPLLoggerChannel",
  [
    "AdsWorkerBatchedFuncChannel",
    "WorkerFuncChannel",
    "performanceAbsoluteNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 0,
      u = "AdsMgmtQPL",
      c = function () {
        return new (o(
          "AdsWorkerBatchedFuncChannel",
        ).AdsWorkerBatchedFuncChannel)(
          function (t) {
            return {
              markerStartFromNavStart: null,
              markerStart: function (o, a, i, l) {
                return (
                  a === void 0 &&
                    (a = (e || (e = r("performanceAbsoluteNow")))()),
                  l === void 0 && (l = !1),
                  t.markerStart(o, a, i, l)
                );
              },
              markerAnnotate: null,
              addPoint: function (o, a, i, l, u) {
                return (
                  i === void 0 &&
                    (i = (e || (e = r("performanceAbsoluteNow")))()),
                  l === void 0 && (l = s),
                  t.addPoint(o, a, i, l, u)
                );
              },
              markerEnd: function (o, a, i, l) {
                return (
                  i === void 0 &&
                    (i = (e || (e = r("performanceAbsoluteNow")))()),
                  t.markerEnd(o, a, i, l)
                );
              },
              onMarkerEnd: null,
              isMarkerActive: null,
            };
          },
          u,
          { callBatcher: { timeout: 50, size: 50 } },
        );
      },
      d = c();
    function m(e) {
      o("WorkerFuncChannel").importChannelOnPort(d, e);
    }
    function p(e, t) {
      (d == null || d.setMessagePort(t).setBackend(e),
        o("WorkerFuncChannel").exportChannelOnPort(u, c, e, t));
    }
    function _() {
      return d.proxyMethods;
    }
    ((l.importQPLChannel = m),
      (l.exportQPLChannel = p),
      (l.AdsWorkerMgmtQPLLoggerChannel = _));
  },
  98,
);
