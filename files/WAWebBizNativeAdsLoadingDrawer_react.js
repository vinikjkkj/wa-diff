__d(
  "WAWebBizNativeAdsLoadingDrawer.react",
  [
    "WAWebBizNativeAdsDrawer.react",
    "WAWebBizNativeAdsDrawerConfig",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.step,
        a = n === void 0 ? o("WAWebBizNativeAdsDrawerConfig").INITIAL_STEP : n,
        i;
      t[0] !== a
        ? ((i = o("WAWebBizNativeAdsDrawerConfig").getDrawerConfig(a)),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        u;
      return (
        t[2] !== l.loadingFallback || t[3] !== a
          ? ((u = s.jsx(r("WAWebBizNativeAdsDrawer.react"), {
              onBack: o("WAWebBizNativeAdsDrawerConfig").LOADING_BACK_HANDLER,
              step: a,
              children: l.loadingFallback,
            })),
            (t[2] = l.loadingFallback),
            (t[3] = a),
            (t[4] = u))
          : (u = t[4]),
        u
      );
    }
    l.default = u;
  },
  98,
);
