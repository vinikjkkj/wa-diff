__d(
  "WABackoffUtils",
  ["WAPromiseDelays"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      r === void 0 && (r = 0.1);
      var o;
      return (
        e === 0 ? (o = n || 0) : (o = Math.pow(2, e)),
        Number.isFinite(t) && o > t && (o = t),
        typeof n == "number" && Number.isFinite(n) && o < n && (o = n),
        r && (o *= 1 + r * Math.random()),
        o
      );
    }
    function s(t, n, r, a) {
      return (
        a === void 0 && (a = 0.1),
        o("WAPromiseDelays").delayMs(Math.floor(1e3 * e(t, n, r, a)))
      );
    }
    ((l.expBackoff = e), (l.expDelaySec = s));
  },
  98,
);
