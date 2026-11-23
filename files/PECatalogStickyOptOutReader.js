__d(
  "PECatalogStickyOptOutReader",
  ["PECatalogStickyOptOutKeys", "PECatalogStickyOptOutOverflow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      var a,
        i =
          (a =
            e != null
              ? t == null
                ? void 0
                : t.get(o("PECatalogStickyOptOutKeys").accountKey(e, ""))
              : null) != null
            ? a
            : 0,
        l = r - i < n;
      return { lastOptOutTimestamp: i, shouldStickyOptOut: l };
    }
    function s(e, t, n, r, a, i, l) {
      var s,
        u = !(t != null && o("PECatalogStickyOptOutOverflow").isLatched(t)),
        c =
          e != null
            ? o("PECatalogStickyOptOutKeys").readKey(e, n, r, a, u, "")
            : null,
        d =
          (s = c != null ? (t == null ? void 0 : t.get(c)) : null) != null
            ? s
            : 0,
        m = l - d < i;
      return { lastOptOutTimestamp: d, shouldStickyOptOut: m };
    }
    ((l.getStickyOptOut = e), (l.getStickyOptOutGranular = s));
  },
  98,
);
