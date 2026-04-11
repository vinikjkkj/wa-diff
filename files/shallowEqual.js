__d(
  "shallowEqual",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = Object.prototype.hasOwnProperty;
    function l(e, t) {
      return e === t
        ? e !== 0 || t !== 0 || 1 / e === 1 / t
        : e !== e && t !== t;
    }
    function s(t, n) {
      if (l(t, n)) return !0;
      if (
        typeof t != "object" ||
        t === null ||
        typeof n != "object" ||
        n === null
      )
        return !1;
      var r = Object.keys(t),
        o = Object.keys(n);
      if (r.length !== o.length) return !1;
      for (var a = 0; a < r.length; a++)
        if (!e.call(n, r[a]) || !l(t[r[a]], n[r[a]])) return !1;
      return !0;
    }
    i.default = s;
  },
  66,
);
