__d(
  "stablelib-int-1.0.1",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(e, t) {
        var n = (e >>> 16) & 65535,
          r = e & 65535,
          o = (t >>> 16) & 65535,
          a = t & 65535;
        return (r * a + (((n * a + r * o) << 16) >>> 0)) | 0;
      }
      e.mul = Math.imul || t;
      function n(e, t) {
        return (e + t) | 0;
      }
      e.add = n;
      function r(e, t) {
        return (e - t) | 0;
      }
      e.sub = r;
      function o(e, t) {
        return (e << t) | (e >>> (32 - t));
      }
      e.rotl = o;
      function a(e, t) {
        return (e << (32 - t)) | (e >>> t);
      }
      e.rotr = a;
      function i(e) {
        return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
      }
      ((e.isInteger = Number.isInteger || i),
        (e.MAX_SAFE_INTEGER = 9007199254740991),
        (e.isSafeInteger = function (t) {
          return (
            e.isInteger(t) &&
            t >= -e.MAX_SAFE_INTEGER &&
            t <= e.MAX_SAFE_INTEGER
          );
        }));
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
