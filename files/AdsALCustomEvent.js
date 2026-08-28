__d(
  "AdsALCustomEvent",
  ["AdsALChannel", "FBLogger", "hyperionAutoLogging"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set(),
      u = 100;
    function c(t, n, r) {
      var a;
      return (
        e || (e = o("hyperionAutoLogging"))
      ).ALCustomEvent.emitALCustomEvent(
        o("AdsALChannel").AdsALChannel,
        {},
        babelHelpers.extends({ eventName: t, annotations: n }, r, {
          relatedEventIndex:
            (a = r == null ? void 0 : r.relatedEventIndex) != null ? a : -1,
        }),
      );
    }
    function d(e, t, n) {
      var o = JSON.stringify({ eventName: e, annotations: t });
      if (!s.has(o)) {
        var a = c(e, t, n);
        return (
          s.add(o),
          s.size === u &&
            r("FBLogger")("ads").warn(
              "AdsALCustomEventLogger: logOnce dedup set reached %d entries",
              u,
            ),
          a
        );
      }
    }
    var m = { log: c, logOnce: d };
    l.AdsALCustomEventLogger = m;
  },
  98,
);
