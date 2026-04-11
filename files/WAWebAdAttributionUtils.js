__d(
  "WAWebAdAttributionUtils",
  ["WAWebBizGatingUtils", "WAWebMsgSelectors"],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
      if (o("WAWebMsgSelectors").showForwarded(t)) return !1;
      var e = t.ctwaContext;
      return e == null || e.alwaysShowAdAttribution !== !0
        ? !1
        : o("WAWebBizGatingUtils").isAdsAttributionEnabled() === !0;
    };
    l.shouldShowAdAttribution = e;
  },
  98,
);
