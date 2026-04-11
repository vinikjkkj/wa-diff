__d(
  "relay-runtime/util/recycleNodesInto",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return l(e, t, !0);
    }
    function l(e, t, n) {
      if (
        e === t ||
        typeof e != "object" ||
        !e ||
        (e.constructor !== Object && !Array.isArray(e)) ||
        typeof t != "object" ||
        !t ||
        (t.constructor !== Object && !Array.isArray(t))
      )
        return t;
      var r = !1,
        o = Array.isArray(e) ? e : null,
        a = Array.isArray(t) ? t : null;
      if (o && a) {
        var i = n && !Object.isFrozen(a);
        r =
          a.reduce(function (e, t, n) {
            var r = o[n],
              s = l(r, t, i);
            return (s !== a[n] && i && (a[n] = s), e && s === o[n]);
          }, !0) && o.length === a.length;
      } else if (!o && !a) {
        var s = e,
          u = t,
          c = Object.keys(s),
          d = Object.keys(u),
          m = n && !Object.isFrozen(u);
        r =
          d.reduce(function (e, t) {
            var n = s[t],
              r = l(n, u[t], m);
            return (r !== u[t] && m && (u[t] = r), e && r === s[t]);
          }, !0) && c.length === d.length;
      }
      return r ? e : t;
    }
    a.exports = e;
  },
  null,
);
