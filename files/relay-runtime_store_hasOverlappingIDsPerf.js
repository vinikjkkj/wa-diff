__d(
  "relay-runtime/store/hasOverlappingIDsPerf",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = e,
        r = t;
      t.size < e.size && ((n = t), (r = e));
      for (var o = n.values(); ; ) {
        var a = o.next();
        if (a.done === !0) break;
        if (r.has(a.value)) return !0;
      }
      return !1;
    }
    a.exports = e;
  },
  null,
);
