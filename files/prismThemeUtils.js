__d(
  "prismThemeUtils",
  ["prismDefaultTheme", "prismVscDarkPlusTheme"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      var o,
        a = e.default[n],
        i =
          t != null ? ((o = e[t.toLowerCase()]) == null ? void 0 : o[n]) : null;
      if (r === "style" && n === "string") {
        var l;
        if (((l = e.stringTokens) == null ? void 0 : l.style) != null)
          return e.stringTokens.style;
      }
      return [a, i];
    }
    function s(e) {
      return r(e === "light" ? "prismDefaultTheme" : "prismVscDarkPlusTheme");
    }
    ((l.getXStyleForPrismTheme = e), (l.getPrismTheme = s));
  },
  98,
);
