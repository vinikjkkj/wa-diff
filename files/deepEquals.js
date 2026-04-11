__d(
  "deepEquals",
  ["isPrimitive"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return function (e, n) {
          return d(e, t[n]);
        };
      },
      s = function (t, n) {
        return function (e) {
          return e in t && e in n && d(t[e], n[e]);
        };
      },
      u = function (t, n) {
        if (t.size !== n.size) return !1;
        var e = new Set(n);
        for (var o of t.keys())
          if (e.has(o)) e.delete(o);
          else {
            if (r("isPrimitive")(o)) return !1;
            var a = c(e, o);
            if (a != null) e.delete(a);
            else return !1;
          }
        return e.size === 0;
      };
    function c(e, t) {
      for (var n of e) if (d(n, t)) return n;
      return null;
    }
    function d(t, n) {
      if (t === n) return !0;
      if (
        r("isPrimitive")(t) ||
        Object.prototype.toString.call(t) !== Object.prototype.toString.call(n)
      )
        return !1;
      if (Array.isArray(t)) return t.length === n.length && t.every(e(n));
      if (t instanceof Set) return u(t, n);
      var o = Object.keys(t);
      return o.length !== Object.keys(n).length ? !1 : o.every(s(t, n));
    }
    l.default = d;
  },
  98,
);
