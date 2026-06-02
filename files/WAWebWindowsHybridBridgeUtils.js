__d(
  "WAWebWindowsHybridBridgeUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null || e.length !== 6 || !/^\d{6}$/.test(e)) return e;
      var t = e.slice(0, 4),
        n = e.slice(-2),
        r = parseInt(t, 10),
        o = parseInt(n, 10);
      if (r < 2574 || r >= 2577) return e;
      var a = r - 2574,
        i = a * 10 + Math.floor(o / 10),
        l = 2574 + i,
        s = o % 10;
      return "" + l + String(s).padStart(2, "0");
    }
    i.getBetaHybridVersionForBridgeCut = e;
  },
  66,
);
