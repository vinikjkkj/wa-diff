__d(
  "PECatalogStickyOptOutReader",
  ["PECatalogStickyOptOutKeys", "PECatalogStickyOptOutOverflow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a) {
      var i;
      a === void 0 && (a = "");
      var l =
          (i =
            e != null
              ? t == null
                ? void 0
                : t.get(o("PECatalogStickyOptOutKeys").accountKey(e, a))
              : null) != null
            ? i
            : 0,
        s = r - l < n;
      return { lastOptOutTimestamp: l, shouldStickyOptOut: s };
    }
    function s(e, t, n, r, a, i, l, s, u) {
      var c;
      u === void 0 && (u = "");
      var d =
          t != null && o("PECatalogStickyOptOutOverflow").isLatched(t) ? !1 : i,
        m =
          e != null
            ? o("PECatalogStickyOptOutKeys").readKey(e, n, r, a, d, u)
            : null,
        p =
          (c = m != null ? (t == null ? void 0 : t.get(m)) : null) != null
            ? c
            : 0,
        _ = s - p < l;
      return { lastOptOutTimestamp: p, shouldStickyOptOut: _ };
    }
    ((l.getStickyOptOut = e), (l.getStickyOptOutGranular = s));
  },
  98,
);
