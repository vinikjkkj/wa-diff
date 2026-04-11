__d(
  "videoUrlUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = -2147483648,
      l = ~e,
      s = e + 1;
    function u(e) {
      var t = e | 0;
      return Math.max(s, Math.min(t, l));
    }
    function c(e) {
      var t = Number.parseInt(e, 16);
      return Number.isFinite(t) ? new Date(u(t) * 1e3) : null;
    }
    function d() {
      return u(Date.now() / 1e3);
    }
    var m = { OE: "oe" };
    function p(e) {
      var t = e instanceof URL ? e.searchParams : new URL(e).searchParams,
        n = t.get(m.OE),
        r = n == null ? void 0 : c(n);
      return { expirationDate: r };
    }
    function _(e) {
      var t = p(e),
        n = t.expirationDate;
      return n != null && n <= new Date(d() * 1e3);
    }
    ((i.DEFAULT_UNIXTIME = e),
      (i.MAX_INT = l),
      (i.parseCdnUrlParams = p),
      (i.isCdnUrlExpired = _));
  },
  66,
);
