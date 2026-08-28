__d(
  "TimeSliceInteractionReliability",
  ["ifRequired"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "timeslice_interactions",
      s = !0,
      u = new Map();
    function c(e, t, n) {
      return t + ":" + n + ":" + e;
    }
    function d(t, n, o) {
      var a = c(t, n, o),
        i = r("ifRequired")("ODS", function (e) {
          return e;
        });
      if (i)
        (s &&
          (u.forEach(function (t, n) {
            return i.bumpEntityKey(2966, e, n, t);
          }),
          (s = !1)),
          i.bumpEntityKey(2966, e, a, 1));
      else {
        var l = u.get(a) || 0;
        u.set(a, l + 1);
      }
    }
    l.bumpLifecycleCounter = d;
  },
  98,
);
