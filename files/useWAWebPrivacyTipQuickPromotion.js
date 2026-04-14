__d(
  "useWAWebPrivacyTipQuickPromotion",
  ["WAWebSettingsConst", "useWAWebBestQuickPromotionForSurface"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o(
        "useWAWebBestQuickPromotionForSurface",
      ).useBestQuickPromotionForSurface(e, { fireImpression: !0 }, t);
      if (n != null) {
        var r = n.promotion,
          a = r.promotion.data.primaryAction,
          i;
        return (
          a != null &&
            a.deepLink != null &&
            (i = o("WAWebSettingsConst").SettingsSteps.cast(a.deepLink)),
          babelHelpers.extends({}, n, {
            settingStep:
              i != null ? i : o("WAWebSettingsConst").SettingsSteps.Settings,
          })
        );
      }
    }
    l.usePrivacyTipQuickPromotion = e;
  },
  98,
);
