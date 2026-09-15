__d(
  "FalcoCollectionConstraintChecker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      if (typeof t != "number" || !Number.isInteger(t)) return !1;
      var r = e[String(t)];
      return r == null ? !1 : r <= n;
    }
    function l(e, t) {
      return typeof t != "number" || !Number.isInteger(t) || t < 0 || t > 52
        ? !1
        : Math.floor(e / Math.pow(2, t)) % 2 === 1;
    }
    function s(t, n, r) {
      if (!Array.isArray(r)) return !1;
      var o = r[0];
      if (o === "n")
        return r.length !== 2 || !Array.isArray(r[1]) ? !1 : !s(t, n, r[1]);
      if (o === "c") return e(t.consents, r[1], n);
      if (o === "m") {
        var a;
        return l((a = t.modes) != null ? a : 0, r[1]);
      }
      if (o !== "a" && o !== "o") return !1;
      for (var i = o === "a", u = 1; u < r.length; u++) {
        var c = r[u];
        if (!Array.isArray(c)) return !1;
        if (((i = s(t, n, c)), i)) {
          if (o === "o") return !0;
        } else if (o === "a") return !1;
      }
      return i;
    }
    i.default = s;
  },
  66,
);
