__d(
  "AdsRelayReadInteropLogHostID",
  ["AdsQPLEvent", "justknobx", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (r("justknobx")._("1562")) {
        var n = r("justknobx")._("1586") ? document.location.href : null,
          a = o("AdsQPLEvent")
            .event(r("qpl")._(41485875, "963"))
            .startFromTime();
        (a.annotate({ string: { hostID: e, source: t, url: n } }), a.stop());
      }
    }
    l.maybeLogHostID = e;
  },
  98,
);
