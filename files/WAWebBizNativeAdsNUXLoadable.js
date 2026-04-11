__d(
  "WAWebBizNativeAdsNUXLoadable",
  [
    "JSResourceForInteraction",
    "WAWebBizNativeAdsLoadingDrawer.react",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebBizNativeAdsNUXContainer.react",
          )
            .__setRef("WAWebBizNativeAdsNUXLoadable")
            .load();
          return e.WAWebBizNativeAdsNUXContainer;
        }),
        "BizNativeAdsNUXContainer",
      ),
      c = r("WAWebLoadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {});
        },
      });
    l.BizNativeAdsNUXLoadable = c;
  },
  98,
);
