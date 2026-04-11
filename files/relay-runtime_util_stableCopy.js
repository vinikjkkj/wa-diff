__d(
  "relay-runtime/util/stableCopy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(t) {
      if (!t || typeof t != "object") return t;
      if (Array.isArray(t)) return t.map(e);
      for (var n = Object.keys(t).sort(), r = {}, o = 0; o < n.length; o++)
        r[n[o]] = e(t[n[o]]);
      return r;
    }
    function l(e, t) {
      if ((t === void 0 && (t = new Set()), !e || typeof e != "object"))
        return !1;
      if (t.has(e)) return !0;
      var n = new Set(t);
      n.add(e);
      var r = Array.isArray(e) ? e : Object.values(e);
      return r.some(function (e) {
        return l(e, n);
      });
    }
    a.exports = { hasCycle: l, stableCopy: e };
  },
  null,
);
