__d(
  "WAWebBizNativeAdsLoadingDrawer.react",
  ["WAWebBizNativeAdsDrawer.react", "WAWebBizNativeAdsDrawerConfig", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.step,
        n = t === void 0 ? o("WAWebBizNativeAdsDrawerConfig").INITIAL_STEP : t,
        a = o("WAWebBizNativeAdsDrawerConfig").getDrawerConfig(n);
      return s.jsx(r("WAWebBizNativeAdsDrawer.react"), {
        onBack: o("WAWebBizNativeAdsDrawerConfig").LOADING_BACK_HANDLER,
        step: n,
        children: a.loadingFallback,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
