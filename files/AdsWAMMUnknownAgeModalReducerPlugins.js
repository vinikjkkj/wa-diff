__d(
  "AdsWAMMUnknownAgeModalReducerPlugins",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      reduce: function (t, n) {
        var e,
          r,
          o,
          a,
          i = n.shouldSuppressFuture === !0 || t.isSuppressed;
        if (n.isVisible && t.isSuppressed) return t;
        var l =
          t.isVisible && n.isVisible
            ? Math.max(
                (e = t.adsetCount) != null ? e : 0,
                (r = n.adsetCount) != null ? r : 0,
              )
            : (o = n.adsetCount) != null
              ? o
              : t.adsetCount;
        return babelHelpers.extends({}, t, {
          adsetCount: l,
          isAlreadyUpdated: n.isVisible
            ? (a = n.isAlreadyUpdated) != null
              ? a
              : !0
            : t.isAlreadyUpdated,
          isSuppressed: i,
          isVisible: n.isVisible,
        });
      },
    };
    i.onSetVisibility = e;
  },
  66,
);
