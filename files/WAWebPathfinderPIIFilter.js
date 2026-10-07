__d(
  "WAWebPathfinderPIIFilter",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /(?:^|[^A-Za-z0-9])(true|false)_/,
      l = /(?:^|[^A-Za-z0-9])[0-9A-Fa-f]{8,}(?=$|[^A-Za-z0-9])/,
      s = /\d{6,}/,
      u = /[^\x20-\x7E]/,
      c = /^(?:data-testid|id)=[^@]+@[1-5]$/,
      d = /@[1-5]$/;
    function m(t, n) {
      n === void 0 && (n = !1);
      var r = n && c.test(t) ? t.replace(d, "") : t;
      return (
        r.includes("@") || u.test(r) || s.test(r) || l.test(r) || e.test(r)
      );
    }
    i.hasUnsafePathfinderTrackingId = m;
  },
  66,
);
