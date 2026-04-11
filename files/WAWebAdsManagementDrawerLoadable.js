__d(
  "WAWebAdsManagementDrawerLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebAdsManagementDrawer.react",
          )
            .__setRef("WAWebAdsManagementDrawerLoadable")
            .load();
          return e.AdsManagementDrawer;
        }),
        "WAWebAdsManagementDrawer",
      ),
      d = r("react-loadable")({
        loader: c,
        loading: function (t) {
          return u.jsx(r("WAWebLoadingDrawer.react"), {
            title: s._(/*BTDS*/ "Ads Management"),
            error: !!t.error,
          });
        },
      });
    l.AdsManagementDrawerLoadable = d;
  },
  226,
);
