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
      d = /@[1-5]$/,
      m = /(?:^|[^A-Za-z0-9])msg-/,
      p = /[A-Za-z0-9]+/g,
      _ = /[0-9]/,
      f = /[a-z]/,
      g = "<msgid>",
      h = 8,
      y = 16;
    function C(t, n) {
      n === void 0 && (n = !1);
      var r = n && c.test(t) ? t.replace(d, "") : t;
      return (
        r.includes("@") || u.test(r) || s.test(r) || l.test(r) || e.test(r)
      );
    }
    function b(e) {
      return e.includes("msg-") ? e.split("/").map(v).join("/") : e;
    }
    function v(e) {
      return m.test(e)
        ? e.replace(p, function (e) {
            return S(e) ? g : e;
          })
        : e;
    }
    function S(e) {
      return e.length < h ? !1 : _.test(e) || (e.length >= y && !f.test(e));
    }
    ((i.hasUnsafePathfinderTrackingId = C), (i.maskPathfinderMessageIds = b));
  },
  66,
);
