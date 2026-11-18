__d(
  "relay-runtime/util/stableCopy",
  ["relay-runtime/util/RelayFeatureFlags"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = Array.prototype.some;
    function l(e) {
      if (!e || typeof e != "object") return e;
      if (Array.isArray(e)) return e.map(l);
      for (var t = Object.keys(e).sort(), n = {}, r = 0; r < t.length; r++)
        n[t[r]] = l(e[t[r]]);
      return n;
    }
    function s(e, t) {
      return n("relay-runtime/util/RelayFeatureFlags").ENABLE_PERF_QUERY
        ? c(e, t === void 0 || t.size === 0 ? [] : Array.from(t))
        : u(e, t === void 0 ? new Set() : t);
    }
    function u(e, t) {
      if (e == null || typeof e != "object") return !1;
      if (t.has(e)) return !0;
      var n = new Set(t);
      n.add(e);
      var r = Array.isArray(e) ? e : Object.values(e);
      return r.some(function (e) {
        return u(e, n);
      });
    }
    function c(t, n) {
      if (t == null || typeof t != "object") return !1;
      if (n.includes(t)) return !0;
      var r;
      if (Array.isArray(t)) {
        var o = t;
        if (o.some !== e) return u(t, new Set(n));
        r = t;
      } else r = Object.values(t);
      n.push(t);
      for (var a = !1, i = r.length, l = 0; l < i && !a; l++) a = c(r[l], n);
      return (n.pop(), a);
    }
    a.exports = { hasCycle: s, stableCopy: l };
  },
  null,
);
