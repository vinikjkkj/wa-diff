__d(
  "WAWebAdAttributionUtils",
  ["WAWebCTWAGatingUtils", "WAWebMsgSelectors"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (o("WAWebMsgSelectors").showForwarded(e)) return !1;
      var t = e.ctwaContext;
      return t == null || t.alwaysShowAdAttribution !== !0
        ? !1
        : o("WAWebCTWAGatingUtils").isAdsAttributionEnabled() === !0;
    }
    l.shouldShowAdAttribution = e;
  },
  98,
);
