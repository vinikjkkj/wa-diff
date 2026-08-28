__d(
  "LegacyImmutableObject",
  ["invariant", "isNode", "mergeHelpers"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u(t) {
      t instanceof e || s(0, 3642);
    }
    ((e = function (t) {
      Object.assign(this, t);
    }),
      (e.set = function (t, n) {
        u(t);
        var r = new e(t);
        return (Object.assign(r, n), r);
      }),
      (e.setField = function (t, n, r) {
        var o = {};
        o[n] = r;
        var a = e.set;
        return (a != null || s(0, 163524), a(t, o));
      }),
      (e.setDeep = function (e, t) {
        return (u(e), c(e, t));
      }));
    function c(t, n) {
      r("mergeHelpers").checkMergeObjectArgs(t, n);
      for (var o = {}, a = Object.keys(t), i = 0; i < a.length; i++) {
        var l = a[i];
        Object.prototype.hasOwnProperty.call(n, l)
          ? r("mergeHelpers").isTerminal(t[l]) ||
            r("mergeHelpers").isTerminal(n[l])
            ? (o[l] = n[l])
            : (o[l] = c(t[l], n[l]))
          : (o[l] = t[l]);
      }
      for (var s = Object.keys(n), u = 0; u < s.length; u++) {
        var d = s[u];
        Object.prototype.hasOwnProperty.call(t, d) || (o[d] = n[d]);
      }
      return t instanceof e || n instanceof e ? new e(o) : o;
    }
    var d = e;
    l.default = d;
  },
  98,
);
