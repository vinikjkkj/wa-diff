__d(
  "useWAWebPrivacyTipQuickPromotion",
  [
    "WAWebSettingsConst",
    "react-compiler-runtime",
    "useWAWebBestQuickPromotionForSurface",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("react-compiler-runtime").c(6),
        r;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { fireImpression: !0 }), (n[0] = r))
        : (r = n[0]);
      var a = o(
        "useWAWebBestQuickPromotionForSurface",
      ).useBestQuickPromotionForSurface(e, r, t);
      if (a != null) {
        var i = a.promotion,
          l = i.promotion.data.primaryAction,
          s;
        if (l != null && l.deepLink != null) {
          var u;
          (n[1] !== l.deepLink
            ? ((u = o("WAWebSettingsConst").SettingsSteps.cast(l.deepLink)),
              (n[1] = l.deepLink),
              (n[2] = u))
            : (u = n[2]),
            (s = u));
        }
        var c = s != null ? s : o("WAWebSettingsConst").SettingsSteps.Settings,
          d;
        return (
          n[3] !== a || n[4] !== c
            ? ((d = babelHelpers.extends({}, a, { settingStep: c })),
              (n[3] = a),
              (n[4] = c),
              (n[5] = d))
            : (d = n[5]),
          d
        );
      }
    }
    l.usePrivacyTipQuickPromotion = e;
  },
  98,
);
