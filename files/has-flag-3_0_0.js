__d(
  "has-flag-3.0.0",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      l.exports = function (e, t) {
        t = t || process.argv;
        var n = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--",
          r = t.indexOf(n + e),
          o = t.indexOf("--");
        return r !== -1 && (o === -1 ? !0 : r < o);
      };
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
