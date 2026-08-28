__d(
  "BillingGetObjectDiff",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null) return "null";
      var t = typeof e;
      return t !== "object"
        ? t
        : Array.isArray(e)
          ? "array"
          : typeof e == "object"
            ? "object"
            : null;
    }
    function l(e, t) {
      return e === t
        ? !0
        : typeof e == "string" && typeof t == "number"
          ? e === String(t)
          : typeof e == "number" && typeof t == "string"
            ? String(e) === t
            : !1;
    }
    function s(t, n, r) {
      if (
        !(
          t === n ||
          ((r == null ? void 0 : r.equalityType) === "loose" && t === n) ||
          ((r == null ? void 0 : r.equalityType) === "stringish" && l(t, n))
        )
      ) {
        var o = e(n),
          a = e(t);
        if (o !== a) return t != null ? t : null;
        if (a === "object") {
          var i = t,
            s = n;
          return u(i, s, r);
        }
        if (a === "array") {
          var d = t,
            m = n;
          return c(d, m, r);
        }
        var p = JSON.stringify(n),
          _ = JSON.stringify(t);
        if (!(_ != null && p === _)) return t != null ? t : null;
      }
    }
    function u(e, t, n) {
      var r = Object.getOwnPropertyNames(babelHelpers.extends({}, t, e)),
        o = {};
      if (
        (r.forEach(function (r) {
          var a = r + "__hash__";
          if (!(e[a] != null && t[a] === e[a])) {
            var i = s(e[r], t[r], n);
            i !== void 0 && (o[r] = i != null ? i : e[r]);
          }
        }),
        Object.keys(o).length !== 0)
      )
        return o;
    }
    function c(e, t, n) {
      if (e.length !== t.length) return e;
      for (var r = 0; r < t.length; r++) {
        var o = s(e[r], t[r], n);
        if (o !== void 0) return e;
      }
    }
    function d(e, t) {
      var n;
      return (n = s(e, t)) != null ? n : {};
    }
    i.default = d;
  },
  66,
);
