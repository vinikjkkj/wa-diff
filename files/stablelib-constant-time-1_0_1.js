__d(
  "stablelib-constant-time-1.0.1",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(e, t, n) {
        return (~(e - 1) & t) | ((e - 1) & n);
      }
      e.select = t;
      function n(e, t) {
        return (((e | 0) - (t | 0) - 1) >>> 31) & 1;
      }
      e.lessOrEqual = n;
      function r(e, t) {
        if (e.length !== t.length) return 0;
        for (var n = 0, r = 0; r < e.length; r++) n |= e[r] ^ t[r];
        return 1 & ((n - 1) >>> 8);
      }
      e.compare = r;
      function o(e, t) {
        return e.length === 0 || t.length === 0 ? !1 : r(e, t) !== 0;
      }
      e.equal = o;
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    function d(e) {
      switch (e) {
        case void 0:
          return c();
      }
    }
    a.exports = d;
  },
  null,
);
