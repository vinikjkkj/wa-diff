__d(
  "relay-runtime/util/recycleNodesInto",
  ["relay-runtime/util/RelayFeatureFlags"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return n("relay-runtime/util/RelayFeatureFlags").ENABLE_PERF_NOTIFY
        ? s(e, t, !0)
        : l(e, t, !0);
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
    function s(e, t, n) {
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
        for (
          var i = null,
            l = !0,
            d = o.length < a.length ? o.length : a.length,
            m = 0;
          m < d;
          m++
        )
          if (m in a) {
            var p = o[m],
              _ = a[m];
            if (_ !== p) {
              if (typeof _ != "object" || _ === null) {
                l = !1;
                continue;
              }
              i == null && (i = n && !Object.isFrozen(a));
              var f = s(p, _, i);
              (f !== _ && i && (a[m] = f), (l = l && f === p));
            }
          }
        r = l && o.length === a.length;
      } else if (!o && !a) {
        var g = e,
          h = t,
          y = null,
          C = !0,
          b = 0;
        for (var v in h) {
          b++;
          var S = g[v],
            R = h[v];
          if (R !== S) {
            if (typeof R != "object" || R === null) {
              C = !1;
              continue;
            }
            y == null && (y = n && !Object.isFrozen(h));
            var L = s(S, R, y);
            (L !== R && y && u(h, v, L), (C = C && L === S));
          }
        }
        r = C && c(g) === b;
      }
      return r ? e : t;
    }
    function u(e, t, n) {
      e[t] = n;
    }
    function c(e) {
      var t = 0;
      for (var n in e) t++;
      return t;
    }
    a.exports = e;
  },
  null,
);
