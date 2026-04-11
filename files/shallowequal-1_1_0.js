__d(
  "shallowequal-1.1.0",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      l.exports = function (t, n, r, o) {
        var e = r ? r.call(o, t, n) : void 0;
        if (e !== void 0) return !!e;
        if (t === n) return !0;
        if (typeof t != "object" || !t || typeof n != "object" || !n) return !1;
        var a = Object.keys(t),
          i = Object.keys(n);
        if (a.length !== i.length) return !1;
        for (
          var l = Object.prototype.hasOwnProperty.bind(n), s = 0;
          s < a.length;
          s++
        ) {
          var u = a[s];
          if (!l(u)) return !1;
          var c = t[u],
            d = n[u];
          if (
            ((e = r ? r.call(o, c, d, u) : void 0),
            e === !1 || (e === void 0 && c !== d))
          )
            return !1;
        }
        return !0;
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
