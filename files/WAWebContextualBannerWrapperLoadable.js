__d(
  "WAWebContextualBannerWrapperLoadable",
  [
    "JSResourceForInteraction",
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
            "WAWebContextualBannerWrapper.react",
          )
            .__setRef("WAWebContextualBannerWrapperLoadable")
            .load();
          return e;
        }),
        "ContextualBannerWrapper",
      ),
      c = r("react-loadable")({
        loader: u,
        loading: function () {
          return s.jsx(s.Fragment, {});
        },
      });
    ((l.requireBundle = u), (l.ContextualBannerWrapperLoadable = c));
  },
  98,
);
