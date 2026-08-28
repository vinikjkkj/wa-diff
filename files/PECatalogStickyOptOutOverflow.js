__d(
  "PECatalogStickyOptOutOverflow",
  ["PECatalogStickyOptOutKeys"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3;
    function s(e) {
      return e.has(o("PECatalogStickyOptOutKeys").OVERFLOW_SENTINEL);
    }
    function u(t, n) {
      var r = new Set();
      for (var a of t.keys())
        a !== o("PECatalogStickyOptOutKeys").OVERFLOW_SENTINEL && r.add(a);
      for (var i of n)
        i !== o("PECatalogStickyOptOutKeys").OVERFLOW_SENTINEL && r.add(i);
      return r.size > e;
    }
    ((l.MAX_STICKY_ENTRIES = e), (l.isLatched = s), (l.wouldOverflow = u));
  },
  98,
);
