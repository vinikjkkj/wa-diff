__d(
  "getRequestIdentifierWithSortedArrays",
  ["invariant", "isFalsey", "isPrimitive"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(t) {
      if (r("isFalsey")(t) || typeof t != "object") return t;
      if (Array.isArray(t))
        return t.every(function (e) {
          return r("isPrimitive")(e);
        })
          ? t.toSorted()
          : t.map(e);
      if (t == null) return t;
      for (var n = Object.keys(t).sort(), o = {}, a = 0; a < n.length; a++)
        o[n[a]] = e(t[n[a]]);
      return o;
    }
    function u(t, n) {
      var r = t.cacheID != null ? t.cacheID : t.id;
      return (r != null || s(0, 22755, t.name), r + JSON.stringify(e(n)));
    }
    l.default = u;
  },
  98,
);
