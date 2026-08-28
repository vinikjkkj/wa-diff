__d(
  "deepCompare",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(t, n) {
      if (t === n) return !0;
      if (
        !(t instanceof Object) ||
        !(n instanceof Object) ||
        t.constructor !== n.constructor
      )
        return !1;
      if (Array.isArray(t) && Array.isArray(n)) {
        if (t.length !== n.length) return !1;
        for (var r = {}, o = 0, a = 0, i = t.length; a < i; a++)
          for (var l = o, s = 0, u = n.length; s < u && l === o; s++)
            r[s] || (e(t[a], n[s]) && ((r[s] = !0), o++));
        return o === t.length;
      } else {
        var c = t,
          d = n;
        for (var m in c)
          if (Object.prototype.hasOwnProperty.call(c, m)) {
            if (!Object.prototype.hasOwnProperty.call(d, m)) return !1;
            if (c[m] !== d[m] && (typeof c[m] != "object" || !e(c[m], d[m])))
              return !1;
          }
        for (m in d)
          if (
            Object.prototype.hasOwnProperty.call(d, m) &&
            !Object.prototype.hasOwnProperty.call(c, m)
          )
            return !1;
      }
      return !0;
    }
    i.default = e;
  },
  66,
);
