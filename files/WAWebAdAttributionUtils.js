__d(
  "WAWebAdAttributionUtils",
  ["WAWebCTWAGatingUtils", "WAWebMsgSelectors"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s(o("WAWebMsgSelectors").showForwarded(e), e.ctwaContext);
    }
    function s(e, t) {
      return e || t == null || t.alwaysShowAdAttribution !== !0
        ? !1
        : o("WAWebCTWAGatingUtils").isAdsAttributionEnabled() === !0;
    }
    ((l.shouldShowAdAttribution = e), (l.shouldShowAdAttributionFor = s));
  },
  98,
);
