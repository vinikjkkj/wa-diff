__d(
  "WAWebHatchSpaceViewerDrawerLoadable",
  [
    "JSResourceForInteraction",
    "WAWebHatchLoadingDrawer.react",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebHatchSpaceViewerDrawer.react",
          )
            .__setRef("WAWebHatchSpaceViewerDrawerLoadable")
            .load();
          return e;
        }),
        "WAWebHatchSpaceViewerDrawer",
      ),
      c = r("react-loadable")({
        loader: u,
        loading: function (t) {
          return s.jsx(r("WAWebHatchLoadingDrawer.react"), {
            error: !!t.error,
          });
        },
      });
    l.WAWebHatchSpaceViewerDrawerLoadable = c;
  },
  98,
);
