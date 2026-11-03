__d(
  "WAWebGroupHistoryDeflatedBytesBucket",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1024,
      l = 2;
    function s(t) {
      if (t <= 0) return 0;
      if (t <= e) return e;
      var n = Math.floor(t),
        r = String(n).length,
        o = Math.pow(10, Math.max(r - l, 0));
      return Math.min(Math.ceil(n / o) * o, Number.MAX_SAFE_INTEGER);
    }
    i.bucketGroupHistoryDeflatedBytes = s;
  },
  66,
);
