__d(
  "MjvUniqueItemsValidator",
  ["MjvBuiltins", "MjvKeywords"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = {};
      if (
        typeof t == "object" &&
        t.uniqueItems === !0 &&
        r("MjvBuiltins").isArray(n)
      ) {
        if (!u(n)) return !0;
        for (var i = 0; i < n.length; i++)
          for (var l = 0; l < i; l++)
            e.isEqual(n[l], n[i]) && ((a.i = i), (a.j = l));
        a.i != null &&
          a.j != null &&
          e.pushError(
            r("MjvKeywords").UNIQUE_ITEMS.ID,
            r("MjvKeywords").UNIQUE_ITEMS.message(a),
            a,
            e.getParamsWithSchemaPath(t, o, r("MjvKeywords").UNIQUE_ITEMS.ID),
            { parentSchema: t, schema: t.uniqueItems, data: n },
          );
      }
      return r("MjvBuiltins").objectKeys(a).length === 0;
    }
    var s = 16;
    function u(e) {
      var t = e.length;
      if (t <= s) {
        for (var n = 0; n < t; n++) {
          var r = e[n];
          if (r != null && typeof r == "object") return !0;
          for (var o = 0; o < n; o++) if (e[o] === r) return !0;
        }
        return !1;
      }
      for (var a = new Set(), i = 0; i < e.length; i++) {
        var l = e[i];
        if (l != null && typeof l == "object") return !0;
        a.add(l);
      }
      return a.size !== e.length;
    }
    ((l.validateUniqueItems = e), (l.mayHaveDuplicates = u));
  },
  98,
);
